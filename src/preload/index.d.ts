import { ElectronAPI } from '@electron-toolkit/preload'
import { Idbapi } from '../modal'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    dbapi: Idbapi
  }
}
