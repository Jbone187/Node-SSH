let node_ssh = require('node-ssh')
ssh1 = new node_ssh()
ssh2 = new node_ssh()

function server1() {
    ssh1.connect({
        host: '',
        username: ',
        password: '',
        port: 22,

    }).then(function () {
        ssh1.execCommand('pwd').then(function (result) {
            console.log('STDOUT: ' + result.stdout)
        })

    }).then(function () {
        setTimeout(function () {
            process.exit();
        }, 1000);

    })
};

function server2() {
    ssh2.connect({
        host: '',
        username: '',
        password: '',
        port: 22,

    }).then(function () {
        ssh2.execCommand('pwd').then(function (result) {
            console.log('STDOUT: ' + result.stdout)
        })

    }).then(function () {
        setTimeout(function () {
            process.exit();
        }, 1000);

    })
};


async function accessServers() {
    await server1();
    await server2();
};
accessServers();
