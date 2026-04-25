export function getOptimizedPersonalityImage(category: string, id: string, size: 384 | 768 = 768): string {
  return `/images-optimized/${category}/${id}-${size}.webp`;
}

export function getPersonalityImageFallback(category: string, id: string): string {
  return `/images/${category}/${id}.png`;
}

export function getPersonalityImageSrcSet(category: string, id: string): string {
  return [
    `${getOptimizedPersonalityImage(category, id, 384)} 384w`,
    `${getOptimizedPersonalityImage(category, id, 768)} 768w`,
  ].join(', ');
}

export function getBackgroundImage(id: string): string {
  return `/images-optimized/backgrounds/${id}-bg.webp`;
}
