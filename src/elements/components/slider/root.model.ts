import type { BaseProps, BaseState, Dynamic, Intent, Variant } from '~/models';

export type RootProps = {
  id: string;
  variant?: Dynamic<Variant>;
  intent?: Dynamic<Intent>;
  outline?: boolean;
  disabled?: boolean;
} & BaseProps;

export type RootState = {
  classes: { base: string };
  slideIndex: number;
} & BaseState;
