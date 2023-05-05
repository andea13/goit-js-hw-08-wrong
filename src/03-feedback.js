import throttle from 'lodash.throttle';

refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', onDataSaveToLocalStaorage);

function onDataSaveToLocalStaorage(event) {
  let emailValue = event.target.value;
  console.log(emailValue);
}
