const mysql = require('mysql2/promise')
import { dbtestallpatient } from './test'

let dbconn
;(async () => {
  dbconn = await mysql.createConnection({
    host: '124.71.219.185',
    database: 'cs2310.his',
    user: 'root',
    password: 'uestc2022!'
  })
})()

const dbapi = {
  getAllPatients: dbtestallpatient
}

export { dbconn, dbapi }
