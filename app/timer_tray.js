const electron = require('electron')
const { Tray } = electron

class TimerTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath)
        this.mainWindow = mainWindow
        this.on('click', this.onClick.bind(this))
    }
    onClick(evt, bounds) {
        const { x, y } = bounds
        const { height, width } = this.mainWindow.getBounds()
        console.log(x, y)
        if (this.mainWindow.isVisible()) {
            this.mainWindow.hide()
        } else {
            const yPos = process.platform === 'darwin'
                ? y
                : y - height
            this.mainWindow.setBounds({
                x: 1200, yPos,
                height, width
            })
            this.mainWindow.show()
        }
    }
}

module.exports = TimerTray
