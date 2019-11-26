const node_ssh = require('node-ssh');
const dotenv = require("dotenv");
dotenv.config();

ssh1 = new node_ssh();
ssh2 = new node_ssh();

const serverCred1 = {
    host: process.env.host1,
    username: process.env.username1,
    password: process.env.password1,
    port: process.env.port1,
};

const serverCred2 = {
    host: process.env.host2,
    username: process.env.username2,
    password: process.env.password2,
    port: process.env.port2,
};

function server1() {
    ssh1.connect(serverCred1).then(function () {
        ssh1.execCommand('pwd').then(function (result) {
            console.log('STDOUT: ' + result.stdout)
        });

    }).then(function () {
        setTimeout(function () {
            process.exit();
        }, 1000);

    });
};

function server2() {
    ssh2.connect(serverCred2).then(function () {
        ssh2.execCommand('pwd').then(function (result) {
            console.log('STDOUT: ' + result.stdout)
        });

    }).then(function () {
        setTimeout(function () {
            process.exit();
        }, 1000);

    });
};

async function accessServers() {
    await server1();
    await server2();
};
accessServers();
