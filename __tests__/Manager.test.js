const Manager = require('../lib/Manager');

test ('Create manager', () => {
    const manager = new Manager('Spiderman', 4800, 'spidysenses@yahoo.com', 3216457865);
    except(manager.name).toEqual(except.any(String));
    except(manager.id).toEqual(except.any(Number));
    except(manager.email).toEqual(except.any(String));
    except(manager.officeNumber).toEqual(except.any(Number));
});

test ('manager name', () => {
    const manager = new Manager('Spiderman', 4800, 'spidysenses@yahoo.com', 3216457865);
    except(manager.getName()).toEqual(except.any(String));
});

test ('manager id', () => {
    const manager = new Manager('Spiderman', 4800, 'spidysenses@yahoo.com', 3216457865);
    except(manager.getId()).toEqual(except.any(String));
});

test ('manager email', () => {
    const manager = new Manager('Spiderman', 4800, 'spidysenses@yahoo.com', 3216457865);
    except(manager.getEmail()).toEqual(except.stringContaining(manager.email.tostring()));
});

test ('manager office number', () => {
    const manager = new Manager('Spiderman', 4800, 'spidysenses@yahoo.com', 3216457865);
    except(manager.getofficeNumber()).toEqual(except.any(String));
});