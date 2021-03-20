const mysql = require('mysql2');
const { config } = require('./condig');

const { database, host, password, port, user } = config;
const mysqConn = mysql.createConnection({
    database, host, password, port, user
});

mysqConn.connect((err) => {
    if (err) {
        console.error(err)
    }
})

const setupQuery = `CREATE TABLE  IF NOT EXISTS \`people\` (
	\`id\` INT(11) NOT NULL AUTO_INCREMENT,
	\`name\` VARCHAR(250) NOT NULL,
	PRIMARY KEY (\`id\`)
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB;`

mysqConn.query(setupQuery, (err, res) => {
    if (err) {
        console.error(err)
    } else {
        console.info("Database susccesfully statres")
    }
})

module.exports = { mysqConn };
