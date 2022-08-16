const Intern = require('../lib/Intern');

test ('Creates Intern', () => {
    const intern = new Intern('Rebecca, 49, rebeccasanders@yahoo.com, UCF');
    except(intern.name).toEqual(except.any(String));
    except(intern.id).toEqual(except.any(Number));
    except(intern.email).toEqual(except.any(String));
    except(intern.school).toEqual(except.any(String));
});

test ('intern name', () => {
    const intern = new Intern('Rebecca', 49, 'rebeccasanders@yahoo.com', 'UCF');
    except(intern.getName()).toEqual(except.any(String));
});

test ('intern id', () => {
    const intern = new Intern('Rebecca', 49, 'rebeccasanders@yahoo.com', 'UCF');
    except(intern.getId()).toEqual(except.any(Number));
});

test ('intern email', () => {
    const intern = new Intern('Rebecca', 49, 'rebeccasanders@yahoo.com', 'UCF');
    except(intern.getEmail()).toEqual(except.stringContaining(intern.email.toString()));
});

test ('intern school', () => {
    const intern = new Intern('Rebecca', 49, 'rebeccasanders@yahoo.com', 'UCF');
    except(intern.getSchool()).toEqual(except.any(String));
});