	var win = nw.Window.get();
	
	var keyOption = {
		key : "Escape",
		active: function (){
			console.log("key Esc pressed 12.");
			leavefullscreen(); 
		}
	};
	
	var shortcut = new nw.Shortcut(keyOption);
	nw.App.registerGlobalHotKey(shortcut);
	
	/**
	 * 绑定键盘事件
	 */
	shortcut.on('active', function() {
		console.log("key Esc pressed.");
	});
	
	/*
	 * 窗口设置为全屏
	 */
	function fullscreen(){
		win.enterFullscreen();
		console.log('enter fullscreen()');
	}
	
	/**
	 * 退出全屏窗口
	 */
	function leavefullscreen(){
		win.leaveFullscreen();
		console.log('enter leaveFullscreen()');
	}
	
	/**
	 * 重新装载页面
	 */
	function reloadscreen(){
		console.log('win reload()');
		win.reload();

	}
	
	/**
	 * 当前窗口截图
	 *   截图信息请参照： http://blog.csdn.net/lgh1117/article/details/7740136
	 */
	function capturescreen(){
		win.capturePage(function(base64string){
			var testImg = document.getElementById("test");
			if(testImg){
				testImg.src = "data:image/png;base64," + base64string;
			}
		},{format:"png", datatype:"raw"});
	}
	
	/**
	 * 关闭窗口
	 */
	function closeWindow(){
		win.close();
	}
	
	/**
	 * 通过元素的id标签，添加点击事件
	 * 
	 * @param {Object} id
	 * @param {Object} func
	 */
	function addClickEventById(id, func){
		var x = document.getElementById(id);
		if(x){
			x.onclick = func;
		}
	}
	
	addClickEventById("btnMax", fullscreen);
	addClickEventById("btnReback", leavefullscreen);
	addClickEventById("btnReload", reloadscreen);
	addClickEventById("btnExit", closeWindow);
	
