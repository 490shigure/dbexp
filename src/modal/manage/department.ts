import { dbconn } from '../index'

// TODO: 部门管理业务

// 查询所有部门
interface IgetAllDeptFunc {
  (): Promise<
    Array<{
      deptno: number
      deptname: string
      parentdeptno: number
      deptmanager: string
      deptmanagerno: number
    }>
  >
}

const getAllDept: IgetAllDeptFunc = async () => {
  const [rows] = await dbconn.execute(
    'select dept.DeptNo as `deptno`, DeptName as `deptname`, ParentDeptNo as `parentdeptno`, Dname as `deptmanager`, Manager as `deptmanagerno` from `cs2310.dept` dept left join `cs2310.doctor` doc on dept.Manager = doc.Dno'
  )
  console.log(rows)
  return rows
}

// 添加部门

// 删除部门
interface IdelDeptFunc {
  (deptno: number): Promise<{
    success: boolean
    msg?: string
  }>
}

const delDept: IdelDeptFunc = async (deptno: number) => {
  const [rows] = await dbconn.execute('DELETE FROM `cs2310.dept` WHERE `DeptNo` = ?', [deptno])
  if (rows.affectedRows === 1) {
    // 成功删除
    return {
      success: rows.affectedRows === 1
    }
  } else {
    // 部门不存在
    return {
      success: false,
      msg: '部门不存在'
    }
  }
}

// 修改部门

export interface Idept {
  getAllDept: IgetAllDeptFunc
  delDept: IdelDeptFunc
}

export const dept: Idept = {
  getAllDept: getAllDept,
  delDept: delDept
}
