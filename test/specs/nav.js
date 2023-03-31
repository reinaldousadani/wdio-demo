import HomePage from "../pages/home-page";
import allureReporter from "@wdio/allure-reporter";

describe("Navigation menu", () => {
  it("Get the text of all menu and assert them", async () => {
    allureReporter.addFeature("Navigation");
    allureReporter.addSeverity("Critical");
    // Go to home page
    await HomePage.open();

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    // Find the "primary-menu" id, and find the "li" elements inside of it that have id starting with "menu"
    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const links of navLinks) {
      actualLinks.push(await links.getText());
    }

    // We can use "toEqual" to check deep equal
    await expect(expectedLinks).toEqual(actualLinks);
  });
});
