import { classesToString, debug } from '~/helpers';

class CheckboxService {
  public getClasses(variant: string, className: string) {
    const base = classesToString(['pa-tree__checkbox', [variant, `pa-tree__checkbox--${variant}`], className || '']);

    debug(`CheckboxService getClasses: base: ${base}`);
    return { base };
  }
}

export const checkboxService = new CheckboxService();
