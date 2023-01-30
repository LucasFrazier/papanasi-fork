import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { ContentProps, ContentState } from './content.model';
import { contentService } from './content.service';
import { pauseVideo } from '~/helpers/pause-video.helper';
import './content.css';

useMetadata({ isAttachedToShadowDom: true });

export default function Content(props: ContentProps) {
  const state = useStore<ContentState>({
    loaded: false,
    classes: { base: '' }
  });

  onMount(() => {
    state.loaded = true;
    state.classes = contentService.getClasses(props.rounded, props.className);
  });

  return (
    <Show when={state.loaded}>
      <div class={state.classes.base}>
        {props.children}
        <button
          class="pa-alert__content--close"
          role="button"
          aria-label="close modal"
          onClick={(event) => pauseVideo(event)}
        >
          x
        </button>
      </div>
    </Show>
  );
}
