const electron = require('electron')

const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        height: 500, width: 300,
        frame: false, resizable: false
    })
    mainWindow.loadURL(`file://${__dirname}/src/index.html`)
})
