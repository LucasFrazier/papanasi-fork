import type { BaseProps } from '~/models';
import './start.css';

export default function Start(props: BaseProps) {
  return <div class="pa-header__start">{props.children}</div>;
}
