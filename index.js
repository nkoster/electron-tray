const electron = require('electron')

const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/src/index.html`)
})
