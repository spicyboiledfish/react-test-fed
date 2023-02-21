import { Bridge } from '@hupu/api-bridge'
import commonPlugins from '@hupu/bridge-plugin-common';
import type { PluginTypes } from '@hupu/bridge-plugin-common';
const Task = new Bridge().plugin<PluginTypes>(commonPlugins);

// export { init, track, setExtData } from '@hupu/hp-tracer';
// export type { TrackParams } from '@hupu/hp-tracer';

export default Task