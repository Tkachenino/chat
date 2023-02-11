import inputTmpl from '../../components/input/input.tmpl.pug';
import buttonTmpl from '../../components/button/button.tmpl.pug';
import loginTmpl from './login.tmpl.pug';
const app = document.querySelector('#app');

const loginInput = {
  label: 'Логин',
  id: 'login',
  value: 'Дмитрий Глуховский',
  type: 'text'
};

const passInput = {
  label: 'Пароль',
  id: 'password',
  value: '123456',
  type: 'password'
};

const authBtn = buttonTmpl({
  isBtn: true,
  id: 'authBtn',
  text: 'Авторизоваться'
});

const visitRegestrationBtn = buttonTmpl({
  isBtn: false,
  href: '/pages/registration',
  id: 'visitRegestrationBtn',
  text: 'Нет аккаунта?'
});

const fields = [loginInput, passInput].map((i) => inputTmpl(i));
const login = loginTmpl({ fields, authBtn, visitRegestrationBtn });
app.innerHTML = login;
