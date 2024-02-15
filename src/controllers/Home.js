// import axios from 'axios';

import viewBots from '../views/bots';
import viewNav from '../views/nav';
// import viewListMessages from '../views/list-message';
import viewChat from '../views/chat';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  onKeyUp() {
    const elSendButton = document.querySelector('#send-button');

    elSendButton.addEventListener('click', () => {
      console.log('send pressed');
    });
  }

  onEnterPress() {
    document.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter pressed');
      }
    });
  }

  newMessage(sender, receiver, content, userType) {

  }

  render() {
    return `
    <div class="row">
      <div class="container">
        <div class="col-12">${viewNav()}</div>
      </div>
      <div class="chatbox">
        ${viewChat()}
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
