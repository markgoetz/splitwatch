import { updateTimer, addSplit } from './data.js';

export default class Timer {
  constructor(startTime, baseTime) {
    this.isPlaying = false;
    this.startTime = startTime;
    this.baseTime = baseTime;
  }

  start(time) {
    this.isPlaying = true;
    this.startTime = time;
    updateTimer({ isPlaying: this.isPlaying, startTime: this.startTime, baseTime: this.baseTime });
  }

  pause(time) {
    if (!this.isPlaying) return;

    this.isPlaying = false;
    this.baseTime = time - this.startTime + this.baseTime;
    updateTimer({ isPlaying: this.isPlaying, startTime: this.startTime, baseTime: this.baseTime });
  }

  stop(time) {
    this.isPlaying = false;
    this.startTime = time;
    this.baseTime = 0;
    updateTimer({ isPlaying: this.isPlaying, startTime: this.startTime, baseTime: this.baseTime });
  }

  setBaseTime(time) {
    this.baseTime = time;
  }

  split(time) {
    const splitTime = time - this.startTime + this.baseTime;
    addSplit(splitTime);
  }
}