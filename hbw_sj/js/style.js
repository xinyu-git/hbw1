/*wlo:Cflower*/
flagPC = false; //仅在PC端调试页面用

function doSomeThing(){
	//dialog.alertMsg("提示","莫名其妙","dialog.closeDiv()","s");
}

$(function(){
	
	$(".logInfo").prev(".close").addClass("logClose");//弹出登录框时将此时的关闭按钮加上logClose类使之隐藏
	
		
	
	//关闭
	$(document).on("click","#alertInfo .close",dialog.closeDiv);
	
	
/*---------------------------------------------------------------------------------------------------------------------*/
/*------以下是相关弹出窗口实例，仅供参考-------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------*/

	
	//dialog.alertMsg("提示","登录失败","dialog.closeDiv()","s");
	
//	//获奖记录
//	$(".recordBtn").click(function(event){
//		event.preventDefault();
//		dialog.showInfo("<div class='recordInfo'>"
//				+" <h4><dl><dd>时间</dd><dt>内容</dt></dl></h4>"
//				+" <dl class='userRecordList'>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+"  <dd>2017-02-22</dd><dt>德系 5级金币t－121 一辆</dt>"
//				+" </dl>"
//				+" <div class='page'><span class='up'>上一页</span><span class='down'>下一页</span></div>"
//				+"</div>")
//	});
//	
//	//获得奖励弹出
//	$(".openBtn").click(function(event){
//		event.preventDefault();
//		dialog.showInfo("<div class='resultInfo'><i></i>"
//				+" <div class='box'><h4><span>恭喜你 获得：</span></h4>"
//				+" <p>德系 5级金币t－121 一辆</p>"
//				+" <div class='resultBtn'><a href='javascript:dialog.closeDiv();'>确 定</a><a href='javascript:openAgain();'>再次开启</a></div>"
//				+"</div></div>")
//	});
	
	

	
	
	
/*---------------------------------------------------------------------------------------------------------------------*/
})
function showLogin(){
	dialog.alertLog("请先登录","");
}

function openShow(msg){
	dialog.showInfo("<div class='resultInfo'><i></i>"
				+" <div class='box'><h4><span>恭喜你 获得：</span></h4>"
				+" <p>"+msg+"</p>"
				+" <div class='resultBtn'><a href='javascript:dialog.closeDiv();'>确 定</a><a href='javascript:openXS();'>再次开启</a></div>"
				+"</div></div>");
}
