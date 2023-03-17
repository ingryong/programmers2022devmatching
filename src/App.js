import Header from './components/Header.js';
import HomePage from './page/HomePage.js';
import SignupPage from './page/SignupPage.js';
import ContentTitle from './components/ContentTitle.js';
import { setPersonalInfo } from './components/Storage.js';

class App {
  constructor($body) {
    this.$body = $body;
    this.render();
  }
  async render() {
    await setPersonalInfo();

    // header 영역
    const header = new Header(this.$body);
    header.render();

    // main 영역
    const main = document.createElement('main');
    main.setAttribute('id', 'page_content');
    this.$body.appendChild(main);

    const homepage = new HomePage(main);
    const signuppage = new SignupPage(main);
    let title = new ContentTitle(main, 'CardView');

    // 첫 페이지 진입 시 렌더링
    title.render();
    homepage.render();

    // url 변동에 따른 렌더링
    document.addEventListener('urlChange', e => {
      let pathname = e.detail.href;

      switch (pathname) {
        case '/web/':
          main.innerHTML = '';
          title = new ContentTitle(main, 'CardView');
          title.render();
          homepage.render();
          break;

        case '/web/signup':
          main.innerHTML = '';
          title = new ContentTitle(main, 'Hello, GreatPeoPle!');
          title.render();
          signuppage.render();
          break;

        default:
      }
    });
  }
}

export default App;
