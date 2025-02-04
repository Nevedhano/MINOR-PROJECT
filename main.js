console.log("main process working");
console.log('main.js');
const electron = require ("electron");
const app =electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
       pathname:path.join(__dirname,"index.html"),
       preload: path.join(__dirname, 'preload.js'),
       protocol :"file",
       slashes:true
    }));
    
   
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
      }
    
      
    
    win.on('closed',()=>{
        win =null;
    })
}
app.whenReady().then(() => {
  process.env.NODE_ENV = 'development'; // Set environment variable
  createWindow();
});
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate',()=>{
    if(win === null){
        createWindow()
    }
})