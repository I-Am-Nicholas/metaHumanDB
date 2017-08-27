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


  /////PRE-CLICK////

  describe("MetasComponent", () => {

    it("Should only show pre-click data", () => {
      expect(browser.getTitle()).toEqual('MetaHumanDB');//should show page title.
      expect(browser.isElementPresent(metas)).toBe(true);//should show list of meta buttons
      expect(browser.isElementPresent(detail)).toBe(false);//should not show any details
      expect(bargroup.isPresent()).toBe(false);//should not show any rating bars
    });

  });

  /////POST-CLICK////

  describe("Meta-Human Detail", () => {

    it('should show all details of selected meta post-click', () => {
      let name = element(by.id('name'));
      let alias = element(by.id('alias'));

      anyMeta.click();
      expect(browser.isElementPresent(detail)).toBe(true);//should show details, including...
      expect(browser.isElementPresent(name)).toBe(true);//should show name...
      expect(browser.isElementPresent(alias)).toBe(true);//should show alias...
      expect(browser.isElementPresent(rating)).toBe(true);//should show rating...
      expect(browser.isElementPresent(image)).toBe(true);//should show image...
      expect(browser.isElementPresent(ratinglabels)).toBe(true);//should show rating info...
      expect(bargroup.isDisplayed()).toBe(true);//should show rating bars.
    });

  });


  describe("Deep Info", () => {

    it("clicking Alias button should flip image (make back visible, make front invisible)", () => {
      anyMeta.click();
      aliasBtn.click();
      expect(back.isPresent()).toBe(true);
      expect(back.isDisplayed()).toBe(true);
    });

  });


  describe("Profile panel", () => {

    it("should only be visible when bargroup clicked", () => {
      anyMeta.click();
      expect(browser.isElementPresent(profile)).toBe(true);
      expect(profile.isDisplayed()).toBe(false);
      bargroup.click();
      expect(profile.isPresent()).toBe(true);
      expect(profile.isDisplayed()).toBe(true);
    });

  });

});
