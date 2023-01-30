import type { BaseProps } from '~/models';
import './trigger.css';

export default function Trigger(props: BaseProps) {
  return <div class="pa-tooltip__trigger">{props.children}</div>;
}
