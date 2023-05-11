import mysql from 'mysql2/promise'
import { dbtestallpatient, ping } from './test'
import { auth, Iauth } from './auth'

let dbconn
;(async () => {
  dbconn = await mysql.createConnection({
    host: '124.71.219.185',
    port: 3306,
    database: 'cs2310.his',
    user: 'root',
    password: 'uestc2022!'
  })
})()

export interface Idbapi {
  getAllPatients: () => Promise<object>
  ping: () => string
  auth: Iauth
}

const dbapi: Idbapi = {
  getAllPatients: dbtestallpatient,
  ping: ping,
  auth: auth
}

export { dbconn, dbapi }
