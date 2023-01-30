import { classesToString, debug } from '~/helpers';

class ContentService {
  public getClasses(side: string, className: string) {
    const base = classesToString(['pa-tooltip__content', [side, `pa-tooltip__content--${side}`], className || '']);

    debug(`ContentService getClasses: base: ${base}`);
    return { base };
  }
}

export const contentService = new ContentService();
