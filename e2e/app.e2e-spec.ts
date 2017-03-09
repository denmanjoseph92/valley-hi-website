import { ValleyHiWebsitePage } from './app.po';

describe('valley-hi-website App', () => {
  let page: ValleyHiWebsitePage;

  beforeEach(() => {
    page = new ValleyHiWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
