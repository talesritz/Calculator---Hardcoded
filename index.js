const electron = require("electron");

const { app, BrowserWindow, screen } = electron;

app.on("ready", () => {
  //   let factor = screen.getPrimaryDisplay().scaleFactor;
  const mainWindow = new BrowserWindow({
    show: false,
    width: 244,
    height: 427,
    maximizable: false,
    resizable: false,
    autoHideMenuBar: true,
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("ready-to-show", () => {
    mainWindow.show({});
  });
});
