describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  let metas = element(by.className('metas'));
  let anyMeta = element(by.tagName('li'));
  let detail = element(by.className('detail'));
  let ticker = element(by.id('ticker'));
  let rating = element(by.id('rating'));


  describe("Pre-Click", () => {

    it('should have a title', () => {
      expect(browser.getTitle()).toEqual('MetaHumanDB');
    });

  });


  describe("Meta-Human List", () => {

    it("should show the list elements immediately", () => {
      expect(browser.isElementPresent(metas)).toBe(true);
    });

    it('clicking first name in Meta-Human List shows details of the selected Meta-Human.', () => {
      anyMeta.click();
      expect(browser.isElementPresent(detail)).toBe(true);
    });

  });

  describe("Meta-Human Detail", () => {

    it('detail should show all details of meta', () => {
      anyMeta.click();
      let name = element(by.id('name'));
      let alias = element(by.id('alias'));
      let profile = element(by.id('profile'));
      let headshot = element(by.id('headshot'));
      expect(browser.isElementPresent(name)).toBe(true);
      expect(browser.isElementPresent(alias)).toBe(true);
      expect(browser.isElementPresent(profile)).toBe(true);
      expect(browser.isElementPresent(headshot)).toBe(true);
    });

    it("div should not be present on landing page", () => {
      expect(browser.isElementPresent(detail)).toBe(false);
    });

  });


  describe('Ticker', () => {

    it("should be present", () => {
      expect(browser.isElementPresent(ticker)).toBe(true);
    });

  });

  describe("Rating", () => {

    it("div should be present", () => {
      anyMeta.click();
      expect(browser.isElementPresent(rating)).toBe(true);
    });

    it("div should not be present on landing page", () => {
      expect(browser.isElementPresent(rating)).toBe(false);
    });

  });

});
