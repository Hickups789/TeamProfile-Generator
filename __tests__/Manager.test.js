const Manager = require("../lib/Manager");

test("Create manager", () => {
  const manager = new Manager(
    "Spiderman",
    4800,
    "spidysenses@yahoo.com",
    3216457865
  );
  except(manager.officeNumber).toEqual(except.any(Number));
});

test("manager office number", () => {
  const manager = new Manager(
    "Spiderman",
    4800,
    "spidysenses@yahoo.com",
    3216457865
  );
  except(manager.getofficeNumber()).toEqual(except.any(Number));
});

test("gets role", () => {
  const manager = new Manager(
    "Spiderman",
    4800,
    "spidysenses@yahoo.com",
    3216457865
  );
  except(manager.getRole()).toEqual("Manager");
});
