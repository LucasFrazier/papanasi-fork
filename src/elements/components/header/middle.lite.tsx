import type { BaseProps } from '~/models';
import './middle.css';

export default function Middle(props: BaseProps) {
  return <div class="pa-header__middle">{props.children}</div>;
}
