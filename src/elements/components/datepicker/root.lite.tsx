import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { RootProps, RootState } from './root.model';
import { rootService } from './root.service';

useMetadata({ isAttachedToShadowDom: true });

export default function Root(props: RootProps) {
  const state = useStore<RootState>({
    loaded: false,
    classes: { base: '' },
    value: ''
  });

  onMount(() => {
    state.loaded = true;
    state.classes = rootService.getClasses(props.variant, props.className);
    state.value = props.initialValue || new Date().toISOString().slice(0, 10);
  });

  return (
    <Show when={state.loaded}>
      {/* <div class={state.classes.base}>{props.children}</div> */}
      {/* <label htmlFor="From" className="min-w-[2.625rem] text-sm">
        {props.children}
      </label> */}
      <input
        type="date"
        id={props.id}
        name={props.name}
        value={state.value}
        onChange={(event) => (state.value = event.target.value)}
        min={props.min || ''}
        max={props.max || ''}
        class={state.classes.base}
      ></input>
    </Show>
  );
}
