const createHandlers = require("../handlers");

describe("handlers", () => {
  let getCustomers;
  let mockDB;
  let req;
  let res;

  const customers = [
    {
      _id: "124",
      name: "Rivers two",
      gender: "m",
      value: 34.34,
    },
  ];

  beforeEach(() => {
    req = {};
    res = {
      send: jest.fn(),
    };
    res.status = jest.fn().mockReturnThis();

    mockDB = {
      Customer: {
        find: jest.fn(async () => customers),
      },
    };

    ({ getCustomers } = createHandlers(mockDB));
  });

  test("should return Customers when db resolves", async () => {
    expect.assertions(1);
    await getCustomers(req, res);
    expect(res.send).toHaveBeenCalledWith(customers);
  });

  test("should return error message ", async () => {
    expect.assertions(2);

    mockDB.Customer.find = jest
      .fn()
      .mockRejectedValue(new Error("Async error"));
    await getCustomers(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Async error");
  });
});
