const dotenv = require("dotenv");
dotenv.config({ path: ".env.test" });

const app = require("../../app");

let server;
const port = process.env.PORT || 8082;

beforeAll((done) => {
  server = app.listen(port, () => {
    console.log(`Server tes berjalan di port ${port}`);
    global.server = server;
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log(`Server tes ditutup di port ${port}`);
    done();
  });
});

test("Basic test", async () => {
  expect(true).toBe(true);
});
