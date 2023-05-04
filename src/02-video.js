import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
let currentTime;

player.on('timeupdate', throttle(saveTimeToLocalStorage, 1000));

let timeAfterReload = JSON.parse(localStorage.getItem(STORAGE_KEY));
// console.log(timeAfterReload);
player.setCurrentTime(timeAfterReload);

function saveTimeToLocalStorage(data) {
  currentTime = data.seconds;
  console.log(currentTime);

  const serializedData = JSON.stringify(currentTime);
  console.log(serializedData);
  localStorage.setItem(STORAGE_KEY, serializedData);
}
