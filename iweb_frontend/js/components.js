// 1.显示/隐藏导航栏
/* 响应式导航条：点击汉堡博爱按钮时导航菜单从左侧进入：点击关闭按钮时导航隐藏到左侧*/
// 根据属性选择器查找一个元素
document.querySelector('[data-toggle="nav"]').onclick=function(){
	// 将导航条从左侧移出来——给navibar添加active类
	document.querySelector('[data-target="nav"]').classList.add('active');
}
// 点击关闭按钮则导航隐藏到左侧
document.querySelector('[data-close="nav"]').onclick=function(){
	document.querySelector('[data-target="nav"]').classList.remove('active');
}
// 2.轮播广告
let currentCarousel = 0 //当前正在显示哪个广告
let totalCarousel = 4 //轮播广告的总数
// 点击“下一张”按钮，自动切换到广告中的下一张
document.querySelector('[data-carousel="next"]').onclick=function(){
	currentCarousel++
	if(currentCarousel>=totalCarousel){
		//如果已经切换到最后一张之后，必需重回到0
		currentCarousel=0
	}
	//所谓的显示轮播广告项，首先是隐藏当前显示的轮播广告项——li删除active类
	document.querySelector('.carousel>.items>li.active').classList.remove('active')
	//
	// 切换广告指示器的显示，1、首先隐藏当前处于active状态的指示器
	document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
	//然后再让目标广告象显示出来——li添加active类
	let list=document.querySelectorAll('.carousel>.items>li')
	list[currentCarousel].classList.add('active')
	// 切换广告指示器的显示，2、再让当前的广告对应的指示器处于激活状态
	list=document.querySelectorAll('.carousel>.indicators>li')
	list[currentCarousel].classList.add('active')
}
// 点击“上一张”按钮，自动切换到广告中的上一张
document.querySelector('[data-carousel="prev"]').onclick=function(){
	currentCarousel--
	if(currentCarousel<0){
		//如果已经切换到最后一张之后，必需重回到0
		currentCarousel=totalCarousel-1
	}
	//所谓的显示轮播广告项，首先是隐藏当前显示的轮播广告项——li删除active类
	document.querySelector('.carousel>.items>li.active').classList.remove('active')
	document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
	//然后再让目标广告象显示出来——li添加active类
	let list=document.querySelectorAll('.carousel>.items>li')
	list[currentCarousel].classList.add('active')
	list=document.querySelectorAll('.carousel>.indicators>li')
	list[currentCarousel].classList.add('active')
}

// 当点击四个“轮播指示器（小圆饼）”时，切换到对应的广告项
let indicatorList = document.querySelectorAll('[data-carousel-to]')
//console.log(indicatorList)类数组对象
//循环遍历数组中的每个元素
indicatorList.forEach(function(e,i){
	// console.log(i,e) e就是每个li,i是li的下标
	e.onclick=function(){
		// 切换要显示的广告项
		document.querySelector('.carousel>.items>li.active').classList.remove('active')
		// 提示：CSS中:nth-child()下标从1开始而不是0！
		document.querySelector('.carousel>.items>li:nth-child(' + (i+1) + ')').classList.add('active')
		// 切换广告指示器的激活项
		document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
		document.querySelector('.carousel>.indicators>li:nth-child(' + (i+1) + ')').classList.add('active')
	}
})
//让轮播广告每个3s自动切换到下一张
	// 超时（一次性定时器）
	// let timer=setTimeout()
	// 循环（周期性定时器）
	let timer=setInterval(function(){
		currentCarousel++
		if(currentCarousel>=totalCarousel){
			// 如果切换到最后一张之后，则重新从头开始轮播
			currentCarousel = 0 
		}
		// 切换当前显示的广告项
		document.querySelector('.carousel>.items>li.active').classList.remove('active')
		// 提示：CSS中:nth-child()下标从1开始而不是0！
		document.querySelector('.carousel>.items>li:nth-child(' + (currentCarousel+1) + ')').classList.add('active')
		// 切换当前广告项对应的指示器
		document.querySelector('.carousel>.indicators>li.active').classList.remove('active')
		document.querySelector('.carousel>.indicators>li:nth-child(' + (currentCarousel+1) + ')').classList.add('active')
	},3000)
	



