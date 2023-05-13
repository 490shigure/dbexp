import { dbconn } from '../index'

// TODO: 部门管理业务
interface IgetAllDeptFunc {
  (): Promise<object>
}

const getAllDept: IgetAllDeptFunc = async () => {
  const [rows] = await dbconn.execute('SELECT * FROM `cs2310.department`')
  return rows
}
