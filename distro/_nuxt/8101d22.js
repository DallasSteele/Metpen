(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{385:function(e,t,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("3989eb74",content,!0,{sourceMap:!1})},461:function(e,t,n){"use strict";var r=n(2),c=n(92).find,d=n(144),o="find",v=!0;o in[]&&Array(1)[o]((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),d(o)},462:function(e,t,n){"use strict";n(385)},463:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".container[data-v-7ddfc3da]{padding:35px}.content[data-v-7ddfc3da]{padding:5px}.pricing-table td[data-v-7ddfc3da],.pricing-table th[data-v-7ddfc3da]{text-align:center}.btn-save[data-v-7ddfc3da]{background-color:#6c757d;border:none;border-radius:4px;color:#fff;padding:5px}",""]),r.locals={},e.exports=r},511:function(e,t,n){"use strict";n.r(t);n(46),n(91),n(461),n(17);var r={layout:"mitralay",name:"SetPricing",data:function(){return{services:[{id:1,name:"Home Cleaning",currentPrice:100,newPrice:100},{id:2,name:"Carpet Cleaning",currentPrice:150,newPrice:150},{id:3,name:"Pool Cleaning",currentPrice:200,newPrice:200},{id:4,name:"Lavatory Cleaning",currentPrice:120,newPrice:120}]}},methods:{savePrice:function(e){var t=this.services.find((function(t){return t.id===e}));console.log("Saving new price for service ID ".concat(e,": $").concat(t.newPrice))}}},c=(n(462),n(5)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._m(0),e._v(" "),t("div",{staticClass:"content"},[t("table",{staticClass:"table table-bordered pricing-table"},[e._m(1),e._v(" "),t("tbody",e._l(e.services,(function(n){return t("tr",{key:n.id},[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[e._v(e._s(n.currentPrice))]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:n.newPrice,expression:"service.newPrice"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:n.newPrice},on:{input:function(t){t.target.composing||e.$set(n,"newPrice",t.target.value)}}})]),e._v(" "),t("td",[t("button",{staticClass:"btn btn-sm btn-save",on:{click:function(t){return e.savePrice(n.id)}}},[t("i",{staticClass:"fas fa-save"}),e._v(" Save\n            ")])])])})),0)])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"navbar"},[e("h1",[this._v("Set Pricing")])])},function(){var e=this,t=e._self._c;return t("thead",{staticClass:"thead-light"},[t("tr",[t("th",[e._v("Service ID")]),e._v(" "),t("th",[e._v("Service Name")]),e._v(" "),t("th",[e._v("Current Price")]),e._v(" "),t("th",[e._v("New Price")]),e._v(" "),t("th",[e._v("Actions")])])])}],!1,null,"7ddfc3da",null);t.default=component.exports}}]);