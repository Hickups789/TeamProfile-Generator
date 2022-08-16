const Engineer = require('../lib/Engineer');

test('Creates engineer', () => {
    const engineer = new Engineer('Antonio, 36, antoniolopez@yahoo.com, antonio358');
    except(engineer.name).toEqual(except.any(String));
    except(engineer.id).toEqual(except.any(Number));
    except(engineer.email).toEqual(except.any(String));
    except(engineer.username).toEqual(except.any(String));
});

test('engineer name', () => {
    const engineer = new Engineer('Antonio', 36, 'antoniolopez@yahoo.com', 'antonio358');
    except(engineer.getName()).toEqual(except.any(String))
});

test('engineer id', () => {
    const engineer = new Engineer('Antonio', 36, 'antoniolopez@yahoo.com', 'antonio358');
    except(engineer.getId()).toEqual(except.any(Number));
});

test('engineer email', () => {
    const engineer = new Engineer('Antonio', 36, 'antoniolopez@yahoo.com', 'antonio358');
    expect(engineer.getEmail()).toEqual(except.stringContaining(engineer.email.toString()));
});

test('engineer username', () => {
    const engineer = new Engineer('Antonio', 36, 'antoniolopez@yahoo.com', 'antonio358');
    except(engineer.getGithub()).toEqual(except.stringContaining(engineer.getGithub.toString()));
});