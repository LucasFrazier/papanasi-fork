import type { BaseProps } from '~/models';
import './end.css';

export default function End(props: BaseProps) {
  return <div class="pa-footer__end">{props.children}</div>;
}
