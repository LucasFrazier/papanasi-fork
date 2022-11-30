import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import './switch.css';
import type { SwitchProps, SwitchState } from './switch.model';
import { switchService } from './switch.service';

useMetadata({ isAttachedToShadowDom: true });

export default function Switch(props: SwitchProps) {
  const state = useStore<SwitchState>({
    loaded: false,
    classes: { base: '' }
  });

  onMount(() => {
    state.loaded = true;
    state.classes = switchService.getClasses(props.variant, props.className || props.classList);
  });

  return (
    <Show when={state.loaded}>
      <div class={state.classes.base}>
        <input class="pa-switch-input" id={props.inputId} type="checkbox" />
        {props.children}
      </div>
    </Show>
  );
}
