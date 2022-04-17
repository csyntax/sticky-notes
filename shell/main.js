const { join } = require("path");
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

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

    mainWindow.loadURL(`file://${join(__dirname, "../app/build/index.html")}`);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: "detach" });
    }
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