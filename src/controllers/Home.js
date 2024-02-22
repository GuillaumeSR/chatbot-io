// import axios from 'axios';

import viewListBots from '../views/list-bots';
import viewNav from '../views/nav';
import dataBots from '../data/entity';
// import viewListMessages from '../views/list-message';
import viewChat from '../views/chat';
// import Bot from '../models/bots/index';

// localStorage.setItem('bots', JSON.stringify(dataBots));
// let messages = localStorage.getItem('messages');
// console.log(JSON.parse(messages));
// const oldDataMessages = JSON.parse(messages);
// const newEntry = { content: 'Salut !', userType: 'bot' };
// oldDataMessages.push(newEntry);
// localStorage.setItem('messages', JSON.stringify(oldDataMessages));
// messages = localStorage.getItem('messages');
// console.log(JSON.parse(messages));

// localStorage.clear();

// localStorage.removeItem('bots');

const setMessages = [];
// const setBots = [];

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

  // checkIfCommand(message) {
  //   const elUserInput = document.querySelector('#user-input').value;
  // }

  newMessage(content, userType = 'user') {
    let existingEntries = JSON.parse(localStorage.getItem('messages'));
    if (existingEntries == null) existingEntries = [];
    const entry = {
      content,
      userType
    };
    localStorage.setItem('message', JSON.stringify(entry));

    existingEntries.push(entry);
    localStorage.setItem('messages', JSON.stringify(existingEntries));

    this.el.innerHTML = this.render();
    const elRightSide = document.querySelector('.messages-section');
    elRightSide.scrollTo(0, elRightSide.scrollHeight);
  }

  render() {
    return `
    <div>${viewNav()}</div>
    <div class="container">
        <div class="row">
          <div class="col-3">
          ${viewListBots(dataBots)}
          </div>
          <div class="col-9">
          ${viewChat(JSON.parse(localStorage.getItem('messages')))}
          </div>
      </div>
    </div>
    `;
  }

  run() {
    // const { results } = this.params;
    this.el.innerHTML = this.render();
    const elRightSide = document.querySelector('.messages-section');
    elRightSide.scrollTo(0, elRightSide.scrollHeight);
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

    // const options = {
    //   method: 'GET',
    //   url: 'https://one-piece2.p.rapidapi.com/v2/getCharacter/Shanks',
    //   headers: {
    //     token: 'ab84ad27eb9fe47b625069a7f0a4833fb92439639d9a57f7a56ca60bc4a8fbc6',
    //     'X-RapidAPI-Key': 'b9baa2fc89mshcfc6ae8d8d2fea5p19a803jsnf4fd05ea78e4',
    //     'X-RapidAPI-Host': 'one-piece2.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  }
};

export default Home;
