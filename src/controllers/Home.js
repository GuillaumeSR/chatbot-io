import axios from 'axios';
import viewListBots from '../views/list-bots';
import viewNav from '../views/nav';
import dataBots from '../data/entities';
import viewChat from '../views/chat';
// localStorage.clear();

class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  onKeyUp() {
    const elSendButton = document.querySelector('#send-button');

    elSendButton.addEventListener('click', () => {
      const elUserInput = document.querySelector('#user-input');

      if (elUserInput.value.length) {
        this.processMessage(elUserInput.value);
        elUserInput.value = '';
      }
    });
  }

  onEnterPress() {
    document.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const elUserInput = document.querySelector('#user-input').value;

        if (typeof elUserInput === 'string' && elUserInput.length !== 0 && elUserInput !== null) {
          this.processMessage(elUserInput);
          document.querySelector('#user-input').value = '';
        }
      }
    });
  }

  processMessage(message) {
    const userMessage = message.toLowerCase().trim();

    this.newMessage(message);

    const botResponses = [];
    dataBots.forEach((bot) => {
      bot.commands.forEach((command) => {
        if (typeof command === 'string' && userMessage.includes(command)) {
          botResponses.push({ bot: bot.name, message: bot.action() });
        } else if (typeof command === 'object' && command.keyWord.some((keyword) => userMessage.includes(keyword))) {
          botResponses.push({ bot: bot.name, message: command.action() });
        }
      });
    });

    botResponses.forEach((response) => {
      this.newMessage(response.message, 'bot');
    });
  }

  newMessage(content, userType = 'user') {
    let existingEntries = JSON.parse(localStorage.getItem('messages'));
    if (existingEntries === null) existingEntries = [];
    const entry = {
      content,
      userType
    };

    existingEntries.push(entry);
    localStorage.setItem('messages', JSON.stringify(existingEntries));

    this.el.innerHTML = this.render();
    this.scrollDown();
  }

  scrollDown() {
    const elRightSide = document.querySelector('.messages-section');
    elRightSide.scrollTo(0, elRightSide.scrollHeight);
  }

  render() {
    return (`
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
    `);
  }

  checkMessageLog() {
    if (JSON.parse(localStorage.getItem('messages')) == null) {
      const setMessages = [];
      localStorage.setItem('messages', JSON.stringify(setMessages));
    }
  }

  async loadApiMessages() {
    const apiUrl = 'http://localhost/messages';
    try {
      const response = await axios.get(apiUrl);
      const dataMessage = response.data;

      const existingEntries = [];

      dataMessage.map((message) => existingEntries.push(message)).join('');

      localStorage.setItem('messages', JSON.stringify(existingEntries));

      console.log(dataMessage);
    } catch (error) {
      console.error(error);
    }
  }

  run() {
    this.checkMessageLog();
    this.loadApiMessages();
    this.el.innerHTML = this.render();
    this.scrollDown();
    this.onKeyUp();
    this.onEnterPress();
  }
}

export default Home;
