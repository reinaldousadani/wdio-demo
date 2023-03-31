import BlogPage from "../pages/blog-page";

describe("Blog", () => {
  it("Open blog page, get all recent news text, assert each to have text length > 10", async () => {
    await BlogPage.open();
    let recentPosts = await BlogPage.listRecentPosts;
    let postTexts = [];
    for (const post of recentPosts) {
      postTexts.push(await post.getText());
    }
    for (const text of postTexts) {
      await expect(text.length).toBeGreaterThan(10);
    }
  });
});
