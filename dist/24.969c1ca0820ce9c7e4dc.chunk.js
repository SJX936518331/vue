webpackJsonp([24],{276:function(e,t,i){"use strict";function r(e){s||i(465)}Object.defineProperty(t,"__esModule",{value:!0});var a=i(333),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);var l=i(467),d=i.n(l),s=!1,c=i(1),p=r,u=c(o.a,d.a,!1,p,null,null);u.options.__file="src\\views\\finance\\payment\\paymentAdd.vue",t.default=u.exports},290:function(e,t,i){"use strict";function r(){var e=window.navigator.userAgent;return e.indexOf("MSIE")>=0?"ie":e.indexOf("Firefox")>=0?"Firefox":e.indexOf("Chrome")>=0?"Chrome":e.indexOf("Opera")>=0?"Opera":e.indexOf("Safari")>=0?"Safari":void 0}function a(e,t,i){var a=e.$children[0].$el,l=e.$children[1].$el,c="<thead><tr>";if(1!==e.$children.length){for(var p=l.rows.length,u=-1;u<p;)-1===u?((0,d.default)(a.rows[0].children).forEach(function(e){c=c+"<th>"+e.children[0].children[0].innerHTML+"</th>"}),c+="</tr><thead><tbody>"):(c+="<tr>",(0,d.default)(l.rows[u].children).forEach(function(e){c=c+"<td>"+e.children[0].children[0].innerHTML+"</td>"}),c+="</tr>"),u++;c+="</tbody>"}if("Safari"!==r()&&".xls"!==i.substr(-1,4)&&(i+=".xls"),"ie"===r()){var m=e,h=new ActiveXObject("Excel.Application"),f=h.Workbooks.Add(),y=f.Worksheets(1),x=document.body.createTextRange();x.moveToElementText(m),x.select(),x.execCommand("Copy"),y.Paste(),h.Visible=!0;try{var b=h.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(e){print("Nested catch caught "+e)}finally{f.SaveAs(b),h.Quit(),h=null,n=setInterval(o(),1)}}else s(c,t,i)}function o(){window.clearInterval(n)}Object.defineProperty(t,"__esModule",{value:!0});var n,l=i(95),d=function(e){return e&&e.__esModule?e:{default:e}}(l),s=function(){var e=function(e){return window.btoa(unescape(encodeURIComponent(e)))},t=function(e,t){return e.replace(/{(\w+)}/g,function(e,i){return t[i]})};return function(i,r,a){var o={worksheet:a||"Worksheet",table:i};document.getElementById(r).href="data:application/vnd.ms-excel;base64,"+e(t('<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',o)),document.getElementById(r).download=a,document.getElementById(r).click()}}(),c={};c.transform=a,t.default=c},333:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(7),o=r(a),n=i(290),l=r(n);t.default={data:function(){var e=this;return{excelFileName:"123",editForm:{id:"",people:"",date:"",danwei:"",account:"",moneyPay:"",type:"",beizhu:""},editForm1:{date:"",id:"",status:"",payMoney:"",beizhu:""},validate:{id:[{required:!0,message:"编号不能为空",trigger:"blur"}],people:[{required:!0,message:"制单人不能为空",trigger:"blur"}],date:[{required:!0,message:"制单日期不能为空",trigger:"blur"}],danwei:[{required:!0,message:"收款单位不能为空",trigger:"blur"}],account:[{required:!0,message:"账号不能为空",trigger:"blur"}],moneyPay:[{required:!0,message:"付款金额不能为空",trigger:"blur"}],type:[{required:!0,message:"账目类型不能为空",trigger:"blur"}],beizhu:[{required:!0,message:"备注不能为空",trigger:"blur"}]},modal1:!1,modal2:!1,deleteIndex:function(){for(var e=o.default.get("deleteIndex"),t=0;t<this.data1.length;t++)t>=this.data1[e].index-1&&1!=this.data1.length&&(this.data1[t].index=this.data1[t].index-1)},col:[{title:"序号",key:"index"},{title:"账目类型",key:"type"},{title:"金额",key:"moneyPay"},{title:"备注",key:"beizhu"},{title:"操作",key:"action",width:150,align:"center",render:function(t,i){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"25px"},on:{click:function(){var t=i.index;e.editForm1.type=e.data1[t].type,e.editForm1.moneyPay=e.data1[t].moneyPay,e.editForm1.beizhu=e.data1[t].beizhu,e.test1(),o.default.set("data_index",t)}}},"修改"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){var t=i.index;o.default.set("deleteIndex",t),e.deleteIndex(),e.data1.length>=2?e.data1.splice(i.index,1):e.$Modal.info({title:"提示信息",content:"你确定要删除吗？就只剩一条数据了。"})}}},"删除")])}}],data1:[{index:1,type:"工资支出",moneyPay:1e3,beizhu:"123"},{index:2,type:"设备维护",moneyPay:1e4,beizhu:"1234"}]}},methods:{exportExcel:function(){l.default.transform(this.$refs.table,"hrefToExportTable",this.excelFileName)},returnIndex:function(){this.$router.push({name:"finance_index"})},test:function(){this.modal1=!0},test1:function(){this.modal2=!0},ok:function(){if(""==this.editForm1.type||""==this.editForm1.moneyPay||""==this.editForm1.beizhu)this.$Message.info("请把信息填完整");else{var e=o.default.get("data_index");this.data1[e].type=this.editForm1.type,this.data1[e].moneyPay=this.editForm1.moneyPay,this.data1[e].beizhu=this.editForm1.beizhu,this.$Message.info("修改付款单信息成功"),this.editForm1.type="",this.editForm1.moneyPay="",this.editForm1.beizhu=""}},ok1:function(){""==this.editForm.type||""==this.editForm.moneyPay||""==this.editForm.beizhu?this.$Message.info("请把信息填完整"):(this.data1.push({index:this.data1.length+1,type:this.editForm.type,moneyPay:this.editForm.moneyPay,beizhu:this.editForm.beizhu}),this.$Message.info("添加付款单成功"),this.editForm.id="",this.editForm.people="",this.editForm.date="",this.editForm.danwei="",this.editForm.account="",this.editForm.moneyPay="",this.editForm.type="",this.editForm.beizhu="")},cancel:function(){this.$Message.info("你点击了取消")}}}},465:function(e,t,i){var r=i(466);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(17)("3bc90e1e",r,!1)},466:function(e,t,i){t=e.exports=i(16)(!1),t.push([e.i,"\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\n}\n.container h3 {\r\n  font-size: 24px;\r\n  margin-bottom: 5px;\r\n  display: inline-block;\n}\n.container p {\r\n  font-size: 18px;\r\n  color: rgb(92, 153, 133);\r\n  margin-top: 5px;\n}\n.foot {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  text-align: center;\r\n  background-color: gray;\r\n  /* 固定在底部的三种方式 */\r\n  /* 方法1：使用CSS绝对定位\r\n     position:absolute;\r\n     bottom:0px;\r\n     left:0px; */\r\n  /* 方法2：使用CSS固定定位 \r\n     position:fixed;\r\n     bottom:0px;\r\n     left:0px;  */\r\n  /* 方法3：使用Float浮动定位(适用于div是body元素的子元素)\r\n     float:right;\r\n     bottom:0px; */\r\n  /* 固定在顶部的三种方式跟这三种没区别，类似 */\n}\n.foot p {\r\n  display: inline-block;\r\n  color: white;\r\n  height: 50px;\r\n  line-height: 50px;\n}\r\n",""])},467:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h3",[e._v("付款单")]),e._v(" "),i("p",{staticStyle:{color:"red",margin:"10px 0px 10px 30px","text-align":"left"},on:{click:e.returnIndex}},[e._v("返回")]),e._v(" "),i("p",{staticStyle:{"text-align":"left"}},[i("Button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:e.test}},[e._v("添加付款单")]),e._v(" "),i("Button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:e.exportExcel}},[e._v("导出表格数据")]),e._v(" "),i("a",{staticStyle:{postion:"absolute",left:"-10px",top:"-10px",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1),e._v(" "),i("Modal",{attrs:{title:"添加付款单"},on:{"on-ok":e.ok1,"on-cancel":e.cancel},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[i("Form",{ref:"editForm",attrs:{model:e.editForm,"label-width":100,"label-position":"right",rules:e.validate}},[i("FormItem",{attrs:{label:"编号",prop:"id"}},[i("Input",{attrs:{placeholder:"请输入你的单据编号"},model:{value:e.editForm.id,callback:function(t){e.$set(e.editForm,"id",t)},expression:"editForm.id"}})],1),e._v(" "),i("FormItem",{attrs:{label:"制单人",prop:"people"}},[i("Input",{attrs:{placeholder:"请输入制单人"},model:{value:e.editForm.people,callback:function(t){e.$set(e.editForm,"people",t)},expression:"editForm.people"}})],1),e._v(" "),i("FormItem",{attrs:{label:"制单日期",prop:"date"}},[i("Select",{attrs:{placeholder:"请选择制单日期"},model:{value:e.editForm.date,callback:function(t){e.$set(e.editForm,"date",t)},expression:"editForm.date"}},[i("Option",{attrs:{value:"2018-3-20"}},[e._v("2018-3-20")]),e._v(" "),i("Option",{attrs:{value:"2018-4-20"}},[e._v("2018-4-20")]),e._v(" "),i("Option",{attrs:{value:"2018-5-20"}},[e._v("2018-5-20")]),e._v(" "),i("Option",{attrs:{value:"2018-6-20"}},[e._v("2018-6-20")])],1)],1),e._v(" "),i("FormItem",{attrs:{label:"收款单位",prop:"danwei"}},[i("Input",{attrs:{placeholder:"请输入收款单位"},model:{value:e.editForm.danwei,callback:function(t){e.$set(e.editForm,"danwei",t)},expression:"editForm.danwei"}})],1),e._v(" "),i("FormItem",{attrs:{label:"付款账号",prop:"account"}},[i("Input",{attrs:{placeholder:"请输入付款账号"},model:{value:e.editForm.account,callback:function(t){e.$set(e.editForm,"account",t)},expression:"editForm.account"}})],1),e._v(" "),i("FormItem",{attrs:{label:"付款金额",prop:"moneyPay"}},[i("Input",{attrs:{placeholder:"请输入付款金额"},model:{value:e.editForm.moneyPay,callback:function(t){e.$set(e.editForm,"moneyPay",t)},expression:"editForm.moneyPay"}})],1),e._v(" "),i("FormItem",{attrs:{label:"账目类型",prop:"type"}},[i("Input",{attrs:{placeholder:"请输入账目类型"},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}})],1),e._v(" "),i("FormItem",{attrs:{label:"备注",prop:"beizhu"}},[i("Input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.editForm.beizhu,callback:function(t){e.$set(e.editForm,"beizhu",t)},expression:"editForm.beizhu"}})],1)],1)],1),e._v(" "),i("Modal",{attrs:{title:"修改付款单信息"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modal2,callback:function(t){e.modal2=t},expression:"modal2"}},[i("Form",{ref:"editForm1",attrs:{model:e.editForm1,"label-width":100,"label-position":"right",rules:e.validate}},[i("FormItem",{attrs:{label:"账目类型",prop:"type"}},[i("Input",{attrs:{placeholder:"请输入账目类型"},model:{value:e.editForm1.type,callback:function(t){e.$set(e.editForm1,"type",t)},expression:"editForm1.type"}})],1),e._v(" "),i("FormItem",{attrs:{label:"金额",prop:"moneyPay"}},[i("Input",{attrs:{placeholder:"请输入金额"},model:{value:e.editForm1.moneyPay,callback:function(t){e.$set(e.editForm1,"moneyPay",t)},expression:"editForm1.moneyPay"}})],1),e._v(" "),i("FormItem",{attrs:{label:"备注",prop:"beizhu"}},[i("Input",{attrs:{type:"textarea",placeholder:"请输入你的备注"},model:{value:e.editForm1.beizhu,callback:function(t){e.$set(e.editForm1,"beizhu",t)},expression:"editForm1.beizhu"}})],1)],1)],1),e._v(" "),i("Table",{ref:"table",staticStyle:{margin:"5px"},attrs:{columns:e.col,data:e.data1}}),e._v(" "),e._m(0),e._v(" "),e._m(1)],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticStyle:{float:"right"}},[i("a",{attrs:{title:"1"}},[i("span",{staticStyle:{padding:"5px 10px","background-color":"white",color:"black",margin:"30px 5px","border-radius":"5px",display:"inline-block"}},[e._v("1")])]),e._v(" "),i("a",{attrs:{title:"2"}},[i("span",{staticStyle:{padding:"5px 10px","background-color":"white",color:"black",margin:"30px 5px","border-radius":"5px",display:"inline-block"}},[e._v("2")])]),e._v(" "),i("a",{attrs:{title:"3"}},[i("span",{staticStyle:{padding:"5px 10px","background-color":"white",color:"black",margin:"30px 5px","border-radius":"5px",display:"inline-block"}},[e._v("3")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"foot"},[i("p",[e._v("粤Icp备:14276767号 @个人版权所有，侵权必定追究")])])}];r._withStripped=!0;var o={render:r,staticRenderFns:a};t.default=o}});