webpackJsonp([39],{263:function(t,e,i){"use strict";function n(t){l||i(426)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(320),r=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var d=i(428),s=i.n(d),l=!1,c=i(1),u=n,h=c(r.a,s.a,!1,u,null,null);h.options.__file="src\\views\\shop\\statistics\\statistic.vue",e.default=h.exports},320:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){var t=this;return{editForm:{id:"",name:"",beizhu:""},editForm1:{id:"",name:"",beizhu:""},validate:{id:[{required:!0,message:"套餐编号不能为空",trigger:"blur"}],name:[{required:!0,message:"套餐名称不能为空",trigger:"blur"}],beizhu:[{required:!0,message:"备注不能为空",trigger:"blur"}]},modal1:!1,modal2:!1,deleteIndex:function(){for(var t=a.default.get("deleteIndex"),e=0;e<this.data1.length;e++)e>=this.data1[t].index-1&&1!=this.data1.length&&(this.data1[e].index=this.data1[e].index-1)},col:[{title:"序号",key:"index"},{title:"套餐编号",key:"id"},{title:"套餐名称",key:"name"},{title:"备注",key:"beizhu"},{title:"操作",key:"action",width:150,align:"center",render:function(e,i){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"25px"},on:{click:function(){var e=i.index;a.default.set("data_index",e);var n=a.default.get("dataIndex1");e==n?(t.editForm1.id=t.data1[n].id,t.editForm1.name=t.data1[n].name,t.editForm1.beizhu=t.data1[n].beizhu):(t.editForm1.id=t.data1[e].id,t.editForm1.name=t.data1[e].name,t.editForm1.beizhu=t.data1[e].beizhu),t.test1()}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){var e=i.index;a.default.set("deleteIndex",e),t.deleteIndex(),t.data1.length>=2?t.data1.splice(i.index,1):t.$Modal.info({title:"提示信息",content:"你确定要删除吗？就只剩一条数据了。"})}}},"删除")])}}],data1:[{index:1,id:"001",name:"沙发十件套",beizhu:"123"},{index:2,id:"002",name:"桌子八件套",beizhu:"1234"}]}},methods:{test:function(){this.modal1=!0},test1:function(){this.modal2=!0},ok:function(){if(""==this.editForm1.id||""==this.editForm1.name||""==this.editForm1.beizhu)this.$Message.info("请把信息填完整");else{var t=a.default.get("data_index");a.default.set("dataIndex1",t),this.data1[t].id=this.editForm1.id,this.data1[t].name=this.editForm1.name,this.data1[t].beizhu=this.editForm1.beizhu,this.$Message.info("修改套餐信息成功"),this.editForm1.id="",this.editForm1.name="",this.editForm1.beizhu=""}},ok1:function(){""==this.editForm.id||""==this.editForm.name||""==this.editForm.beizhu?this.$Message.info("请把信息填完整"):(this.data1.push({index:this.data1.length+1,id:this.editForm.id,name:this.editForm.name,beizhu:this.editForm.beizhu}),this.$Message.info("添加套餐成功"),this.editForm.id="",this.editForm.name="",this.editForm.beizhu="")},cancel:function(){this.$Message.info("你点击了取消")}}}},426:function(t,e,i){var n=i(427);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(17)("2f26a633",n,!1)},427:function(t,e,i){e=t.exports=i(16)(!1),e.push([t.i,"\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\n}\n.container h3 {\r\n  font-size: 24px;\r\n  margin-bottom: 5px;\r\n  display: inline-block;\n}\n.foot {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  text-align: center;\r\n  background-color: gray;\r\n  /* 固定在底部的三种方式 */\r\n  /* 方法1：使用CSS绝对定位\r\n     position:absolute;\r\n     bottom:0px;\r\n     left:0px; */\r\n  /* 方法2：使用CSS固定定位 \r\n     position:fixed;\r\n     bottom:0px;\r\n     left:0px;  */\r\n  /* 方法3：使用Float浮动定位(适用于div是body元素的子元素)\r\n     float:right;\r\n     bottom:0px; */\r\n  /* 固定在顶部的三种方式跟这三种没区别，类似 */\n}\n.foot p {\r\n  display: inline-block;\r\n  color: white;\r\n  height: 50px;\r\n  line-height: 50px;\n}\r\n",""])},428:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h3",[t._v("销售统计")]),t._v(" "),i("div",{staticStyle:{"text-align":"center","margin-top":"50px"}},[i("div",{staticStyle:{display:"inline-block",width:"400px",border:"solid #ccc 1px"}},[i("p",{staticStyle:{"text-align":"left",padding:"10px 0px 10px 20px",color:"red"}},[t._v("本月")]),t._v(" "),i("ul",{staticStyle:{"list-style":"none","text-align":"center"}},[i("li",{staticStyle:{display:"inline-block",margin:"10px 20px 30px 0px"}},[i("p",{staticStyle:{"text-align":"center","font-size":"22px",color:"black"}},[t._v("￥12000")]),t._v(" "),i("p",{staticStyle:{"text-align":"center","font-size":"22px",color:"black"}},[t._v("收入")])]),t._v(" "),i("li",{staticStyle:{display:"inline-block",margin:"10px 0px 30px 0px"}},[i("p",{staticStyle:{"text-align":"center","font-size":"22px",color:"black"}},[t._v("￥1200")]),t._v(" "),i("p",{staticStyle:{"text-align":"center","font-size":"22px",color:"black"}},[t._v("支出")])])])])]),t._v(" "),i("div",{staticClass:"foot"},[i("p",[t._v("粤Icp备:14276767号 @个人版权所有，侵权必定追究")])])])}];n._withStripped=!0;var r={render:n,staticRenderFns:a};e.default=r}});