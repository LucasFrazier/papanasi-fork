import { classesToString, debug } from '~/helpers';

class RootService {
  public getClasses(rounded: string, className: string) {
    const base = classesToString(['pa-slider__root', [rounded, `pa__border-radius--${rounded}`], className || '']);

    debug(`RootService getClasses: base: ${base}`);
    return { base };
  }
}

export const rootService = new RootService();
