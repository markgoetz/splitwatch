import { database } from './firebaseConfig';

export function updateTimer({ startTime, baseTime }) {
    database.ref().update({
        startTime,
        baseTime,
    });
}
