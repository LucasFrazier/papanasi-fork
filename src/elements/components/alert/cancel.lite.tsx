import type { BaseProps } from '~/models';
import { pauseVideo } from '~/helpers/pause-video.helper';
import './cancel.css';

export default function Cancel(props: BaseProps) {
  return (
    <div class="pa-alert__cancel" onClick={(event) => pauseVideo(event)}>
      {props.children}
    </div>
  );
}
