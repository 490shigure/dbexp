import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    dbapi: {
      getAllPatients: () => Promise<object>
      ping: () => Promise<string>
      auth: {
        login: (username: string, password: string) => Promise<object>
      }
    }
  }
}
