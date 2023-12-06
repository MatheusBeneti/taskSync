
    
const fs = require('fs').promises;
const path = require('path');

const sideBar = path.join(__dirname, '../views/sideBar.handlebars');

async function main(req, res) {
    try {
        const sideBarContente = await fs.readFile(sideBar, 'utf8');

        const user = {
            name: 'John',
            surname: 'Johnnom',
        };

        res.render('userAccount', {
            sideBar: sideBarContente,
            user: user
        });
    } catch (erro) {
        console.error('Erro:', erro);
        res.status(500).send('Erro interno do servidor');
    }
}

module.exports = main;