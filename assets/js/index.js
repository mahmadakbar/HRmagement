const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const remote = electron.remote;


function loaderFunction(){
    const loadingPage = document.getElementById('loader_main');
    setTimeout(function(){
        loadingPage.style.animation = "slideOutUp 0.3s both";
    }, 3000);
}

const bimbinganBtn = document.getElementById('btn_bimbingan');
bimbinganBtn.addEventListener('click', function(){
    const bimbinganPath = path.join('file://', __dirname, 'src/bimbingan.html')
    let winBimbingan = new BrowserWindow({
        width: 1330, 
        height: 700,
        minWidth: 1330,
        minHeight: 700,
        frame: false,
        backgroundColor: '#00aff0',
        webPreferences: {
            plugins: true
        }
    });
    winBimbingan.setMenu(null);
    winBimbingan.setResizable(false);
    winBimbingan.on('closed', () => {
        win = null;
    });
    winBimbingan.loadURL(bimbinganPath);
    winBimbingan.show();
});

const wisataBtn = document.getElementById('btn_wisata');
wisataBtn.addEventListener('click', function(){
    const wisataPath = path.join('file://', __dirname, 'src/wisata.html')
    let winWisata = new BrowserWindow({
        width: 1270, 
        height: 700,
        minWidth: 1270,
        minHeight: 700,
        frame: false,
        backgroundColor: '#00aff0',
        webPreferences: {
            plugins: true
        }
    });
    winWisata.setMenu(null);
    winWisata.setResizable(false);
    winWisata.on('closed', () => {
        win = null;
    });
    winWisata.loadURL(wisataPath);
    winWisata.show();
});

const sampleBtn = document.getElementById('btn_test');
sampleBtn.addEventListener('click', function(){
    const samplePath = path.join('file://', __dirname, 'src/sample.html')
    let winSample = new BrowserWindow({
        width: 1270, 
        height: 700,
        minWidth: 1270,
        minHeight: 700,
        frame: false,
        backgroundColor: '#00aff0',
        webPreferences: {
            plugins: true
        }
    });
    winSample.setMenu(null);
    winSample.setResizable(false);
    winSample.on('closed', () => {
        win = null;
    });
    winSample.loadURL(samplePath);
    winSample.show();
});

const exitBtn = document.getElementById('btn_exit');
exitBtn.addEventListener('click', function() {
    var window = remote.app;
    window.quit();
}); 