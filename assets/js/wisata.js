const { BrowserWindow } = require('electron').remote
const electron = require('electron');
const remote = electron.remote;
const PDFWindow = require('electron-pdf-window')

const closeBtn = document.getElementById('close_wisata');
closeBtn.addEventListener('click', function() {
    var window = remote.getCurrentWindow();
    window.close();
});

const minimizeBtn = document.getElementById('minimize_wisata');
minimizeBtn.addEventListener('click', function() {
    var minimize = remote.getCurrentWindow();
    minimize.minimize();
});

const dataWisata = document.getElementById('main_wisata');
const loadingPage = document.getElementById('loading_page');
dataWisata.addEventListener('did-finish-load', function(){
    setTimeout(function(){
        loadingPage.style.animation = "slideOutUp 0.3s both";
    }, 2000);
});

const reloadBtn = document.getElementById('reload_wisata');
reloadBtn.addEventListener('click', function() {
    loadingPage.style.animation = "slideOutDown 0.3s both";
    dataWisata.reload();
}); 

dataWisata.print({silent: true});
