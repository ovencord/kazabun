
import { KazagumoTrack } from './Managers/Supports/KazagumoTrack.ts';
import { KazagumoQueue } from './Managers/Supports/KazagumoQueue.ts';
import { KazagumoPlayer } from './Managers/KazagumoPlayer.ts';
import Plugins from './Modules/Plugins.ts';
// import KazagumoPlayer from "./Managers/KazagumoPlayer";
// import { KazagumoOptions } from "./Modules/Interfaces";


export * from './Kazagumo';
export { KazagumoTrack, KazagumoQueue, KazagumoPlayer, Plugins };
export * from './Modules/Interfaces';

export const version = '3.4.0b';
