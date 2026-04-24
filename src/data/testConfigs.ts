/**
 * 测试配置注册表
 * 动态导入各测试的配置文件
 */

// 导入各测试的配置
import travelConfig from '../../tests/travel/config';
import psychologyConfig from '../../tests/psychology/config';
import consumptionConfig from '../../tests/consumption/config';
import socialConfig from '../../tests/social/config';
import fortuneConfig from '../../tests/fortune/config';
import campusConfig from '../../tests/campus/config';
import loveConfig from '../../tests/love/config';

export interface TestConfig {
  id: string;
  title: string;
  questions: {
    id: number;
    text: string;
    options: {
      text: string;
      score: Record<string, number>;
    }[];
  }[];
  personalities: {
    id: string;
    name: string;
    description: string;
  }[];
  hidden_personalities?: {
    id: string;
    name: string;
    description: string;
    trigger: (answers: (string | null)[]) => boolean;
  }[];
  score_aliases?: Record<string, string | string[]>;
}

export const TEST_CONFIGS: Record<string, TestConfig> = {
  love: loveConfig,
  psychology: psychologyConfig,
  social: socialConfig,
  fortune: fortuneConfig,
  campus: campusConfig,
  consumption: consumptionConfig,
  travel: travelConfig,
};

export const TEST_LIST = Object.values(TEST_CONFIGS);
