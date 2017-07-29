describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  let metas = element(by.className('metas'));
  let dashWrapper = element(by.id("grid-wrap"));
  let anyMeta = element(by.className('badge'));
  let mhList = element(by.id('metaList'));


describe("Pre-Click", () => {

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MetaHumanDB');
  });

  it("should not show the dashboard elements before dashboard button is clicked", () => {
    expect(browser.isElementPresent(dashWrapper)).toBe(false);
  });

});

  describe("Dashboard", () => {

    it('clicking Dashboard shows Dashboard', () => {
      browser.findElement(by.id('dashboard')).click();
      expect(browser.isElementPresent(dashWrapper)).toBe(true);
    });

  });

  describe("Meta-Human List", () => {

    it("should not show the list elements before Meta-Human List button is clicked", () => {
      expect(browser.isElementPresent(metas)).toBe(false);
    });

    it('clicking Meta-Human List shows a list of all meta-humans', () => {
      mhList.click();
      expect(browser.isElementPresent(metas)).toBe(true);
    });

    it('clicking first name in Meta-Human List shows details of the selected Meta-Human.', () => {
      mhList.click();
      anyMeta.click();
      let detail = element(by.className('detail'));
      expect(browser.isElementPresent(detail)).toBe(true);
    });

    it('detail should show name, alias and headshot', () => {
      mhList.click();
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

  });

});
