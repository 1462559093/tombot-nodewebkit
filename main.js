// initialize your app
// and ...
nw.Window.open('index.html', {}, function(win) {
//	win.enterFullscreen();
});

nw.App.registerGlobalHotKey(new nw.Shortcut({
  key: "Escape",
  active: function () {
    // decide whether to leave fullscreen mode
    // then ...
    console.log("Escape actived")
    nw.Window.get().leaveFullscreen();
  }
}));