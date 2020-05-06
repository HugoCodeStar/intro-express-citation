const request = require("supertest")
const app = require("./app")
const quotes = require("./quotes.json").quotes

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.text).toMatch(/Welcome to Express/);
  });
});

describe("Test des quotes path", () => {
  test("It should return the quotes as JSON", async (done) => {
    request(app)
      .get("/quotes")
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('Content-Length', '12270', done);
  });

  test("It should return the quote 2 as JSON with specified text", (done) => {
    const body = "{\"quote\":\"Strive not to be a success, but rather to be of value.\",\"author\":\"Albert Einstein\"}";

    request(app)
      .get("/quotes/2")
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(body, done);
  });

  test("It should return a random quote", (done) => {

    request(app)
      .get("/quotes/2")
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        const item = quotes.filter(item => item.quote.includes(res.body.quote))
        console.log(item)
        expect(item.length).toBeGreaterThanOrEqual(1);
      })
      .end(done);
  });

});
