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
  const [rows] = await dbconn.execute(
    'SELECT * FROM `cs2310.user_admin` WHERE `username` = ? AND `password` = ?',
    [username, pwd]
  )

  // 登录失败
  if (rows.length === 0) {
    return {
      success: false
    }
  } else {
    return {
      success: rows.length === 1,
      username: rows[0].username,
      role: rows[0].role
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
      msg: 'can not register as admin'
    }
  }
  if (role in ['doctor', 'nurse', 'cashier', 'pharmacist']) {
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
      msg: 'invalid role'
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
