const electron = require('electron')
const path = require('path')
const TimerTray = require('./app/timer_tray')
const { app, BrowserWindow } = electron

let mainWindow, tray

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        height: 500, width: 300,
        frame: false, resizable: false, show: false
    })
    mainWindow.loadURL(`file://${__dirname}/src/index.html`)
    const iconName = process.platform === 'win32'
        ? 'windows-icon.png'
        : 'iconTemplate.png'
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`)
    tray = new TimerTray(iconPath)
    console.log(iconPath)
    tray.on('click', (evt, bounds) => {
        const { x, y } = bounds
        const { height, width } = mainWindow.getBounds()
        console.log(x, y)
        if (mainWindow.isVisible()) {
            mainWindow.hide()
        } else {
            const yPos = process.platform === 'darwin'
                ? y
                : y - height
            mainWindow.setBounds({
                x: 1200, yPos,
                height, width
            })
            mainWindow.show()
        }
    })
})
