import type { BaseProps } from '~/models';
import './description.css';

export default function Description(props: BaseProps) {
  return <p class={`pa-alert__description`}>{props.children}</p>;
}
