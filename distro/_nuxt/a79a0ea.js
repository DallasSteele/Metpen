(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(t,r,e){var content=e(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("47cb434d",content,!0,{sourceMap:!1})},409:function(t,r,e){"use strict";e(359)},410:function(t,r,e){var n=e(21)((function(i){return i[1]}));n.push([t.i,'body[data-v-5df9bafc]{background-color:#f8f9fa;font-family:"Arial",sans-serif}.content[data-v-5df9bafc]{padding:20px}.navbar[data-v-5df9bafc]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.navbar h1[data-v-5df9bafc]{font-size:24px;font-weight:700}.card[data-v-5df9bafc]{margin-bottom:20px}',""]),n.locals={},t.exports=n},489:function(t,r,e){"use strict";e.r(r);var n={name:"platformPerformance",layout:"adminlay",methods:{renderUserActivityChart:function(){var t=document.getElementById("userActivityChart").getContext("2d");new Chart(t,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"User Activity",data:[65,59,80,81,56,55,40],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})},renderPlatformPerformanceChart:function(){var t=document.getElementById("platformPerformanceChart").getContext("2d");new Chart(t,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"Platform Performance",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}}},o=(e(409),e(5)),component=Object(o.a)(n,(function(){var t=this,r=t._self._c;return r("div",[r("AdminHeader"),t._v(" "),t._m(0),t._v(" "),r("AdminFooter")],1)}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"content"},[r("div",{staticClass:"navbar"},[r("h1",[t._v("Platform Performance")])]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("User Activity")]),t._v(" "),r("canvas",{attrs:{id:"userActivityChart"}})])]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Platform Performance")]),t._v(" "),r("canvas",{attrs:{id:"platformPerformanceChart"}})])])])}],!1,null,"5df9bafc",null);r.default=component.exports}}]);