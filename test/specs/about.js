describe("About", () => {
    it("Open about page and assert URL", async () => {
        await browser.url("https://practice.automationbro.com/about/")
        await expect(browser).toHaveUrl("https://practice.automationbro.com/about/");
    })
})