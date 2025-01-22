function getVariantCssValue(variant: string): string {
  return `var(--color-${variant})`;
}

function lightenHSL(variant: string, percent: number): string {
  const hsl = getComputedStyle(document.documentElement).getPropertyValue(variant);

  // upgrade to take into account decimal values
  const [h, s, l] = hsl.match(/\d+\.*\d*/g)!.map(Number);
  const newL = Math.min(100, l + percent);
  return `hsl(${h}, ${s}%, ${newL}%)`;
}

const colorUtils = {
  getVariantCssValue,
  lightenHSL,
}

export default colorUtils;
