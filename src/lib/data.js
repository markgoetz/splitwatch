import { database } from './firebaseConfig';

export function updateTimer({ isPlaying, startTime, baseTime }) {
    database.ref().update({
        isPlaying,
        startTime,
        baseTime,
    });
}
