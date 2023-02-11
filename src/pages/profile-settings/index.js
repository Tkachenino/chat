import buttonTmpl from '../../components/button/button.tmpl.pug';
import profileSettingsTmpl from './profile-settings.tmpl.pug';
import profileInputTmpl from './components/profile-input/profile-input.tmpl.pug';

const mailInput = {
  label: 'Почта',
  value: 'pochta@yandex.ru',
  id: 'mailInput',
  disabled: false
};

const loginInput = {
  label: 'Логин',
  value: 'ivanivanov',
  id: 'loginInput',
  disabled: true
};

const nameInput = {
  label: 'Имя',
  value: 'Иван',
  id: 'nameInput',
  disabled: true
};

const surnameInput = {
  label: 'Фамилия',
  value: 'Иванов',
  id: 'surnameInput',
  disabled: true
};

const nickInput = {
  label: 'Имя в чате',
  value: 'Иван',
  id: 'nickInput',
  disabled: true
};

const phoneInput = {
  label: 'Телефон',
  value: '+7 (909) 967 30 30',
  id: 'phoneInput',
  disabled: true
};

const profileFields = [
  mailInput,
  loginInput,
  nameInput,
  surnameInput,
  nickInput,
  phoneInput
].map((i) => profileInputTmpl(i));

const changeProfileBtn = {
  isBtn: false,
  href: '#',
  id: 'changeProfileBtn',
  text: 'Изменить данные'
};

const changePasswordBtn = {
  isBtn: false,
  href: '#',
  id: 'changePasswordBtn',
  text: 'Изменить пароль'
};
const logoutBtn = {
  isBtn: false,
  href: '/pages/login',
  id: 'logoutBtn',
  text: 'Выйти'
};
const buttons = [changeProfileBtn, changePasswordBtn, logoutBtn].map((i) =>
  buttonTmpl(i)
);

const profileSettings = profileSettingsTmpl({
  name: 'Иван',
  profileFields,
  buttons
});
const app = document.querySelector('#app');
app.innerHTML = profileSettings;
