import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    dbapi: {
      getAllPatients: () => Promise<object>
      ping: () => Promise<string>
    }
  }
}
