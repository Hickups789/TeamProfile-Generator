const Intern = require("../lib/Intern");

test("Creates Intern", () => {
  const intern = new Intern("Rebecca, 49, rebeccasanders@yahoo.com, UCF");
  except(intern.school).toEqual(except.any(String));
});

test("intern school", () => {
  const intern = new Intern("Rebecca", 49, "rebeccasanders@yahoo.com", "UCF");
  except(intern.getSchool()).toEqual(
    except.stringContaining(intern.school.toString())
  );
});

test("gets role", () => {
  const intern = Intern("Rebecca", 49, "rebeccasanders@yahoo.com", "UCF");
  except(intern.getRole()).toEqual("Intern");
});
