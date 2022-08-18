const generateManager = function (manager) {
  return `
<div class = "col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>

        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
`
};

const generateIntern = function (intern) {
  return `
    <div class = "col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>

        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `
};

const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="username">GitHub:<href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
    `
};

const generateCards = (team)=> {
    console.log("in the generateCards")
    let cards = ""
    for (let i = 0; i < team.length; i++) {
        if(team[i].getRole() === "Manager"){
            cards += generateManager(team[i])
        }else if(team[i].getRole() === "Intern"){
            cards += generateIntern(team[i])
        }else if(team[i].getRole() === "Engineer"){
            cards += generateEngineer(team[i])
        }

        
       
      }
    return cards
}

const generateTeam = (teamArray) => {
    return`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar text"
          >Team Profiles</span
        >
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="row justify-content-center" id="team-cards">
          ${generateCards(teamArray)}
        </div>
      </div>
    </main>
  </body>
  <script
    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
  ></script>
</html>
    `
};


module.exports = generateTeam