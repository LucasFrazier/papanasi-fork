export default function Trigger(props) {
  return (
    <label class="pa-switch-paddle" htmlFor={props.inputId}>
      <span class="pa-switch--active">{props.onText}</span>
      <span class="pa-switch--inactive">{props.offText}</span>
    </label>
  );
}
