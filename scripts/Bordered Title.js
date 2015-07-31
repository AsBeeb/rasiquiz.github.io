function titleSetup(mode,text,id,width) {
	width = typeof width !== 'undefined' ? width : 3;
	var title = text.slice(0,text.length-1)
	var  titlelast = text.slice(text.length-1,text.length)
	var code = '<span class="titletext titletext' + id + '">' + title + '<span style="letter-spacing: 0px;">' + titlelast + '</span>\
	<div class="titlebar titlebarver' + id + '" style="left: 0px; bottom: 0px; height: 0%; width:' + width + 'px;"></div>\
	<div class="titlebar titlebarver' + id + '" style="right: 0px; top: 0px; height: 0%; width:' + width + 'px;"></div>\
	<div class="titlebar titlebarhor' + id + '" style="top: 0px; left: 0px; width: 0%; height:' + width + 'px;"></div>\
	<div class="titlebar titlebarhor' + id + '" style="bottom: 0px; right: 0px; width: 0%; height:' + width + 'px;"></div>\
	</span>';
	
	switch (mode) {
		case 'write':
			document.write(code);
			break;
		case 'return':
			return code;
			break;
	}
	
	setTimeout(function(){document.getElementsByClassName('titletext' + id)[0].style.marginLeft = '-' + $('.titletext' + id).innerWidth()/2 + 'px'}, 0)
	setTimeout(function(){document.getElementsByClassName('titletext' + id)[0].style.marginTop = '-' + $('.titletext'+ id).innerHeight()/2 + 'px'}, 0)
}

function titleAnimIn(id) {
	for (i = 0; i < $('.titlebarver' + id).length; i++) {
		document.getElementsByClassName('titlebarver' + id)[i].style.height = '100%';
	}
	setTimeout(function(){
		for (i = 0; i < $('.titlebarhor' + id).length; i++) {
			document.getElementsByClassName('titlebarhor' + id)[i].style.width = '100%';
		}
	}, 1000)
}

function titleAnimOut(id) {
	for (i = 0; i < $('.titlebarver' + id).length; i++) {
		document.getElementsByClassName('titlebarver' + id)[i].style.height = '0%';
	}
	setTimeout(function(){
		for (i = 0; i < $('.titlebarhor' + id).length; i++) {
			document.getElementsByClassName('titlebarhor' + id)[i].style.width = '0%';
		}
	}, 1000)
}