describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  let aliasBtn = element(by.id('alias-btn'));
  let metas = element(by.className('metas'));
  let back = element(by.className('back'));
  let anyMeta = element(by.tagName('li'));
  let detail = element(by.className('detail'));
  let profile = element(by.id('profile-panel'));
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

    it("pressing Alias button should flip image(make back visible, front invisible)", () => {
      anyMeta.click();
      aliasBtn.click();
      expect(back.isPresent()).toBe(true);
      expect(back.isDisplayed()).toBe(true);
    });

  });

  describe("Rating", () => {

    it("div should not be present on landing page", () => {
      expect(browser.isElementPresent(bargroup)).toBe(false);
    });

    it("should display rating bars once a meta is clicked", () => {
      anyMeta.click();
      expect(bargroup.isDisplayed()).toBe(true);
    });

  });

  describe("Profile panel", () => {

    it("should be present but not visible", () => {
      anyMeta.click();
      expect(profile.isPresent()).toBe(true);
      expect(profile.isDisplayed()).toBe(false);
    });

    it("should not be visible when bar-group not clicked", () => {
      anyMeta.click();
      expect(profile.isDisplayed()).toBe(false);
    });

    it("should be visible when bar-group clicked", () => {
      anyMeta.click();
      bargroup.click();
      expect(profile.isPresent()).toBe(true);
      expect(profile.isDisplayed()).toBe(true);
    });

  });

});
