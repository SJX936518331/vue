webpackJsonp([4],{288:function(e,t,a){"use strict";function n(e){s||a(506)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(346),o=a.n(i);for(var l in i)"default"!==l&&function(e){a.d(t,e,function(){return i[e]})}(l);var c=a(510),d=a.n(c),s=!1,r=a(1),p=n,v=r(o.a,d.a,!1,p,"data-v-0cbed1e2",null);v.options.__file="src\\views\\tables\\exportable-table.vue",t.default=v.exports},290:function(e,t,a){"use strict";function n(){var e=window.navigator.userAgent;return e.indexOf("MSIE")>=0?"ie":e.indexOf("Firefox")>=0?"Firefox":e.indexOf("Chrome")>=0?"Chrome":e.indexOf("Opera")>=0?"Opera":e.indexOf("Safari")>=0?"Safari":void 0}function i(e,t,a){var i=e.$children[0].$el,c=e.$children[1].$el,r="<thead><tr>";if(1!==e.$children.length){for(var p=c.rows.length,v=-1;v<p;)-1===v?((0,d.default)(i.rows[0].children).forEach(function(e){r=r+"<th>"+e.children[0].children[0].innerHTML+"</th>"}),r+="</tr><thead><tbody>"):(r+="<tr>",(0,d.default)(c.rows[v].children).forEach(function(e){r=r+"<td>"+e.children[0].children[0].innerHTML+"</td>"}),r+="</tr>"),v++;r+="</tbody>"}if("Safari"!==n()&&".xls"!==a.substr(-1,4)&&(a+=".xls"),"ie"===n()){var m=e,h=new ActiveXObject("Excel.Application"),b=h.Workbooks.Add(),u=b.Worksheets(1),w=document.body.createTextRange();w.moveToElementText(m),w.select(),w.execCommand("Copy"),u.Paste(),h.Visible=!0;try{var f=h.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(e){print("Nested catch caught "+e)}finally{b.SaveAs(f),h.Quit(),h=null,l=setInterval(o(),1)}}else s(r,t,a)}function o(){window.clearInterval(l)}Object.defineProperty(t,"__esModule",{value:!0});var l,c=a(95),d=function(e){return e&&e.__esModule?e:{default:e}}(c),s=function(){var e=function(e){return window.btoa(unescape(encodeURIComponent(e)))},t=function(e,t){return e.replace(/{(\w+)}/g,function(e,a){return t[a]})};return function(a,n,i){var o={worksheet:i||"Worksheet",table:a};document.getElementById(n).href="data:application/vnd.ms-excel;base64,"+e(t('<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',o)),document.getElementById(n).download=i,document.getElementById(n).click()}}(),r={};r.transform=i,t.default=r},346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(508),i=a(509),o=a(290),l=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"exportable-table",data:function(){return{columnsCsv:n.csvColumns,csvData:n.table2csvData,table2excelData:i.table2excelData,excelColumns:i.excelColumns,rowNum:n.table2csvData.length,colNum:n.csvColumns.length,selectMinRow:1,selectMaxRow:n.table2csvData.length,selectMinCol:1,selectMaxCol:n.csvColumns.length,maxRow:0,minRow:1,maxCol:0,minCol:1,csvFileName:"",excelFileName:"",tableExcel:{},fontSize:16}},methods:{exportData:function(e){var t=this;1===e?this.$refs.tableCsv.exportCsv({filename:"原始数据"}):2===e?this.$refs.tableCsv.exportCsv({filename:"排序和过滤后的数据",original:!1}):3===e&&this.$refs.tableCsv.exportCsv({filename:this.csvFileName,columns:this.columnsCsv.filter(function(e,a){return a>=t.selectMinCol-1&&a<=t.selectMaxCol-1}),data:this.csvData.filter(function(e,a){return a>=t.selectMinRow-1&&a<=t.selectMaxRow-1})})},exportExcel:function(){l.default.transform(this.$refs.tableExcel,"hrefToExportTable",this.excelFileName)}}}},506:function(e,t,a){var n=a(507);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(17)("5e43d3f7",n,!1)},507:function(e,t,a){t=e.exports=a(16)(!1),t.push([e.i,"\n.margin-top-8[data-v-0cbed1e2] {\n  margin-top: 8px;\n}\n.margin-top-10[data-v-0cbed1e2] {\n  margin-top: 10px;\n}\n.margin-top-20[data-v-0cbed1e2] {\n  margin-top: 20px;\n}\n.margin-left-10[data-v-0cbed1e2] {\n  margin-left: 10px;\n}\n.margin-bottom-10[data-v-0cbed1e2] {\n  margin-bottom: 10px;\n}\n.margin-bottom-100[data-v-0cbed1e2] {\n  margin-bottom: 100px;\n}\n.margin-right-10[data-v-0cbed1e2] {\n  margin-right: 10px;\n}\n.padding-left-6[data-v-0cbed1e2] {\n  padding-left: 6px;\n}\n.padding-left-8[data-v-0cbed1e2] {\n  padding-left: 5px;\n}\n.padding-left-10[data-v-0cbed1e2] {\n  padding-left: 10px;\n}\n.padding-left-20[data-v-0cbed1e2] {\n  padding-left: 20px;\n}\n.height-100[data-v-0cbed1e2] {\n  height: 100%;\n}\n.height-120px[data-v-0cbed1e2] {\n  height: 100px;\n}\n.height-200px[data-v-0cbed1e2] {\n  height: 200px;\n}\n.height-492px[data-v-0cbed1e2] {\n  height: 492px;\n}\n.height-460px[data-v-0cbed1e2] {\n  height: 460px;\n}\n.line-gray[data-v-0cbed1e2] {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap[data-v-0cbed1e2] {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5[data-v-0cbed1e2] {\n  padding-left: 10px;\n}\n[v-cloak][data-v-0cbed1e2] {\n  display: none;\n}\n.dragging-tip-enter-active[data-v-0cbed1e2] {\n  opacity: 1;\n  transition: opacity .3s;\n}\n.dragging-tip-enter[data-v-0cbed1e2],\n.dragging-tip-leave-to[data-v-0cbed1e2] {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.dragging-tip-con[data-v-0cbed1e2] {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n.dragging-tip-con span[data-v-0cbed1e2] {\n  font-size: 18px;\n}\n.record-tip-con[data-v-0cbed1e2] {\n  display: block;\n  width: 100%;\n  height: 292px;\n  overflow: auto;\n}\n.record-item[data-v-0cbed1e2] {\n  box-sizing: content-box;\n  display: block;\n  overflow: hidden;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 10px;\n  border-bottom: 1px dashed gainsboro;\n}\n.record-tip-con span[data-v-0cbed1e2] {\n  font-size: 14px;\n}\n.edittable-test-con[data-v-0cbed1e2] {\n  height: 160px;\n}\n.edittable-table-height-con[data-v-0cbed1e2] {\n  height: 190px;\n}\n.edittable-con-1[data-v-0cbed1e2] {\n  box-sizing: content-box;\n  padding: 15px 0 0;\n  height: 196px;\n}\n.edittable-table-get-currentdata-con[data-v-0cbed1e2] {\n  height: 190px !important;\n}\n.exportable-table-download-con1[data-v-0cbed1e2] {\n  padding: 16px 0 16px 20px;\n  border-bottom: 1px dashed #c3c3c3;\n  margin-bottom: 16px;\n}\n.exportable-table-download-con2[data-v-0cbed1e2] {\n  padding-left: 20px;\n}\n.show-image[data-v-0cbed1e2] {\n  padding: 20px 0px;\n}\n.show-image img[data-v-0cbed1e2] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.searchable-table-con1[data-v-0cbed1e2] {\n  height: 230px !important;\n}\n",""])},508:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.table2csvData=[{name:"推广名称1",fav:0,show:7302,weak:5627,signin:1563,click:4254,active:1438,day7:274,day30:285,tomorrow:1727,day:558,week:4440,month:5610},{name:"推广名称2",fav:0,show:4720,weak:4086,signin:3792,click:8690,active:8470,day7:8172,day30:5197,tomorrow:1684,day:2593,week:2507,month:1537},{name:"推广名称3",fav:0,show:7181,weak:8007,signin:8477,click:1879,active:16,day7:2249,day30:3450,tomorrow:377,day:1561,week:3219,month:1588},{name:"推广名称4",fav:0,show:9911,weak:8976,signin:8807,click:8050,active:7668,day7:1547,day30:2357,tomorrow:7278,day:5309,week:1655,month:9043},{name:"推广名称5",fav:0,show:934,weak:1394,signin:6463,click:5278,active:9256,day7:209,day30:3563,tomorrow:8285,day:1230,week:4840,month:9908},{name:"推广名称6",fav:0,show:6856,weak:1608,signin:457,click:4949,active:2909,day7:4525,day30:6171,tomorrow:1920,day:1966,week:904,month:6851},{name:"推广名称7",fav:0,show:5107,weak:6407,signin:4166,click:7970,active:1002,day7:8701,day30:9040,tomorrow:7632,day:4061,week:4359,month:3676}],t.csvColumns=[{title:"名称",key:"name",fixed:"left",width:200},{title:"展示",key:"show",width:150,sortable:!0,filters:[{label:"大于4000",value:1},{label:"小于4000",value:2}],filterMultiple:!1,filterMethod:function(e,t){return 1===e?t.show>4e3:2===e?t.show<4e3:void 0}},{title:"唤醒",key:"weak",width:150,sortable:!0},{title:"登录",key:"signin",width:150,sortable:!0},{title:"点击",key:"click",width:150,sortable:!0},{title:"激活",key:"active",width:150,sortable:!0},{title:"7日留存",key:"day7",width:150,sortable:!0},{title:"30日留存",key:"day30",width:150,sortable:!0},{title:"次日留存",key:"tomorrow",width:150,sortable:!0},{title:"日活跃",key:"day",width:150,sortable:!0},{title:"周活跃",key:"week",width:150,sortable:!0},{title:"月活跃",key:"month",width:150,sortable:!0}]},509:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.table2excelData=[{name:"推广名称1",fav:0,show:7302,weak:5627,signin:1563,click:4254,active:1438,day7:274,day30:285,tomorrow:1727,day:558,week:4440,month:5610},{name:"推广名称2",fav:0,show:4720,weak:4086,signin:3792,click:8690,active:8470,day7:8172,day30:5197,tomorrow:1684,day:2593,week:2507,month:1537},{name:"推广名称3",fav:0,show:7181,weak:8007,signin:8477,click:1879,active:16,day7:2249,day30:3450,tomorrow:377,day:1561,week:3219,month:1588},{name:"推广名称4",fav:0,show:9911,weak:8976,signin:8807,click:8050,active:7668,day7:1547,day30:2357,tomorrow:7278,day:5309,week:1655,month:9043},{name:"推广名称5",fav:0,show:934,weak:1394,signin:6463,click:5278,active:9256,day7:209,day30:3563,tomorrow:8285,day:1230,week:4840,month:9908},{name:"推广名称6",fav:0,show:6856,weak:1608,signin:457,click:4949,active:2909,day7:4525,day30:6171,tomorrow:1920,day:1966,week:904,month:6851},{name:"推广名称7",fav:0,show:5107,weak:6407,signin:4166,click:7970,active:1002,day7:8701,day30:9040,tomorrow:7632,day:4061,week:4359,month:3676},{name:"推广名称8",fav:0,show:5107,weak:6407,signin:4166,click:7970,active:1002,day7:8701,day30:9040,tomorrow:7632,day:4061,week:4359,month:3676},{name:"推广名称9",fav:0,show:5107,weak:6407,signin:4166,click:7970,active:1002,day7:8701,day30:9040,tomorrow:7632,day:4061,week:4359,month:3676},{name:"推广名称10",fav:0,show:5107,weak:6407,signin:4166,click:7970,active:1002,day7:8701,day30:9040,tomorrow:7632,day:4061,week:4359,month:3676}],t.excelColumns=[{title:"名称",key:"name"},{title:"展示",key:"show",sortable:!0,filters:[{label:"大于4000",value:1},{label:"小于4000",value:2}],filterMultiple:!1,filterMethod:function(e,t){return 1===e?t.show>4e3:2===e?t.show<4e3:void 0}},{title:"唤醒",key:"weak",sortable:!0},{title:"登录",key:"signin",sortable:!0},{title:"点击",key:"click",sortable:!0},{title:"激活",key:"active",sortable:!0},{title:"30日留存",key:"day30",sortable:!0},{title:"月活跃",key:"month",sortable:!0}]},510:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Card",[a("h4",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"android-archive"}}),e._v("\n                导出表格数据到 .Csv 文件\n            ")],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"18"}},[a("Table",{ref:"tableCsv",attrs:{columns:e.columnsCsv,data:e.csvData,size:"small"}})],1),e._v(" "),a("Col",{staticClass:"padding-left-10",attrs:{span:"6"}},[a("div",{staticClass:"exportable-table-download-con1"},[a("span",{staticStyle:{"margin-right":"16px"}},[a("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.exportData(1)}}},[a("Icon",{attrs:{type:"ios-download-outline"}}),e._v(" 导出原始数据")],1)],1),e._v(" "),a("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.exportData(2)}}},[a("Icon",{attrs:{type:"ios-download-outline"}}),e._v(" 导出排序和过滤后的数据")],1)],1),e._v(" "),a("div",{staticClass:"exportable-table-download-con2"},[a("div",[a("span",[e._v("选取行范围： ")]),a("InputNumber",{attrs:{min:1,max:e.selectMaxRow},model:{value:e.selectMinRow,callback:function(t){e.selectMinRow=t},expression:"selectMinRow"}}),e._v(" "),a("span",[e._v("  -  ")]),e._v(" "),a("InputNumber",{attrs:{min:e.selectMinRow,max:e.rowNum},model:{value:e.selectMaxRow,callback:function(t){e.selectMaxRow=t},expression:"selectMaxRow"}})],1),e._v(" "),a("div",{staticClass:"margin-top-10"},[a("span",[e._v("选取列范围： ")]),a("InputNumber",{attrs:{min:1,max:e.selectMaxCol},model:{value:e.selectMinCol,callback:function(t){e.selectMinCol=t},expression:"selectMinCol"}}),e._v(" "),a("span",[e._v("  -  ")]),e._v(" "),a("InputNumber",{attrs:{min:e.selectMinCol,max:e.colNum},model:{value:e.selectMaxCol,callback:function(t){e.selectMaxCol=t},expression:"selectMaxCol"}})],1),e._v(" "),a("div",{staticClass:"margin-top-10"},[a("span",[e._v("输入文件名：")]),e._v(" "),a("Input",{staticStyle:{width:"190px"},attrs:{icon:"document",placeholder:"请输入文件名"},model:{value:e.csvFileName,callback:function(t){e.csvFileName=t},expression:"csvFileName"}})],1),e._v(" "),a("div",{staticClass:"margin-top-20"},[a("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.exportData(3)}}},[a("Icon",{attrs:{type:"ios-download-outline"}}),e._v(" 导出自定义数据")],1)],1)])])],1)],1)],1),e._v(" "),a("Row",{staticClass:"margin-top-10"},[a("Card",[a("h4",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"android-archive"}}),e._v("\n                导出表格数据到 .Xls 文件 (Excel)\n            ")],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"18"}},[a("Table",{ref:"tableExcel",attrs:{columns:e.excelColumns,height:"390px",data:e.table2excelData,size:"small"}})],1),e._v(" "),a("Col",{staticClass:"padding-left-10",attrs:{span:"6"}},[a("div",{staticClass:"margin-top-10 margin-left-10"},[a("span",[e._v("输入文件名：")]),e._v(" "),a("Input",{staticStyle:{width:"190px"},attrs:{icon:"document",placeholder:"请输入文件名"},model:{value:e.excelFileName,callback:function(t){e.excelFileName=t},expression:"excelFileName"}})],1),e._v(" "),a("div",{staticClass:"margin-left-10 margin-top-20"},[a("a",{staticStyle:{postion:"absolute",left:"-10px",top:"-10px",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}}),e._v(" "),a("Button",{attrs:{type:"primary",size:"large"},on:{click:e.exportExcel}},[e._v("下载表格数据")])],1)])],1)],1)],1)],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};t.default=o}});