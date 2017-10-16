import { CarsServicePage } from './app.po';

describe('cars-service App', () => {
  let page: CarsServicePage;

  beforeEach(() => {
    page = new CarsServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
