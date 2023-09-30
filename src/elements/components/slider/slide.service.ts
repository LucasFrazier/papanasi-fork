import { classesToString, debug } from '~/helpers';

class SlideService {
  public getClasses(rounded: string, className: string) {
    const base = classesToString(['pa-slider__slide', [rounded, `pa__border-radius--${rounded}`], className || '']);

    debug(`SlideService getClasses: base: ${base}`);
    return { base };
  }
}

export const slideService = new SlideService();
