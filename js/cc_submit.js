// JavaScript Document
//ZUXING CMS - JavaScript
//Version lim(x->2)(x) 2019/4/1

//提交过程
function submitEdit(){
	//接收网页正文
	if(Side == 0){
		CC_Content_GET = $('#RTFBox').html();
	}else{
		CC_Content_GET = $('#HTMLBox').text();
	}
	
	//创建Json
	var article_json = {
		//标题
		CC_Title:$('#TitleBox').html(),
		//副标题
		CC_SubTitle:'',
		//栏目
		CC_Channel:2,
		//时间日期
		CC_PublicDatetime:'',
		//网页正文
		CC_Content:CC_Content_GET,
		//文件路径
		CC_File:''
	}
	//解码Json
	var returnJson = $.parseJSON(article_json);
	alert(returnJson.CC_Title);
	alert(returnJson.CC_Content);
}