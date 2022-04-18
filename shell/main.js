const { join } = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
    const mainWindow = new BrowserWindow({
        maxWidth: 950,
        maxHeight: 950,
        webPreferences: {
            nodeIntegration: true,
        },
        minimizable: true,
        autoHideMenuBar: true,
        fullscreenable: false,
    });

    mainWindow.loadURL(`file://${join(__dirname, "build/index.html")}`);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});