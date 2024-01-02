/** 
 
 @Name： 未来之窗渲染引擎
 @Author：cybersnow
 @Site： www.ynwlzc.cn
 @LastEdit: 未来之窗
 2022-10-17
 CyberWin_APP_Page.js
 */
 /* eg
 
		<script type="text/javascript" src="CyberWin_APP_Page.js" alt="未来之窗页码"></script>

     function 未来之窗页面触发器(页码){
		  console.log("当前用户新="+页码);
	 }
	 CyberWin_Page.set_callback(未来之窗页面触发器);
	 CyberWin_Page.show("pagination_page",30,3);


 */

 //2024-1-3 分页技术
 
 
; !
function() {
    
    var cyberwin_page_style=`<style> .cyberwin_pagination_ul{
	       display: flex;
            background-color: #fff;
            border-radius: 50px;
			border: 1px solid #fe7300;
	}
	 .cyberwin_pagination_li{
           
            margin: 8px;
            list-style: none;
            text-align: center;
            line-height: 45px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
			border-left: 1px solid #E2E9EE;
        }

		 .cyberwin_pagination_ul li.cyberwin_paginatio_numb{
            width: 45px;
            height: 45px;
            border-radius: 5px 5px 5px 5px;
        }
        .cyberwin_pagination_ul li.cyberwin_paginatio_dots{
          cursor: default;
          font-size: 20px;
		  border-left: 1px solid #E2E9EE;
        }
        .cyberwin_pagination_ul li.cyberwin_paginatiobtn{
            
            padding: 0 20px;
        }
        .cyberwin_pagination_ul li.cyberwin_paginatio_prev{
            border-radius: 25px 5px 5px 25px;
        }
        .cyberwin_pagination_ul li.cyberwin_paginatio_next{
            border-radius: 5px 25px 25px 5px;
        }
        .cyberwin_pagination_ul li.active,
        .cyberwin_pagination_ul li.cyberwin_paginatiobtn:hover,
        .cyberwin_pagination_ul li.cyberwin_paginatio_numb:hover{
          color: #fff;
          background-color: #FE7300;
        }</style>`;
   
   function cyberwin_pagination_未来之窗default(页码){
		  console.log("当前"+页码);
	}

    var cyberwin_pagination_callback=cyberwin_pagination_未来之窗default;

	var f, b = {
        open: "{cwpdapp{",
        close: "}}"
    };

    
    e = function(a) {
        this.tpl = a
    };
   
    f = function(a) {
        return   new e(a)
    },

    f.init = function(a) {
			console.log("未来之窗页面组件加载");
        document.write(cyberwin_page_style);
		 
		//
    };
	f.set_callback= function(callback){
		cyberwin_pagination_callback = callback;
	};
	f.show = function(pagination_id,maxPage,page){//增加回调
		   let 未来之窗页码 = ' <ul class="cyberwin_pagination_ul">';
      let activeLi;
      let beforePage = page - 1;
      let afterPage = page + 1;
      if(page > 1){
        未来之窗页码 += `<li class="cyberwin_paginatiobtn cyberwin_paginatio_prev cyberwin_pagination_li" onclick="CyberWin_Page.show('${pagination_id}',${maxPage},${page-1})" ><span>上一页(pre)</span></li>`;
      }

      if(page > 2){
        未来之窗页码 += `<li class="cyberwin_paginatio_numb cyberwin_pagination_li" onclick=CyberWin_Page.show('${pagination_id}',${maxPage},1)>1</li>`;
        if(page > 3){
          未来之窗页码 += `<li class="cyberwin_paginatio_dots cyberwin_pagination_li">... </li>`;
        }
      }

      for (let pageLength = beforePage; pageLength <= afterPage; pageLength++){
        if(pageLength > maxPage){
          continue;
        }
        if(pageLength ==0){
          pageLength = pageLength + 1;
        }

        if(page == pageLength){
          activeLi = "active";
        }
        else{
          activeLi = "";
        }
        未来之窗页码 += `<li class="cyberwin_paginatio_numb ${activeLi} cyberwin_pagination_li" onclick="CyberWin_Page.show('${pagination_id}',${maxPage},${pageLength})">${pageLength}</li>`;
      }

      if(page < maxPage-2){
        未来之窗页码 += `<li class="cyberwin_paginatio_dots cyberwin_pagination_li">... </li>`;
      }
      if(page < maxPage-1){
        未来之窗页码 += `<li class="cyberwin_paginatio_numb cyberwin_pagination_li" onclick="CyberWin_Page.show('${pagination_id}',${maxPage},${maxPage})">${maxPage}</li>`;
      }

      if(page < maxPage){
        未来之窗页码 += `<li class="cyberwin_paginatiobtn cyberwin_paginatio_next cyberwin_pagination_li" onclick="CyberWin_Page.show('${pagination_id}',${maxPage},${page+1})" ><span>下一页(next)</span></li>`;
      }
	  未来之窗页码+="</ul>";
	  var 未来之窗页码容器 = document.querySelector("#"+pagination_id);
	  // console.log(未来之窗页码);
	   // console.log(pagination_id);
		//console.log(pagination_id);

      未来之窗页码容器.innerHTML = 未来之窗页码;
      //console.log(1);
	  cyberwin_pagination_callback(page);	 

	};
  

    f.v = "2023.1",
    "function" == typeof define ? define(function() {
        return f
    }) : "undefined" != typeof exports ? module.exports = f: window.CyberWin_Page = f
} ();

//document.write(cyberwin_alert_style);
CyberWin_Page.init();
 
 