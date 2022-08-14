class Engineer {
    constructor(name, id, email, username) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = username;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }

    getGithub() {
        return this.username;
    }
  
    getRole() {
      return "Engineer";
    }
  }
  
  module.exports = Engineer;