import type { BaseProps } from '~/models';
import './item.css';

export default function Item(props: BaseProps) {
  return <li class="pa-navbar__item">{props.children}</li>;
}
