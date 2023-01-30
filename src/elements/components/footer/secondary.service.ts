import { classesToString, debug } from '~/helpers';

class SecondaryService {
  public getClasses(variant: string, className: string) {
    const base = classesToString([
      'pa-footer__secondary',
      [variant, `pa-footer__secondary--${variant}`],
      className || ''
    ]);

    debug(`SecondaryService getClasses: base: ${base}`);
    return { base };
  }
}

export const secondaryService = new SecondaryService();
