// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/
import HomePage from "../pages/home-page";

describe("Home", () => {
  // "describe" is used to describe the tests that we're writing. Or called "suite"

  beforeEach(async () => {
    await HomePage.open();
  });

  it("Open URL and assert title", async () => {
    // "it" is used to describe the test case

    // Assert Title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open URL, click get started button, and assert URL", async () => {
    // Click "get-started" button
    await HomePage.btnGetStarted.click();

    // Assert URL to have text containing "get-started"
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Open URL, click the logo, assert URL to not containing 'get-started'", async () => {
    // Click logo
    await $("//a[@rel='home']").click();

    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("Open URL, assert the text in the hero section", async () => {
    // Find the text element in the hero section
    const headingEl = await HomePage.textHeading;

    // Assert the text
    await expect(headingEl).toHaveText("Think different. Make different.");
  });
});
