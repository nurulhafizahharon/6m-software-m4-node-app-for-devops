const targetFn = require("./controller");

describe("the print function", () => {
  // standard best practice
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Request and response should be the same.", () => {
    // test name
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    targetFn(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith(
      "Hello I'm Hafizah! I've successfully deployed my code in heroku!"
    ); // If you change this value, the test will fail.
  });
});
