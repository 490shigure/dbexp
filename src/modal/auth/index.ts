import { dbconn } from '../index'
import { Md5 } from 'ts-md5'

// 登录
interface IlogFunc {
  (username: string, password: string): Promise<{
    success: boolean
    username?: string
    role?: string
  }>
}

const login: IlogFunc = async (username: string, password: string) => {
  const pwd = Md5.hashStr(password + 'mjr')
  const [rowsa] = await dbconn.execute(
    'SELECT * FROM `cs2310.user_admin` WHERE `username` = ? AND `password` = ?',
    [username, pwd]
  )
  const [rowsp] = await dbconn.execute(
    'SELECT * FROM `cs2310.user_patient` WHERE `username` = ? AND `password` = ?',
    [username, pwd]
  )

  // 登录失败
  if (rowsa.length === 0 && rowsp.length === 0) {
    return {
      success: false
    }
  } else {
    // 登录成功
    if (rowsa.length !== 0) {
      return {
        success: true,
        username: rowsa[0].username,
        role: rowsa[0].role
      }
    } else {
      return {
        success: true,
        username: rowsp[0].username,
        role: 'patient'
      }
    }
  }
}
// 注册
interface IregFunc {
  (username: string, password: string, role: string): Promise<{
    success: boolean
    msg?: string
  }>
}

const register: IregFunc = async (username: string, password: string, role: string) => {
  // 禁止注册为全局管理员
  if (role === 'admin') {
    return {
      success: false,
      msg: '禁止注册为管理员'
    }
  }
  // 用户名已存在
  const [rowsa] = await dbconn.execute('SELECT * FROM `cs2310.user_admin` WHERE `username` = ?', [
    username
  ])
  const [rowsp] = await dbconn.execute('SELECT * FROM `cs2310.user_patient` WHERE `username` = ?', [
    username
  ])
  if (rowsa.length !== 0 || rowsp.length !== 0) {
    return {
      success: false,
      msg: '用户名已存在'
    }
  }
  const admin_roles: Array<string> = ['doctor', 'nurse', 'cashier', 'pharmacist']
  if (admin_roles.includes(role)) {
    // 注册为员工
    const pwd = Md5.hashStr(password + 'mjr')
    const [rows] = await dbconn.execute(
      'INSERT INTO `cs2310.user_admin` (`username`, `password`, `role`) VALUES (?, ?, ?)',
      [username, pwd, role]
    )

    return {
      success: rows.affectedRows === 1
    }
  } else if (role === 'patient') {
    // 注册为病人
    const pwd = Md5.hashStr(password + 'mjr')
    const [rows] = await dbconn.execute(
      'INSERT INTO `cs2310.user_patient` (`username`, `password`) VALUES (?, ?)',
      [username, pwd]
    )

    return {
      success: rows.affectedRows === 1
    }
  } else {
    return {
      success: false,
      msg: '无效的身份'
    }
  }
}

export interface Iauth {
  login: IlogFunc
  register: IregFunc
}

export const auth: Iauth = {
  login: login,
  register: register
}
