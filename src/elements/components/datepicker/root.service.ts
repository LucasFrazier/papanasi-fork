import { classesToString, debug } from '~/helpers';

class RootService {
  public getClasses(variant: string, className: string) {
    const base = classesToString([
      'pa-datepicker__root',
      [variant, `pa-datepicker__root--${variant}`],
      className || ''
    ]);

    debug(`RootService getClasses: base: ${base}`);
    return { base };
  }
}

export const rootService = new RootService();
