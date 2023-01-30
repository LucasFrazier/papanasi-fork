import { classesToString, debug } from '~/helpers';

class TitleService {
  public getClasses(variant: string, className: string) {
    const base = classesToString(['pa-card__title', [variant, `pa-card__title--${variant}`], className || '']);

    debug(`TitleService getClasses: base: ${base}`);
    return { base };
  }
}

export const titleService = new TitleService();
