function getVariantCssValue(variant: string): string {
  return `var(--color-${variant})`;
}

const colorUtils = {
  getVariantCssValue
}

export default colorUtils;
