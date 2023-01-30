import { classesToString, debug } from '~/helpers';

class RootService {
  public getClasses(variant: string, sticky: boolean, className: string) {
    const base = classesToString([
      'pa-header__root',
      [variant, `pa-header__root--${variant}`],
      [sticky, 'pa-header__root--sticky'],
      className || ''
    ]);

    debug(`RootService getClasses: base: ${base}`);
    return { base };
  }
}

export const rootService = new RootService();
