import { app, BrowserWindow, ipcMain } from 'electron';
import { config } from "dotenv";
import path from "path";

config();

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const assetsPath =
  process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()
function createWindow () {
  mainWindow = new BrowserWindow({
    icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 600,
    height: 800,
    minWidth: 600,
    minHeight: 800,
    frame: false,
    autoHideMenuBar: true,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    },

  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })

  ipcMain.on('maximize', (_, message) => {
    if (!mainWindow?.isMaximized()) {
      mainWindow?.maximize();
    } else {
      mainWindow?.unmaximize();
    }
  })

  ipcMain.on('minimize', (_, message) => {
    mainWindow?.minimize();
  })

  ipcMain.on('close-application', (_, message) => {
    mainWindow?.minimize();
    mainWindow?.close();
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
