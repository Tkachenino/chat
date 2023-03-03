import buttonTmpl from '../../components/button/button.tmpl.pug';
import errorViewTmpl from '../../components/error-view/error-view.tmpl.pug';

const visitChatsBtn = buttonTmpl({
  isBtn: false,
  href: '/pages/chats',
  id: 'visitChatsBtn',
  text: 'Назад к чатам'
});

const serverErrorPage = errorViewTmpl({
  title: '500',
  description: 'Мы уже фиксим',
  visitChatsBtn
});

const app = document.querySelector('#app');
app.innerHTML = serverErrorPage;
