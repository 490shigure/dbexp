import { dbconn } from '../index'

export const dbtestallpatient = async () => {
  const [rows] = await dbconn.execute('SELECT * FROM `cs2310.patient`')
  console.log(rows)
  return rows
}
