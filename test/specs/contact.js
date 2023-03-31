import ContactPage from "../pages/contact-page";
import { faker } from "@faker-js/faker";

describe("Contact", () => {
  it("Open contacts page, fill the form, submit, assert the success text", async () => {
    await ContactPage.open();
    
    await ContactPage.submitForm(
      faker.name.fullName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.lorem.paragraphs(2)
    );
  });
});
