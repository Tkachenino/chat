import buttonTmpl from '../../components/button/button.tmpl.pug';
import errorViewTmpl from '../../components/error-view/error-view.tmpl.pug';

const visitChatsBtn = buttonTmpl({
  isBtn: false,
  href: '/pages/chats',
  id: 'visitChatsBtn',
  text: 'Назад к чатам'
});

const notFoundPage = errorViewTmpl({
  title: '404',
  description: 'Не туда попали',
  visitChatsBtn
});

const app = document.querySelector('#app');
app.innerHTML = notFoundPage;
