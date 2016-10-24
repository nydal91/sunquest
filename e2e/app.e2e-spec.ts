import { SunquestPage } from './app.po';

describe('sunquest App', function() {
  let page: SunquestPage;

  beforeEach(() => {
    page = new SunquestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
