describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  let metas = element(by.className('metas'));
  let anyMeta = element(by.tagName('li'));
  let detail = element(by.className('detail'));
  let rating = element(by.id('rating'));
  let bargroup = element(by.className('bar-group'));
  let image = element(by.id('headshot'));
  let ratinglabels = element(by.id('rating-labels'));


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
      expect(browser.isElementPresent(rating)).toBe(true);
      expect(browser.isElementPresent(headshot)).toBe(true);
      expect(browser.isElementPresent(ratinglabels)).toBe(true);
    });

    it("div should not be present on landing page", () => {
      expect(browser.isElementPresent(detail)).toBe(false);
    });

  });

  describe("Rating", () => {

    it("div should not be present on landing page", () => {
      expect(browser.isElementPresent(rating)).toBe(false);
    });

    it("div should be present", () => {
      anyMeta.click();
      expect(browser.isElementPresent(rating)).toBe(true);
    });


    it("bars should be at greater than 0 height", () => {
      anyMeta.click();
      waiter = browser.wait(element(by.className('bar')).isDisplayed());
      expect(waiter).toBeTruthy();
    });

    it("should make the trans-panel visible when clicked", () => {
      anyMeta.click();
      bargroup.click();
      expect(element(by.id('trans-panel')).isDisplayed()).toBeTruthy();
    });

  });

  describe("Image", () => {

    it("flips and shows meta alias", () => {
      anyMeta.click();
      browser.actions().
        mouseMove(image).
        perform();
      expect(element(by.className('alias')).isDisplayed()).toBeTruthy();
    });

  });

});
