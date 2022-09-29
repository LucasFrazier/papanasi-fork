import { classesToString } from '../../../helpers';

class SpinnerService {
  public getClasses(variant: string, full: string, fullscreen: string, className: string) {
    const base = classesToString([
      'pa-spinner',
      [variant, `pa-spinner--${variant}`],
      [full && !fullscreen, 'pa-spinner--full'],
      [fullscreen, 'pa-spinner--fullscreen'],
      className || ''
    ]);

    return { base };
  }
}

export const spinnerService = new SpinnerService();
