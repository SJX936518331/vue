webpackJsonp([20],{253:function(e,t,a){"use strict";function i(e){d||a(396)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(310),r=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,function(){return n[e]})}(l);var o=a(398),s=a.n(o),d=!1,c=a(1),p=i,m=c(r.a,s.a,!1,p,null,null);m.options.__file="src\\views\\renshi\\companyInfo\\companyInfo.vue",t.default=m.exports},290:function(e,t,a){"use strict";function i(){var e=window.navigator.userAgent;return e.indexOf("MSIE")>=0?"ie":e.indexOf("Firefox")>=0?"Firefox":e.indexOf("Chrome")>=0?"Chrome":e.indexOf("Opera")>=0?"Opera":e.indexOf("Safari")>=0?"Safari":void 0}function n(e,t,a){var n=e.$children[0].$el,o=e.$children[1].$el,c="<thead><tr>";if(1!==e.$children.length){for(var p=o.rows.length,m=-1;m<p;)-1===m?((0,s.default)(n.rows[0].children).forEach(function(e){c=c+"<th>"+e.children[0].children[0].innerHTML+"</th>"}),c+="</tr><thead><tbody>"):(c+="<tr>",(0,s.default)(o.rows[m].children).forEach(function(e){c=c+"<td>"+e.children[0].children[0].innerHTML+"</td>"}),c+="</tr>"),m++;c+="</tbody>"}if("Safari"!==i()&&".xls"!==a.substr(-1,4)&&(a+=".xls"),"ie"===i()){var u=e,h=new ActiveXObject("Excel.Application"),f=h.Workbooks.Add(),x=f.Worksheets(1),y=document.body.createTextRange();y.moveToElementText(u),y.select(),y.execCommand("Copy"),x.Paste(),h.Visible=!0;try{var v=h.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(e){print("Nested catch caught "+e)}finally{f.SaveAs(v),h.Quit(),h=null,l=setInterval(r(),1)}}else d(c,t,a)}function r(){window.clearInterval(l)}Object.defineProperty(t,"__esModule",{value:!0});var l,o=a(95),s=function(e){return e&&e.__esModule?e:{default:e}}(o),d=function(){var e=function(e){return window.btoa(unescape(encodeURIComponent(e)))},t=function(e,t){return e.replace(/{(\w+)}/g,function(e,a){return t[a]})};return function(a,i,n){var r={worksheet:n||"Worksheet",table:a};document.getElementById(i).href="data:application/vnd.ms-excel;base64,"+e(t('<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',r)),document.getElementById(i).download=n,document.getElementById(i).click()}}(),c={};c.transform=n,t.default=c},310:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),r=i(n),l=a(290),o=i(l);t.default={data:function(){var e=this;return{modal:!1,excelFileName:"",deleteIndex:function(){for(var e=r.default.get("deleteIndex"),t=0;t<this.data1.length;t++)t>=this.data1[e].index-1&&1!=this.data1.length&&(this.data1[t].index=this.data1[t].index-1)},editForm:{name:"",people:"",email:"",address:""},companyForm:{name:"",people:"",email:"",address:""},validate:{name:[{required:!0,message:"公司名称不能为空",trigger:"blur"}],people:[{required:!0,message:"联系人不能为空",trigger:"blur"}],email:[{required:!0,message:"联系人邮箱不能为空",trigger:"blur"}],address:[{required:!0,message:"办公地址不能为空",trigger:"blur"}]},col:[{title:"序号",key:"index"},{title:"公司名称",key:"name"},{title:"联系人",key:"people"},{title:"联系人邮箱",key:"email"},{title:"办公地址",key:"address"},{title:"操作",key:"action",width:150,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"25px"},on:{click:function(){var t=a.index;e.editForm.name=e.data1[t].name,e.editForm.people=e.data1[t].people,e.editForm.email=e.data1[t].email,e.editForm.address=e.data1[t].address,e.test(),r.default.set("dataIndex",t)}}},"修改"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){var t=a.index;r.default.set("deleteIndex",t),e.deleteIndex(),e.data1.length>=2?e.data1.splice(a.index,1):e.$Modal.info({title:"提示信息",content:"你确定要删除吗？就只剩一条数据了。"})}}},"删除")])}}],data1:[]}},methods:{test:function(){this.modal=!0},exportExcel:function(){o.default.transform(this.$refs.tb,"hrefToExportTable",this.excelFileName)},save:function(){""==this.companyForm.name||""==this.companyForm.people||""==this.companyForm.email||""==this.companyForm.address?this.$Modal.info({title:"提示信息",content:"请把数据补充完整。"}):(this.$Modal.info({title:"提示信息",content:"保存成功。"}),this.$refs.a.style.display="block",this.$refs.export.style.display="inline-block",this.data1.push({index:this.data1.length+1,name:this.companyForm.name,people:this.companyForm.people,email:this.companyForm.email,address:this.companyForm.address}))},ok:function(){if(""==this.editForm.name||""==this.editForm.people||""==this.editForm.email||""==this.editForm.address)this.$Message.info("请把信息补充完整");else{var e=r.default.get("dataIndex");this.data1[e].name=this.editForm.name,this.data1[e].people=this.editForm.people,this.data1[e].email=this.editForm.email,this.data1[e].address=this.editForm.address,this.$Message.info("修改成功")}},cancel:function(){this.$Message.info("你点击了取消")}}}},396:function(e,t,a){var i=a(397);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(17)("ce36b118",i,!1)},397:function(e,t,a){t=e.exports=a(16)(!1),t.push([e.i,"\n.container {\r\n  width: 100%;\r\n  text-align: center;\n}\n.content {\r\n  margin-left: -80px;\r\n  width: 500px;\r\n  text-align: right;\r\n  color: rgb(105, 101, 101);\n}\n.content Form label {\r\n  font-size: 18px;\r\n  margin-top: 15px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\n}\n.content Form input {\r\n  width: 300px;\r\n  border: 1px solid rgb(214, 214, 214);\r\n  margin-top: 15px;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  text-indent: 5px;\n}\n.foot {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  text-align: center;\r\n  background-color: gray;\r\n  /* 固定在底部的三种方式 */\r\n  /* 方法1：使用CSS绝对定位\r\n     position:absolute;\r\n     bottom:0px;\r\n     left:0px; */\r\n  /* 方法2：使用CSS固定定位 \r\n     position:fixed;\r\n     bottom:0px;\r\n     left:0px;  */\r\n  /* 方法3：使用Float浮动定位(适用于div是body元素的子元素)\r\n     float:right;\r\n     bottom:0px; */\r\n  /* 固定在顶部的三种方式跟这三种没区别，类似 */\n}\n.foot p {\r\n  display: inline-block;\r\n  color: white;\r\n  height: 50px;\r\n  line-height: 50px;\n}\r\n",""])},398:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h3",{staticStyle:{display:"inline-block","font-size":"22px",color:"black"}},[e._v("公司信息")]),e._v(" "),a("div",{staticStyle:{width:"380px","text-align":"left","margin-left":"30px"}},[e._m(0),e._v(" "),a("div",{staticStyle:{width:"300px","text-align":"right",display:"inline-block",height:"60px"}},[a("Form",{ref:"companyForm",attrs:{model:e.companyForm,rules:e.validate}},[a("FormItem",{attrs:{prop:"name"}},[a("Input",{staticStyle:{margin:"10px"},attrs:{placeholder:"请输入公司名称"},model:{value:e.companyForm.name,callback:function(t){e.$set(e.companyForm,"name",t)},expression:"companyForm.name"}})],1)],1)],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("div",{staticStyle:{width:"300px","text-align":"right",display:"inline-block",height:"60px"}},[a("Form",{ref:"companyForm",staticStyle:{margin:"0px",padding:"0px"},attrs:{model:e.companyForm,rules:e.validate}},[a("FormItem",{attrs:{prop:"people"}},[a("Input",{staticStyle:{margin:"10px"},attrs:{placeholder:"请输入公司名称"},model:{value:e.companyForm.people,callback:function(t){e.$set(e.companyForm,"people",t)},expression:"companyForm.people"}})],1)],1)],1),e._v(" "),e._m(4),e._v(" "),a("div",{staticStyle:{width:"300px","text-align":"right",display:"inline-block",height:"60px"}},[a("Form",{ref:"companyForm",staticStyle:{margin:"0px",padding:"0px"},attrs:{model:e.companyForm,rules:e.validate}},[a("FormItem",{attrs:{prop:"email"}},[a("Input",{staticStyle:{margin:"10px"},attrs:{placeholder:"请输入公司名称"},model:{value:e.companyForm.email,callback:function(t){e.$set(e.companyForm,"email",t)},expression:"companyForm.email"}})],1)],1)],1),e._v(" "),e._m(5),e._v(" "),a("div",{staticStyle:{width:"300px","text-align":"right",display:"inline-block",height:"60px"}},[a("Form",{ref:"companyForm",staticStyle:{margin:"0px",padding:"0px"},attrs:{model:e.companyForm,rules:e.validate}},[a("FormItem",{attrs:{prop:"address"}},[a("Input",{staticStyle:{margin:"10px"},attrs:{placeholder:"请输入公司名称"},model:{value:e.companyForm.address,callback:function(t){e.$set(e.companyForm,"address",t)},expression:"companyForm.address"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"50px","text-align":"left",display:"inline-block"}}),e._v(" "),a("div",{staticStyle:{width:"300px","text-align":"left",display:"inline-block","padding-left":"30px","padding-top":"10px"}},[a("Button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),a("div",{ref:"export",staticStyle:{display:"none","margin-left":"10px"}},[a("Button",{attrs:{type:"primary",size:"large"},on:{click:e.exportExcel}},[e._v("导出表格数据")]),e._v(" "),a("a",{staticStyle:{postion:"absolute",left:"-10px",top:"-10px",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)],1)]),e._v(" "),a("Modal",{attrs:{title:"修改信息"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("Form",{ref:"editForm",attrs:{model:e.editForm,"label-width":100,"label-position":"right",rules:e.validate}},[a("FormItem",{attrs:{label:"公司名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"联系人",prop:"people"}},[a("Input",{attrs:{placeholder:"请输入联系人"},model:{value:e.editForm.people,callback:function(t){e.$set(e.editForm,"people",t)},expression:"editForm.people"}})],1),e._v(" "),a("FormItem",{attrs:{label:"联系人邮箱",prop:"email"}},[a("Input",{attrs:{placeholder:"请输入联系人邮箱"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),e._v(" "),a("FormItem",{attrs:{label:"办公地址",prop:"address"}},[a("Input",{attrs:{placeholder:"请输入办公地址"},model:{value:e.editForm.address,callback:function(t){e.$set(e.editForm,"address",t)},expression:"editForm.address"}})],1)],1)],1),e._v(" "),a("div",{ref:"a",staticStyle:{display:"none","margin-top":"10px"}},[a("Table",{ref:"tb",staticStyle:{margin:"5px"},attrs:{columns:e.col,data:e.data1}})],1),e._v(" "),e._m(6)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"70px","text-align":"left",display:"inline-block"}},[a("label",[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("公司名称")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"50px","text-align":"left",display:"inline-block"}},[a("label",[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("Logo")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"300px","text-align":"left",display:"inline-block","padding-left":"30px"}},[a("img",{staticStyle:{width:"100px",height:"100px","margin-top":"10px"},attrs:{src:"https://i.loli.net/2017/08/21/599a521472424.jpg"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"70px","text-align":"left",display:"inline-block"}},[a("label",[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("联系人")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"70px","text-align":"left",display:"inline-block"}},[a("label",[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("联系人邮箱")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"70px","text-align":"left",display:"inline-block"}},[a("label",[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("办公地址")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"foot"},[a("p",[e._v("粤Icp备:14276767号 @个人版权所有，侵权必定追究")])])}];i._withStripped=!0;var r={render:i,staticRenderFns:n};t.default=r}});