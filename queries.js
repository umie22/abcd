const Pool = require('pg').Pool
const pool = new Pool({
  host: "ec2-176-34-215-248.eu-west-1.compute.amazonaws.com",
  user: "zaiaryvqbpwwcb",
  password: "731fafeb016f84ea7f87300cbd19a24ba3e96adbaaf92504bc8d945d0302489b",
  database: "delu1t92658u0"
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
})
const getParticipants = (request, response) => {
  pool.query('SELECT * FROM participant', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
}