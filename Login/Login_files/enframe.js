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


	nav.slice(0,-1).click(function(){
		var i=$(this).index('dt'),a=m.eq(i),b=$(this);
		if(a.is(':visible')){
			i=i+1;
			b.removeClass('current');	
			a.slideUp(100);
			m.eq(i).slideDown(100);
			nav.eq(i).addClass('current');	
		}else{	
			nav.removeClass('current');	
			b.addClass('current');	
			a.slideDown(100).siblings('dd').slideUp(100);
		}
	});

	
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

	
	m.find('li').click(function(){
		if($(this).hasClass('current')){
			//return false;
		}else{
			m.find('li').removeClass('current');
			$(this).addClass('current');
		}
	});

});


function rw(a,b,c,d,e){
	var f=a.height()-74;
	$('.container').height(f);
	$('.logcon').height(f);	
	if(a.width()<1000){
		a.add('.header,.container,.footer').width(1000);
		c.add('.iframe').width(820);
	}else{
		a.add('.header,.container,.footer').width(a.width());
		c.add('.iframe').width(a.width()-180);	
	}
	//mm(d,e,b);
}


/*function onTime(){
	$("#time").html( (new Date()).toDateString() + " " + (new Date()).toTimeString());
}
setInterval(onTime,1000);*/