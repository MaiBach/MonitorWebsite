$(function(){
	var w=$(window),
		m=$('.left').find('dd'),
		ms=$('.left'),
		mr=$('.right'),
		menuleft=$('#nav,#menus'),
		nav=$('.left').find('dt'),
		tg=$('#tg'),
		tgall=$('#all .left,#all .right,#nav,#menus,#tg');

	rw(w,ms,mr,nav,m);
	w.resize(function(){rw(w,ms,mr,nav,m);});

	//左侧菜单
	nav.slice(0,-1).click(function(){
		var i=$(this).index('dt'),a=m.eq(i),b=$(this);
		if(a.is(':visible')){
			i=i+1;
			b.removeClass('current');	//减号变加号
			a.slideUp(100);
			m.eq(i).slideDown(100);
			nav.eq(i).addClass('current');	//下一个h3加号变减号
		}else{	//如果没有显示
			nav.removeClass('current');	//减号变加号
			b.addClass('current');	//加号变减号
			a.slideDown(100).siblings('dd').slideUp(100);
		}
	});

	//最后一个菜单项特殊处理
	nav.last().click(function(){
		var i=$(this).index('dt'),a=m.eq(i);
		if(a.is(':visible')){
			nav.eq(i-1).click();
		}else{
			nav.removeClass('current');
			$(this).addClass('current');
			a.slideDown(100).siblings('dd').slideUp(100);
		}
	});

	//二级菜单项当前状态处理
	m.find('li').click(function(){
		if($(this).hasClass('current')){
			//return false;
		}else{
			m.find('li').removeClass('current');
			$(this).addClass('current');
		}
	});

});

//Dom加载及窗口发生变化都执行
function rw(a,b,c,d,e){
	var f=a.height()-74;
	$('.container').height(f);
	$('.logcon').height(f);	//设置中间区域高度2px
	if(a.width()<1000){
		a.add('.header,.container,.footer').width(1000);
		c.add('.iframe').width(820);
	}else{
		a.add('.header,.container,.footer').width(a.width());
		c.add('.iframe').width(a.width()-180);	//设置中间右边内容区域宽度
	}
	//mm(d,e,b);
}

//设置日期时间
/*function onTime(){
	$("#time").html( (new Date()).toDateString() + " " + (new Date()).toTimeString());
}
setInterval(onTime,1000);*/