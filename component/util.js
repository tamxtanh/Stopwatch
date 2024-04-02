const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centiSeconds) => {
  let minutes = 0;
  let seconds = 0;

  if (centiSeconds < 0) centiSeconds = 0;

  if (centiSeconds < 100) {
    return `00:00:${padToTwo(centiSeconds)}`;
  }

  let remainCentiSeconds = centiSeconds % 100;
  seconds = (centiSeconds - remainCentiSeconds) / 100;

  if (seconds < 60) {
    return `00:${padToTwo(seconds)}:${padToTwo(remainCentiSeconds)}`;
  }

  let remainSeconds = seconds % 60;
  minutes = (seconds - remainSeconds) / 60;

  return `${padToTwo(minutes)}
  :${padToTwo(remainSeconds)}
  :${padToTwo(remainCentiSeconds)}`;
};
