import throttle from 'lodash.throttle';

let formData = {};

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  messageEl: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
onPageReloadUpdate();

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);
// console.log(event.target.value);
// console.log(event.target.name);

function onFormInput(event) {
  // console.log(event.target.value);
  // console.log(event.target.name);
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//виводимо дані з LS
function onPageReloadUpdate() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    for (let key in formData) {
      refs.formEl.elements[key].value = formData[key];
    }

    // console.log(refs.formEl.elements);
    //form.elements[name]
  }
}

//пишемо умови для сабміту
function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  refs.formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}
