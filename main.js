const {app, BrowserWindow} = require('electron');
const electron = require('electron');
const fs = require('fs');
const os = require('os');
const ipc = electron.ipcMain;
const shell = electron.shell;  
  
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win
  
  function createWindow () {
    // Membuat jendela browser.
    win = new BrowserWindow({
        width: 1350, 
        height: 720,
        minWidth: 1350,
        minHeight: 700,
        frame: false,
        backgroundColor: '#2c3e50',
        webPreferences: {
            plugins: true
        }
    })
    // remove menu
    win.setMenu(null);
    win.setResizable(false);
    // dan memuat index.html dari aplikasi.
    win.loadFile('index.html')
  
    // Open the DevTools.
    //win.webContents.openDevTools()
  
    // Emitted saat jendela tertutup.
    win.on('closed', () => {
      // Dereference objek jendela, biasanya anda akan menyimpan jendela
      // dalam array jika aplikasi Anda mendukung multi jendela, inilah waktunya
      // kapan kamu harus menghapus elemen yang sesuai.
      win = null
    })
  }
  
  // Metode ini akan dipanggil saat Elektron selesai
  // mengisialisasi dan siap untuk membuat jendela browser.
  // Beberapa API hanya dapat digunakan setelah event ini terjadi.
  app.on('ready', createWindow)
  
  // Keluar ketika semua jendela ditutup.
  app.on('window-all-closed', () => {
    // Di macOS ini biasa digunakan untuk aplikasi dan menu bar
    // tetap aktif sampai pengguna keluar secara eksplisit menggunakan perintah Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // Di macOS biasanya digunakan untuk membuat ulang jendela pada aplikasi ketika 
    // dock icon di klik dan tidak ada jendela lain disana.
    if (win === null) {
      createWindow()
    }
  })
  
  // Di file ini anda dapat menambahkan semua kode spesifik main process pada
  // aplikasi. Anda juga dapat menempatkan dalam berkas terpisah dan menambahkannya di sini.

  //print function
  ipc.on('print-to-pdf', function(event){
    const pdfPath = path.join(os.tmpdir(), 'print.pdf');
    const win = BrowserWindow.fromWebContents(event.sender);
    
    win.webContents.printToPDF({}, function(error, data){
      if(error) return console.log(error.message);

      fs.writeFile(pdfPath, data, function(err) {
        if(err) return console.log(err.message);
        shell.openExternal('file://' + pdfPath);
        event.sender.send('wrote-pdf', pdfPath);
      })
    });
  });