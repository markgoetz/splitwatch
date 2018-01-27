import { updateTimer } from './data.js';

export default class Timer {
    constructor(startTime, baseTime) {
        this.isPlaying = false;
        this.startTime = startTime;
        this.baseTime = baseTime;
    }

    start(time) {
        this.isPlaying = true;
        this.startTime = time;
        updateTimer({...this});
    }

    pause(time) {
        this.isPlaying = false;
        this.baseTime = time - this.startTime + this.baseTime;
        updateTimer({...this});
    }

    stop(time) {
        this.isPlaying = false;
        this.startTime = time;
        this.baseTime = 0;
        updateTimer({...this});
    }

    setBaseTime(time) {
        this.baseTime = time;
    }
}