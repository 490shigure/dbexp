import mysql from 'mysql2/promise'
import { dbtestallpatient, ping } from './test'
import { auth, Iauth } from './auth'
import { type Imanage, manage } from './manage'

// 建立数据库链接
let dbconn
;(async () => {
  dbconn = await mysql.createConnection({
    host: import.meta.env.MAIN_VITE_DB_HOST,
    port: import.meta.env.MAIN_VITE_DB_PORT,
    database: import.meta.env.MAIN_VITE_DB_NAME,
    user: import.meta.env.MAIN_VITE_DB_USER,
    password: import.meta.env.MAIN_VITE_DB_PWD
  })
})()

export interface Idbapi {
  getAllPatients: () => Promise<object>
  ping: () => string
  auth: Iauth
  manage: Imanage
}

const dbapi: Idbapi = {
  getAllPatients: dbtestallpatient,
  ping: ping,
  auth: auth,
  manage: manage
}

export { dbconn, dbapi }
