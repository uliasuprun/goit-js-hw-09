import Notiflix from 'notiflix';
// --- Notify success
Notiflix.Notify.success(
  '✅ Fulfilled promise ${position} in ${delay}ms',
  {
    timeout: 5000,
  },
);
// --- Notify failure
Notiflix.Notify.failure(
  '❌ Rejected promise ${position} in ${delay}ms',
  {
    timeout: 5000,
  },
);

const form = document.querySelector('.form');
const formImputDelay = document.querySelector('[name="delay"]');
const formImputStep = document.querySelector('[name="step"]');
const formImputAmount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmitButtonClick);

function onSubmitButtonClick (e) {
e.preventDefaut();
}

/* Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step). */

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

/* Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить. */

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });