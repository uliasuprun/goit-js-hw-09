import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');
const amountEL = document.querySelector('[name="amount"]');

form.addEventListener('submit', onButtonClick);

function onButtonClick(e){
  e.preventDefault()

  let time = firstDelay.value;
  const arrayPromise = [
    {delay: Number(time), position: 1}
  ];
  for (let i = 2; i <= Number(amountEL.value); i += 1) {
    arrayPromise.push( {delay: time = Number(firstDelay.value) + Number(stepDelay.value), position: i})
  }

  const promises = arrayPromise.map((arr) => {
    return createPromise(arr.position, arr.delay)
    .then((onSucces) => {Notiflix.Notify.success(onSucces)})
    .catch((onError) => {Notiflix.Notify.failure(onError)})
  });
};

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const result = Math.random() > 0.3;
    setTimeout(() => {
      if (result) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
  })
};