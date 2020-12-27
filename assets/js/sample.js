const { BrowserWindow } = require('electron').remote
const electron = require('electron');
const remote = electron.remote;
const PDFWindow = require('electron-pdf-window')

const closeBtn = document.getElementById('close_sample');
closeBtn.addEventListener('click', function() {
    var window = remote.getCurrentWindow();
    window.close();
});

const minimizeBtn = document.getElementById('minimize_sample');
minimizeBtn.addEventListener('click', function() {
    var minimize = remote.getCurrentWindow();
    minimize.minimize();
});

const dataSample = document.getElementById('main_sample');
const loadingPage = document.getElementById('loading_page');
dataSample.addEventListener('did-finish-load', function(){
    setTimeout(function(){
        loadingPage.style.animation = "slideOutUp 0.3s both";
    }, 6000);
});

const reloadBtn = document.getElementById('reload_sample');
reloadBtn.addEventListener('click', function() {
    loadingPage.style.animation = "slideOutDown 0.3s both";
    dataSample.reload();
}); 

dataSample.print({silent: true});
