/** Event Emitter */

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Guilherme Lara Russo' });
users.userLogged({ user: 'Lorenzo Guerra' });


// Para consumir apenas uma vez. "Once"

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Guilherme Lara Russo' });
users.userLogged({ user: 'Lorenzo Guerra' });



