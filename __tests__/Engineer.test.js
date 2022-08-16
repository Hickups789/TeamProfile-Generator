const Engineer = require("../lib/Engineer");

test("Creates engineer", () => {
  const engineer = new Engineer(
    "Antonio, 36, antoniolopez@yahoo.com, antonio358"
  );
  except(engineer.username).toEqual(except.any(String));
});

test("engineer username", () => {
  const engineer = new Engineer(
    "Antonio",
    36,
    "antoniolopez@yahoo.com",
    "antonio358"
  );
  except(engineer.getGithub()).toEqual(
    except.stringContaining(engineer.getGithub.toString())
  );
});

test("gets role", () => {
  const engineer = new Engineer(
    "Antonio",
    36,
    "antoniolopez@yahoo.com",
    "antonio358"
  );
  except(engineer.getRole()).toEqual("Engineer");
});
