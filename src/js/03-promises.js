import { Notify } from 'notiflix/build/notiflix-notify-aio';

//достукались
const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  let firstDelay = Number(refs.formEl.elements.delay.value);
  let step = Number(refs.formEl.elements.step.value);
  let amount = refs.formEl.elements.amount.value;

  setTimeout(() => {
    for (let i = 0; i < amount; i += 1) {
      createPromise(step * i, i + 1)
        .then(({ delay, position }) => {
          Notify.success(
            `✅ Fulfilled promise ${position} in ${firstDelay + delay}ms`
          );
        })
        .catch(({ delay, position }) => {
          Notify.failure(
            `❌ Rejected promise ${position} in ${firstDelay + delay}ms`
          );
        });
    }
  }, firstDelay);
});

const createPromise = (delay, position) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() < 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ delay, position });
      } else {
        reject({ delay, position });
      }
    }, delay);
  });
};

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
