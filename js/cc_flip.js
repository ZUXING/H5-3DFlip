// JavaScript Document
//ZUXING SideFlip - JavaScript
//Version 0.75 2019/3/24

var Side = 0;//0=FrontSide, 前面 1=BackSide, 后面
CC_Flip = function(){
	if(Side == 0){
		//0->1 切换到HTML编辑模式

		Trigger.text(FlipStr1);

		FrontSide.css({transition:FlipTime + 'ms ease-in'});
		BackSide.css({transition:FlipTime + 'ms ease-out'});
		
		FrontSide.css({transform:'rotateY(90deg)'});
		FrontSide.css({visibility:'hidden'});
		setTimeout("BackSide.css({visibility:'visible'})",FlipTime);
		setTimeout("BackSide.css({transform:'rotateY(0deg)'})",FlipTime);
		
		setTimeout("FrontSide.css({transition:'0s'})",2*FlipTime);
		setTimeout("BackSide.css({transition:'0s'})",2*FlipTime);
		
		setTimeout("FrontSide.css({transform:'rotateY(-90deg)'})",2*FlipTime);

		Side = 1;
	}else{
		//1->0 切换到RTF编辑模式

		Trigger.text(FlipStr2);

		BackSide.css({transition:FlipTime + 'ms ease-in'});
		FrontSide.css({transition:FlipTime + 'ms ease-out'});
		
		BackSide.css({transform:'rotateY(90deg)'});
		BackSide.css({visibility:'hidden'});
		setTimeout("FrontSide.css({visibility:'visible'})",FlipTime);
		setTimeout("FrontSide.css({transform:'rotateY(0deg)'});",FlipTime);
		
		setTimeout("FrontSide.css({transition:'0s'})",2*FlipTime);
		setTimeout("BackSide.css({transition:'0s'})",2*FlipTime);
		
		setTimeout("BackSide.css({transform:'rotateY(-90deg)'})",2*FlipTime);

		Side = 0;
	}
}