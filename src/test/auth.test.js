const request = require("supertest");

describe("Auth API", () => {
  test("Should be success login", async () => {
    const response = await request(global.server)
      .post("/api/auth/v1/login") // gunakan .post()
      .send({ Email: "dev@test.com", Password: "pass123" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message", "Login successful");
    expect(response.body).toHaveProperty("token");
    expect(typeof response.body.token).toBe("string");
  });

  it("should successfully register with valid image file", async () => {
    const response = await request(global.server)
      .post("/api/auth/v1/register") // gunakan .post()
      .field("Username", "dev")
      .field("Email", "dev@supertest.com")
      .field("Password", "pass123");
    // .attach("ProfileImage", "path/to/your/image.jpg"); // Ganti dengan path ke file gambar yang valid

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
  });
});
