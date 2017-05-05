import { CliTestPrjPage } from './app.po';

describe('cli-test-prj App', () => {
  let page: CliTestPrjPage;

  beforeEach(() => {
    page = new CliTestPrjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
