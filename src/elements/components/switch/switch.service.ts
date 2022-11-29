import { classesToString, debug } from '~/helpers';

class SwitchService {
  public getClasses(variant: string, className: string) {
    const base = classesToString(['pg-switch', [variant, `pa-switch--${variant}`], className || '']);

    debug(`SwitchService getClasses: base: ${base}`);
    return { base };
  }
}

export const switchService = new SwitchService();
