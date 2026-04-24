/**
 * 计分系统工具 v2
 * 支持多特质评分算法
 */

import { TEST_CONFIGS, TestConfig } from '../data/testConfigs';

export interface PersonalityScore {
  id: string;
  name: string;
  description: string;
  score: number;
  maxScore: number;
  matchPercentage: number;
  isHidden: boolean;
}

export interface ScoreResult {
  totalAnswers: number;
  personalityScores: PersonalityScore[];
  topPersonalities: PersonalityScore[];
  hiddenTriggered: PersonalityScore[];
  resultId: string;
}

function resolveScoreTargets(trait: string, config: TestConfig, personalityIds: Set<string>): string[] {
  const alias = config.score_aliases?.[trait];
  const targets = alias ? (Array.isArray(alias) ? alias : [alias]) : [trait];

  return targets.filter(target => personalityIds.has(target));
}

function getDisplayScores(
  rawScores: Record<string, number>,
  config: TestConfig,
  personalityIds: Set<string>
): Record<string, number> {
  const displayScores: Record<string, number> = {};

  Object.entries(rawScores).forEach(([trait, points]) => {
    resolveScoreTargets(trait, config, personalityIds).forEach(target => {
      displayScores[target] = (displayScores[target] || 0) + points;
    });
  });

  return displayScores;
}

function calculateMaxScores(config: TestConfig, personalityIds: Set<string>): Record<string, number> {
  const maxScores: Record<string, number> = {};
  config.personalities.forEach(p => {
    maxScores[p.id] = 0;
  });

  config.questions.forEach(question => {
    const questionMax: Record<string, number> = {};

    question.options.forEach(option => {
      const optionScores = getDisplayScores(option.score, config, personalityIds);

      Object.entries(optionScores).forEach(([trait, points]) => {
        questionMax[trait] = Math.max(questionMax[trait] || 0, points);
      });
    });

    Object.entries(questionMax).forEach(([trait, points]) => {
      maxScores[trait] = (maxScores[trait] || 0) + points;
    });
  });

  return maxScores;
}

/**
 * 计算某个测试的得分和结果
 * @param testId 测试ID
 * @param answers 用户答案 { questionId: selectedOptionText }
 * @param config 测试配置
 */
export function calculateScore(
  testId: string,
  answers: Record<number, string>,
  config: TestConfig
): ScoreResult {
  // 初始化各人格特质的得分
  const traitScores: Record<string, number> = {};
  const personalityIds = new Set(config.personalities.map(p => p.id));
  const maxScores = calculateMaxScores(config, personalityIds);

  config.personalities.forEach(p => {
    traitScores[p.id] = 0;
  });

  // 收集所有答案文本用于隐藏人格检测
  const answerTexts: (string | null)[] = [];

  // 遍历每个问题，累加得分
  Object.entries(answers).forEach(([questionId, selectedText]) => {
    const qId = parseInt(questionId);
    const question = config.questions.find(q => q.id === qId);
    if (!question) return;

    // 找到用户选择的选项
    const selectedOption = question.options.find(opt => opt.text === selectedText);
    if (!selectedOption) return;

    // 累加该选项给各特质带来的得分
    const selectedScores = getDisplayScores(selectedOption.score, config, personalityIds);
    Object.entries(selectedScores).forEach(([trait, points]) => {
      traitScores[trait] = (traitScores[trait] || 0) + points;
    });

    // 收集答案文本用于隐藏人格检测
    answerTexts.push(selectedText);
  });

  // 构建人格得分列表
  const personalityScores: PersonalityScore[] = config.personalities.map((p, index) => {
    const score = traitScores[p.id] || 0;
    const maxScore = maxScores[p.id] || 0;

    return {
      id: p.id,
      name: p.name,
      description: p.description,
      score,
      maxScore,
      matchPercentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
      isHidden: false,
    };
  });

  // 检查隐藏人格
  const hiddenTriggered: PersonalityScore[] = [];
  if (config.hidden_personalities) {
    config.hidden_personalities.forEach(hidden => {
      if (hidden.trigger(answerTexts)) {
        hiddenTriggered.push({
          id: hidden.id,
          name: hidden.name,
          description: hidden.description,
          score: 0,
          maxScore: 0,
          matchPercentage: 0,
          isHidden: true,
        });
      }
    });
  }

  // 按得分排序，获取前几名
  const sortedPersonalities = [...personalityScores].sort((a, b) => {
    const percentageDiff = b.matchPercentage - a.matchPercentage;
    if (percentageDiff !== 0) return percentageDiff;

    return b.score - a.score;
  });
  const topPersonalities = sortedPersonalities.slice(0, 3);

  // 确定主要结果ID（最高分的人格）
  const resultId = topPersonalities[0]?.id || config.personalities[0]?.id || '';

  return {
    totalAnswers: Object.keys(answers).length,
    personalityScores,
    topPersonalities,
    hiddenTriggered,
    resultId,
  };
}
