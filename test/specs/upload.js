const path = require("path");

describe("Upload tests", () => {
  it("Simple upload test", async () => {
    // If we put full URL, WDIO will ignore the baseUrl
    await browser.url("https://the-internet.herokuapp.com/upload");

    // Store file path using NodeJS path module
    // __dirname means our current directory
    // So this basically means from current dir, go up 1 level, go to data/screenshot.png
    const filePath = path.join(__dirname, "../data/screenshot.png");

    // Upload test file
    // We need to upload to chrome first using browser.uploadFile
    const remoteFilePath = await browser.uploadFile(filePath);

    // Set remote file path value in the input field
    await $("#file-upload").setValue(remoteFilePath);

    // Submit the form
    await $("#file-submit").click();

    // Assertion
    await expect($("h3")).toHaveText("File Uploaded!");
  });

  it("Upload on a hidden input", async () => {
    // Open URL
    await browser.url("/cart/");

    const filePath = path.join(__dirname, "../data/screenshot.png");

    const remoteFilePath = await browser.uploadFile(filePath);

    // Remove hidden class using browser's JavaScript
    await browser.execute("document.querySelector('#upfile_1').className = ''");

    await $("#upfile_1").setValue(remoteFilePath);

    await $("#upload_1").click();

    // Assertions
    await expect($("#wfu_messageblock_header_1_label_1")).toHaveTextContaining(
      "uploaded successfully"
    );
  });
});
