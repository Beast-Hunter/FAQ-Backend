const request = require("supertest");
const app = require("./");

describe("GET /api/faqs", () => {
  it("should return FAQs in default language", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return FAQs in Hindi", async () => {
    const res = await request(app).get("/api/faqs?lang=hi");
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toHaveProperty("question");
  });
});
