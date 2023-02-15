import { classesToString, debug } from '~/helpers';

class TriggerService {
  public getClasses(variant: string, className: string) {
    const base = classesToString(['pa-tree__trigger', [variant, `pa-tree__trigger--${variant}`], className || '']);

    debug(`TriggerService getClasses: base: ${base}`);
    return { base };
  }
}

export const triggerService = new TriggerService();
