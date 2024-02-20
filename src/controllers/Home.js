// import axios from 'axios';

import viewListBots from '../views/list-bots';
import viewNav from '../views/nav';
// import viewListMessages from '../views/list-message';
import viewChat from '../views/chat';

// const dataBots = [{
//   name: 'Veldra',
//   image: 'https://i.pinimg.com/736x/d3/01/b6/d301b6d9ee94cee3ce81bb3352c049af.jpg',
//   description: 'API perso d anime',
//   commands: ['hello', 'character']
// },
// {
//   name: 'Limule',
//   image: 'https://katana-anime.com/cdn/shop/articles/727e572c1a4503e860f5779c0b72258b_640x.png?v=1654355532',
//   description: 'API perso d anime',
//   commands: ['hello', 'character']
// },
// {
//   name: 'Benimaru',
//   image: 'https://www.nautiljon.com/images/perso/00/85/benimaru_17758.webp',
//   description: 'API perso d anime',
//   commands: ['hello', 'character']
// },
// {
//   name: 'Diablo',
//   image: 'https://i.pinimg.com/originals/72/48/30/7248304fefb72d4bfc0e5daa2109da1c.jpg',
//   description: 'API perso d anime',
//   commands: ['hello', 'character']
// }];
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

// localStorage.removeItem('messages');

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

    if (userType === 'user' && content.toLowerCase() === 'ronaldo') {
      const botAnswer = 'Suiiiiiii';
      const botEntry = {
        content: botAnswer,
        userType: 'bot'
      };
      existingEntries.push(botEntry);
      localStorage.setItem('messages', JSON.stringify(existingEntries));
    }

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
          ${viewListBots(JSON.parse(localStorage.getItem('bots')))}
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
