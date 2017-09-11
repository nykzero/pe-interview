import { PeIntPage } from './app.po';

describe('pe-int App', () => {
  let page: PeIntPage;

  beforeEach(() => {
    page = new PeIntPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
