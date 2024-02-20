// import axios from 'axios';

import viewBots from '../views/bots';
import viewNav from '../views/nav';
// import viewListMessages from '../views/list-message';
import viewChat from '../views/chat';

// const dataMessages = [{ content: 'Bonjour !', userType: 'user' }];
// localStorage.setItem('messages', JSON.stringify(dataMessages));
// let messages = localStorage.getItem('messages');
// console.log(JSON.parse(messages));
// const oldDataMessages = JSON.parse(messages);
// const newEntry = { content: 'Salut !', userType: 'bot' };
// oldDataMessages.push(newEntry);
// localStorage.setItem('messages', JSON.stringify(oldDataMessages));
// messages = localStorage.getItem('messages');
// console.log(JSON.parse(messages));

// localStorage.clear();

const setMessages = [];

if (JSON.parse(localStorage.getItem('messages')) == null) localStorage.setItem('messages', JSON.stringify(setMessages));

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    // const dataMessages = { content: 'Bonjour !', userType: 'user' };
    // window.localStorage.setItem('messages', dataMessages);
    // const messages = window.localStorage.getItem('message');
    // console.log(messages);

    this.run();
  }

  onKeyUp() {
    const elSendButton = document.querySelector('#send-button');

    elSendButton.addEventListener('click', () => {
      const elUserInput = document.querySelector('#user-input').value;

      if (typeof elUserInput === 'string' && elUserInput.length !== 0 && elUserInput !== null) {
        this.newMessage(elUserInput);
      }
    });
  }

  onEnterPress() {
    document.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const elUserInput = document.querySelector('#user-input').value;

        if (typeof elUserInput === 'string' && elUserInput.length !== 0 && elUserInput !== null) {
          this.newMessage(elUserInput);
        }
      }
    });
  }

  newMessage(content, userType = 'bot') {
    let existingEntries = JSON.parse(localStorage.getItem('messages'));
    if (existingEntries == null) existingEntries = [];
    const entry = {
      content,
      userType
    };
    localStorage.setItem('message', JSON.stringify(entry));

    existingEntries.push(entry);
    localStorage.setItem('messages', JSON.stringify(existingEntries));
  }

  render() {
    return `
    <div class="row">
      <div class="container">
        <div class="col-12">${viewNav()}</div>
      </div>
      <div class="chatbox">
        ${viewChat(JSON.parse(localStorage.getItem('messages')))}
        ${viewBots()}
      </div>
    </div>
    `;
  }

  run() {
    // const { results } = this.params;
    this.el.innerHTML = this.render();
    this.onKeyUp();
    this.onEnterPress();
    // axios
    //   .get(`https://randomuser.me/api/0.8/?results=${results}`)
    //   .then((res) => {
    //     const { data } = res;
    //     const { age } = this.params;

    //     this.data = this.filters(
    //       parseInt(age, 10),
    //       data.results,
    //       ({ user }) => (
    //         new Date(
    //           new Date().getTime() - new Date(user.dob * 1000).getTime()
    //         ).getFullYear() - 1970 > age
    //       )
    //     );
    //     this.onKeyUp();
    //   });
  }
};

export default Home;
