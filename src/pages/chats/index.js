import chatItemTmpl from './components/chat-item/chat-item.tmpl.pug';
import noChatTmpl from './components/no-chat/no-chat.tmpl.pug';
import chatsTmpl from './chats.tmpl.pug';
import chatTmpl from './components/chat/chat.tmpl.pug';
import chatListTmpl from './components/chat-list/chat-list.tmpl.pug';
import messageTmpl from './components/message/message.tmpl.pug';
const mockChat = {
  author: 'Serge',
  isMe: true,
  text: 'some text about spaceships',
  time: '22:22',
  count: 2
};
const mockChats = [
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat,
  mockChat
];

const message = {
  text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
  date: '11:56'
};

const isMyMessage = {
  text: 'Круто!',
  date: '12:32',
  isMe: true
};

const messages = [message, message, message, isMyMessage].map((i) =>
  messageTmpl(i)
);

const app = document.querySelector('#app');
const chatsPreview = mockChats.map((i) => chatItemTmpl(i));

const noChat = noChatTmpl();
const chat = chatTmpl({ title: 'Sergey', messages });
const chatList = chatListTmpl({ chats: chatsPreview });

const chats = chatsTmpl({ chatList, noChat, chat, isActive: true });
app.innerHTML = chats;
