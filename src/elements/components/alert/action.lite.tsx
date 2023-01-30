import type { BaseProps } from '~/models';
import './action.css';

export default function Action(props: BaseProps) {
  return <div class="pa-alert__action">{props.children}</div>;
}
