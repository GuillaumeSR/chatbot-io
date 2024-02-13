// import axios from 'axios';

import viewNav from '../views/nav';
import viewListMessages from '../views/list-message';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  // onKeyUp() {
  //   const elInputSearch = document.querySelector('.input-search');
  //   const elListUser = document.querySelector('.list-user');

  //   elInputSearch.addEventListener('keyup', () => {
  //     const keyWord = elInputSearch.value;
  //     const data = this.filters(
  //       'name',
  //       this.data,
  //       ({ user }) => user.name.first.includes(keyWord)
  //     );

  //     elListUser.innerHTML = viewListUsers(data);
  //   });
  // }

  render() {
    return `
    <div class="container">
    <div class="row">
      <div class="col-12">${viewNav()}</div>
    </div>
    <div class="row list-user">
      ${viewListMessages(this.data)}
    </div>
  </div>
  `;
  }

  run() {
    // const { results } = this.params;
    this.el.innerHTML = this.render();
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
