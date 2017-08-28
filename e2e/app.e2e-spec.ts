describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  let aliasBtn = element(by.id('alias-btn'));
  let metas = element(by.className('metas'));
  let anyMeta = element(by.tagName('li'));
  let detail = element(by.className('detail'));
  let profile = element(by.id('profile-panel'));
  let profileButton = element(by.id('profile-btn'));
  let rating = element(by.id('rating'));
  let bargroup = element(by.className('bar-group'));
  let image = element(by.id('headshot'));
  let ratinglabels = element(by.id('rating-labels'));
  let imageBack = element(by.className('showAlias'));
  let miniIronMan = element(by.id('mini-iron-man'));


  /////PRE-CLICK////

  describe("MetasComponent", () => {

    it("Should only show pre-click data/components", () => {
      expect(browser.getTitle()).toEqual('MetaHumanDB');//should show page title.
      expect(miniIronMan.isPresent()).toBe(true);
      expect(metas.isPresent()).toBe(true);//should show list of meta buttons
      expect(detail.isPresent()).toBe(false);//should not show any details
      expect(bargroup.isPresent()).toBe(false);//should not show any rating bars
      expect(aliasBtn.isPresent()).toBe(false);
    });

  });

  /////POST-CLICK////

  describe("Meta-Human Detail", () => {

    it('should show all details of selected meta post-click', () => {
      let name = element(by.id('name'));
      let alias = element(by.id('alias'));

      anyMeta.click();
      expect(detail.isPresent()).toBe(true);//should show details, including...
      expect(name.isPresent()).toBe(true);//should show name...
      expect(aliasBtn.isPresent()).toBe(true);//should show alias button...
      expect(rating.isPresent()).toBe(true);//should show rating...
      expect(image.isPresent()).toBe(true);//should show image...
      expect(ratinglabels.isPresent()).toBe(true);//should show rating info...
      expect(bargroup.isDisplayed()).toBe(true);//should show rating bars.
    });

  });


  describe("Deep Info", () => {

    it("clicking Alias button should flip image (make back visible, make front invisible)", () => {
      anyMeta.click();
      expect(imageBack.isPresent()).toBe(false);
      aliasBtn.click();
      expect(imageBack.isPresent()).toBe(true);
      expect(imageBack.isDisplayed()).toBe(true)
    });

  });


  describe("Profile panel", () => {

    it("clicking profile button should display profile", () => {
      anyMeta.click();
      expect(profile.isPresent()).toBe(true);
      expect(profile.isDisplayed()).toBe(false);
      profileButton.click();
      expect(profile.isPresent()).toBe(true);
      expect(profile.isDisplayed()).toBe(true);
    });

  });

});
