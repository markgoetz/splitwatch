export default function renderTime(elapsedTime) {
    const timeInSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(timeInSeconds / 3600);

    const minutesRemaining = timeInSeconds - hours * 3600;
    const minutes = Math.floor(minutesRemaining / 60);

    const seconds = minutesRemaining - minutes * 60;

    const fractionalSeconds = Math.floor(1000 * (elapsedTime / 1000 - timeInSeconds));

    return `${zeroPrefix(hours)}:${zeroPrefix(minutes)}:${zeroPrefix(seconds)}.${zeroPrefix(fractionalSeconds)}`;
}

function zeroPrefix(number) {
    return number < 10 ?
        `0${number}` :
        number;
}