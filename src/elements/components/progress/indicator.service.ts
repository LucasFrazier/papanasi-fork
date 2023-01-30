import { classesToString, debug } from '~/helpers';

class IndicatorService {
  public getClasses(variant: string, rounded: string, className: string) {
    const base = classesToString([
      'pa-progress__indicator',
      [variant, `pa-progress__indicator--${variant}`],
      [rounded, `pa__border-radius--${rounded}`],
      className || ''
    ]);

    debug(`IndicatorService getClasses: base: ${base}`);
    return { base };
  }
}

export const indicatorService = new IndicatorService();
