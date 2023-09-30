import type { BaseProps, BaseState, Dynamic, Intent, Variant } from '~/models';

export type SlideProps = {
  id: string;
  variant?: Dynamic<Variant>;
  intent?: Dynamic<Intent>;
  outline?: boolean;
  disabled?: boolean;
} & BaseProps;

export type SlideState = {
  classes: { base: string };
} & BaseState;
