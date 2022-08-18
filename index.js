const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML.js")
const teamArray = [];

const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter manager name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager id number? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter manager id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your manager email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager office number? (Required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter manager office number!");
            return false;
          }
        },
      }, 
    ])
    .then(managerData => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
      createTeam();
    });

    
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter intern name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern id? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter intern id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the intern? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter intern email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend? (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the school that intern attends!");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      const { name, id, email, school } = internData;
      const intern = new Intern(name, id, email, school);
      teamArray.push(intern);
      console.log(intern);
      createTeam();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter engineer name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the engineer? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter engineer id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of engineer? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter engineer email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "username",
        message: "What is the engineer username? (Required)",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log("Please enter engineer username!");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      const { name, id, email, username } = engineerData;
      const engineer = new Engineer(name, id, email, username);
      teamArray.push(engineer);
      console.log(engineer);
      createTeam();
    });
};
const createTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add more team members?",
        choices: ["Manager", "Intern", "Engineer", "no additional employees"],
        name: "positions"
      }
    ])
    .then((addTeam) => {
      if (addTeam.positions == "Manager"){
        createManager();
      } else if (addTeam.positions == "Intern"){
        addIntern();
      } else if (addTeam.positions == "Engineer"){
        addEngineer();
      } else {
       teamData()
      }
    })
};

const teamData = () => {
fs.writeFile("./dist/index.html", generateHTML(teamArray), err => {
  if (err) {
    console.log(err);
    return;
  } else {
      
    console.log("your Team Profile has been successfully created!");
  }
})
};


createManager();

