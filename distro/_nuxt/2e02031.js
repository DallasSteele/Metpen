(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5],{337:function(t,n,e){var content=e(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("0ecdb9c6",content,!0,{sourceMap:!1})},338:function(t,n,e){"use strict";e(337)},339:function(t,n,e){var r=e(21)((function(i){return i[1]}));r.push([t.i,".service-card{border:1px solid #ddd;border-radius:.25rem;margin-bottom:1rem;padding:1rem}.price{font-size:1.25rem;font-weight:700}",""]),r.locals={},t.exports=r},340:function(t,n,e){"use strict";e.r(n);e(36),e(53),e(46),e(228);var r={props:{name:String,description:String,price:Number,image:String},methods:{handleAddToCart:function(){var t={name:this.name,description:this.description,price:this.price,image:this.image};this.$emit("add-to-cart",t)},handleBuyNow:function(){var t={name:this.name,description:this.description,price:this.price,image:this.image};this.$emit("buy-now",t)}}},o=(e(338),e(5)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"service-card"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("img",{staticClass:"rounded",staticStyle:{width:"95px",height:"95px"},attrs:{src:t.image,alt:t.name}})]),t._v(" "),n("div",{staticClass:"col-8"},[n("h5",[t._v(t._s(t.name))]),t._v(" "),n("p",[t._v(t._s(t.description))])]),t._v(" "),n("div",{staticClass:"col-2 text-right"},[n("p",{staticClass:"price font-weight-bold"},[t._v("Rp. "+t._s(t.price))])]),t._v(" "),n("button",{staticClass:"btn btn-outline-success",on:{click:t.handleAddToCart}},[t._v("Add to Cart")]),t._v(" "),n("button",{staticClass:"btn btn-outline-danger mt-1",on:{click:t.handleBuyNow}},[t._v("Buy Now")])])])}),[],!1,null,null,null);n.default=component.exports},368:function(t,n,e){var content=e(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("ab6608de",content,!0,{sourceMap:!1})},427:function(t,n,e){"use strict";e(368)},428:function(t,n,e){var r=e(21)((function(i){return i[1]}));r.push([t.i,".custom-image{height:200px;width:200px}.service-card{margin-bottom:1rem}button{align-items:center;background-color:#1db21f;border:none;border-radius:1rem;color:#fff;cursor:pointer;display:flex;font-weight:700;height:37px;justify-content:center;margin-bottom:30px;width:95.02px}button .span-mother{display:flex;overflow:hidden}button:hover .span-mother{position:absolute}button:hover .span-mother span{transform:translateY(1.4em)}button .span-mother span:first-child{transition:.2s}button .span-mother span:nth-child(2){transition:.3s}button .span-mother span:nth-child(3){transition:.4s}button .span-mother span:nth-child(4){transition:.5s}button .span-mother span:nth-child(5){transition:.6s}button .span-mother span:nth-child(6){transition:.7s}button .span-mother span:nth-child(7){transition:.8s}button .span-mother2{display:flex;overflow:hidden;position:absolute}button .span-mother2 span{transform:translateY(-1.4em)}button:hover .span-mother2 span{transform:translateY(0)}button .span-mother2 span{transition:.2s}button .span-mother2 span:nth-child(2){transition:.3s}button .span-mother2 span:nth-child(3){transition:.4s}button .span-mother2 span:nth-child(4){transition:.5s}button .span-mother2 span:nth-child(5){transition:.6s}button .span-mother2 span:nth-child(6){transition:.7s}button .span-mother2 span:nth-child(7){transition:.8s}",""]),r.locals={},t.exports=r},497:function(t,n,e){"use strict";e.r(n);e(36),e(53),e(46),e(47),e(17);var r={components:{ServiceCard:e(340).default},data:function(){return{services:[{name:"Mega Base Preset ",description:"Pembersihan Karpet ukuran penyesuaian, pembersihan basic karpet.",price:45e3,image:"/images/index/carpet/karpetkecil.jpg"},{name:"Mega Foam Clean",description:"Pembersihan Karpet menggunakan foam.",price:8e4,image:"/images/index/carpet/karpetbesar.jpg"}],cart:[]}},computed:{totalPrice:function(){return this.cart.reduce((function(t,n){return t+n.price}),0)}},methods:{addToCart:function(t){this.cart.push(t),localStorage.setItem("cart",JSON.stringify(this.cart)),alert("Added to cart")},buyNow:function(t){this.addToCart(t),this.$router.push("/orderpage")}},mounted:function(){var t=JSON.parse(localStorage.getItem("cart"));t&&(this.cart=t)}},o=(e(427),e(5)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container mt-5"},[n("hr"),t._v(" "),t._m(0),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),n("hr"),t._v(" "),t._l(t.services,(function(e,r){return n("ServiceCard",{key:r,attrs:{name:e.name,description:e.description,price:e.price,image:e.image},on:{"add-to-cart":t.addToCart,"buy-now":t.buyNow}})})),t._v(" "),t.cart.length?n("div",{staticClass:"mt-5"},[n("h2",[t._v("Cart")]),t._v(" "),n("ul",{staticClass:"list-group"},t._l(t.cart,(function(e,r){return n("li",{key:r,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v("\n          "+t._s(e.name)+" - Rp. "+t._s(e.price)+" "),n("br"),t._v(" "+t._s(e.description)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"mt-3 mb-5"},[n("h3",[t._v("Total: Rp. "+t._s(t.totalPrice))]),t._v(" "),t._m(2)])]):t._e()],2)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"mx-4"},[n("a",{staticClass:"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container",attrs:{href:"/user"}},[t._v("Home ")]),t._v(" "),n("a",{staticClass:"text-muted text-decoration-none",attrs:{href:"#"}},[t._v(" >> ")]),t._v(" "),n("a",{staticClass:"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container",attrs:{href:"/carpet-laundry/carpet-page"}},[t._v(" Carpet Laundry")]),t._v(" "),n("a",{staticClass:"text-muted text-decoration-none",attrs:{href:"#"}},[t._v(" >> ")]),t._v(" "),n("a",{staticClass:"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container",attrs:{href:"#"}},[t._v(" MegaKarpet Wash")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("h1",[t._v("MegaKarpet Wash")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("Jl. Sudirman No.88, Jakarta Timur, DKI Jakarta 60271")]),t._v(" "),n("p",[t._v("MegaKarpet Wash adalah solusi terbaik untuk semua kebutuhan laundry karpet Anda. Kami menyediakan layanan penjemputan dan pengantaran karpet, sehingga memudahkan Anda dalam menjaga kebersihan karpet tanpa repot. Dengan tim profesional dan peralatan mutakhir, kami siap melayani Anda dengan cepat dan efisien.")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("Rating")])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("img",{staticClass:"custom-image rounded mx-auto d-block",staticStyle:{width:"200px",height:"200px"},attrs:{src:"/images/index/carpet/carpet3.jpg",alt:"Nama Perusahaan"}})])])},function(){var t=this,n=t._self._c;return n("a",{staticClass:"link-underline-opacity-0",attrs:{href:"/orderpage"}},[n("button",[n("span",{staticClass:"span-mother"},[n("span",[t._v("P")]),t._v(" "),n("span",[t._v("a")]),t._v(" "),n("span",[t._v("y")]),t._v(" "),n("span",[t._v("m")]),t._v(" "),n("span",[t._v("e")]),t._v(" "),n("span",[t._v("n")]),t._v(" "),n("span",[t._v("t")])]),t._v(" "),n("span",{staticClass:"span-mother2"},[n("span",[t._v("P")]),t._v(" "),n("span",[t._v("a")]),t._v(" "),n("span",[t._v("y")]),t._v(" "),n("span",[t._v("m")]),t._v(" "),n("span",[t._v("e")]),t._v(" "),n("span",[t._v("n")]),t._v(" "),n("span",[t._v("t")])])])])}],!1,null,null,null);n.default=component.exports}}]);