import { pauseVideo } from '~/helpers/pause-video.helper';
import './overlay.css';

export default function Overlay() {
  return <div class="pa-alert__overlay" onClick={(event) => pauseVideo(event)}></div>;
}
