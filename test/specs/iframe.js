describe("iFrame", () => {
  it("Working with iFrame", async () => {
    // Open URL
    await browser.url("/iframe-sample/");

    // Access the iFrame first
    const iframe = await $("#advanced_iframe");

    // Switch to iFrame
    await browser.switchToFrame(iframe);

    // Verify logo exists
    await expect($("#site-logo")).toExist();

    // Switch to parent/outer frame
    await browser.switchToParentFrame()

    // Verify a title that lives in the parent/outer frame
    await expect($("h1.tg-page-header__title")).toHaveText("IFrame Sample");
  });
});
