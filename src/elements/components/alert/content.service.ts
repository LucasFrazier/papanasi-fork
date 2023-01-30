import { classesToString, debug } from '~/helpers';

class ContentService {
  public getClasses(rounded: string, className: string) {
    const base = classesToString(['pa-alert__content', [rounded, `pa__border-radius--${rounded}`], className || '']);

    debug(`ContentService getClasses: base: ${base}`);
    return { base };
  }
}

export const contentService = new ContentService();
