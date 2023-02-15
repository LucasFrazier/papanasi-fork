import type { LabelProps } from './label.model';
import './label.css';

export default function Label(props: LabelProps) {
  return (
    <label htmlFor={props.htmlFor} class={`pa-tree__label ${props.className}`}>
      {props.children}
    </label>
  );
}
