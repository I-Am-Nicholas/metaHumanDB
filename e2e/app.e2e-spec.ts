describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  let metas = element(by.className('metas'));
  let dashWrapper = element(by.id("grid-wrap"));


  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MetaHumanDB');
  });

  it("should not show the dashboard elements before dashboard button is clicked", () => {
    expect(browser.isElementPresent(dashWrapper)).toBe(false);
  });

  it('clicking Dashboard shows Dashboard', () => {
    browser.findElement(by.id('dashboard')).click();
    expect(browser.isElementPresent(dashWrapper)).toBe(true);
  });

  it("should not show the list elements before Meta-List button is clicked", () => {
    expect(browser.isElementPresent(metas)).toBe(false);
  });

  it('clicking Meta-List shows a list of all meta-humans', () => {
    browser.findElement(by.id('metaList')).click();
    expect(browser.isElementPresent(metas)).toBe(true);
  });

  it('clicking first name in Meta-List shows details of the selected Meta-Human.', () => {
    browser.findElement(by.id('metaList')).click();
    let anyMeta = browser.findElement(by.className('badge'));
    anyMeta.click();
    let detail = element(by.className('detail'));
    expect(browser.isElementPresent(detail)).toBe(true);
  });

});
