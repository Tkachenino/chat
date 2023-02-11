import inputTmpl from '../../components/input/input.tmpl.pug';
import buttonTmpl from '../../components/button/button.tmpl.pug';
import registrationTmpl from './registration.tmpl.pug';
const app = document.querySelector('#app');

const mailInput = {
  label: 'Почта',
  id: 'mail',
  value: 'pochta@yandex.ru',
  type: 'text'
};

const loginInput = {
  label: 'Логин',
  id: 'login',
  value: 'Дмитрий Глуховский',
  type: 'text'
};

const nameInput = {
  label: 'Имя',
  id: 'name',
  value: 'Дмитрий',
  type: 'text'
};

const surnameInput = {
  label: 'Фамилия',
  id: 'surname',
  value: 'Глуховский',
  type: 'text'
};

const phoneInput = {
  label: 'Телефон',
  id: 'phone',
  value: '+7 (909) 967 30 30',
  type: 'text'
};

const passInput = {
  label: 'Пароль',
  id: 'password',
  value: '123456',
  type: 'password'
};

const passRepeatInput = {
  label: 'Пароль (еще раз)',
  id: 'passwordRepeat',
  value: '123456',
  type: 'password'
};

const registerBtn = buttonTmpl({
  isBtn: true,
  id: 'registerBtn',
  text: 'Зарегистрироваться'
});

const visitBtn = buttonTmpl({
  isBtn: false,
  href: '/pages/chats',
  id: 'visitBtn',
  text: 'Войти'
});

const fields = [
  mailInput,
  loginInput,
  nameInput,
  surnameInput,
  phoneInput,
  passInput,
  passRepeatInput
].map((i) => inputTmpl(i));
const registration = registrationTmpl({ fields, registerBtn, visitBtn });
app.innerHTML = registration;
