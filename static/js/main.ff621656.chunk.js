(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,function(e,t,i){e.exports={modalContainer:"Modal_modalContainer__3k8Wf",modalWrapper:"Modal_modalWrapper__3PO6H",imgContainer:"Modal_imgContainer__unTjS",sizes:"Modal_sizes__QPziU",closeBtn:"Modal_closeBtn__35uxr"}},function(e,t,i){e.exports={header:"Header_header__1Qpw6",pageTitle:"Header_pageTitle__ooh-_",description:"Header_description__2DChh",imagesContainer:"Header_imagesContainer__wzoJb",firstImage:"Header_firstImage__3_f6C",secondImage:"Header_secondImage__2kqSq"}},,function(e,t,i){e.exports={productContainer:"Product_productContainer__2PXAA",imgContainer:"Product_imgContainer__2qLx2"}},function(e,t,i){e.exports={cartItemContainer:"CartItem_cartItemContainer__3RPiK",imgContainer:"CartItem_imgContainer__3vT_i",removeButton:"CartItem_removeButton__nBnkU"}},function(e,t,i){e.exports={cartContainer:"Cart_cartContainer__2n_6c",buttonContainer:"Cart_buttonContainer__36Sak",addItem:"Cart_addItem__GghWj"}},,,,,,,function(e,t,i){e.exports={productListContainer:"ProductList_productListContainer__1Zy_T"}},function(e){e.exports=JSON.parse('{"products":[{"id":1,"image":"https://i.pinimg.com/564x/1b/ee/59/1bee594b2d123b899a9542d2881d8f24.jpg","title":"Clothing 1","description":"Id sit dolor aute aute.Labore mollit dolor eu exercitation id.","availableSizes":["X","L","XL","XXL"],"price":28.6},{"id":2,"image":"https://i.pinimg.com/564x/b9/99/c2/b999c238bd20b8e1249bea530821981a.jpg","title":"Clothing 2","description":"Id sit dolor aute aute.Labore mollit dolor eu exercitation id.","availableSizes":["L","XL","XXL"],"price":19},{"id":3,"image":"https://i.pinimg.com/564x/30/83/8a/30838ade3035b634a07f8ed12a178b9b.jpg","title":"Clothing 3","description":"Id sit dolor aute aute.Labore mollit dolor eu exercitation id.","availableSizes":["X","L","XXL"],"price":15},{"id":4,"image":"https://i.pinimg.com/564x/97/6e/46/976e46ac9b0f6ce3802146d8c6843adf.jpg","title":"Clothing 4","description":"Id sit dolor aute aute.Labore mollit dolor eu exercitation id.","availableSizes":["X","L","XL","XXL"],"price":101},{"id":5,"image":"https://i.pinimg.com/564x/81/e0/21/81e021a1c9a5210980b09286c348dee6.jpg","title":"Clothing 5","description":"Id sit dolor aute aute.Labore mollit dolor eu exercitation id.","availableSizes":["X","L","XL"],"price":19.7},{"id":6,"image":"https://i.pinimg.com/564x/37/d6/c5/37d6c5e60592f3b2a472fee9191c5931.jpg","title":"Clothing 6","description":"Id sit dolor aute aute.Labore mollit dolor eu exercitation id.","availableSizes":["X","L","XL","XXL"],"price":106.5}]}')},function(e,t,i){e.exports={navContainer:"Nav_navContainer__16dZC"}},function(e,t,i){e.exports={container:"PrincipalPage_container__2LQwa"}},,,,,function(e,t,i){},,,,,,function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(12),c=i.n(n),r=(i(22),i(9)),o=i(4),s=i(6),d=i.n(s),l=i(0),m=function(e){var t=e.image,i=e.altImage,a=e.price,n=e.quantity,c=e.itemName,r=e.removeItem;return Object(l.jsxs)("div",{className:d.a.cartItemContainer,children:[Object(l.jsx)("div",{className:d.a.imgContainer,children:Object(l.jsx)("img",{src:t,alt:i})}),Object(l.jsxs)("p",{children:[c,Object(l.jsx)("br",{}),"$",a," x ",n]}),Object(l.jsx)("button",{className:d.a.removeButton,onClick:r,children:"REMOVE"})]})},u=i(7),j=i.n(u),p=i(13),b=i.n(p),h=function(e){var t=e.cartProducts,i=e.onClick,a=e.totalPrice,n=e.removeItem;return Object(l.jsx)(b.a,{right:!0,children:Object(l.jsxs)("div",{className:j.a.cartContainer,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:j.a.buttonContainer,children:Object(l.jsx)("button",{onClick:i,children:"X"})}),Object(l.jsx)("h1",{children:"Cart:"}),t.length>0?t.map((function(e){return Object(l.jsx)(m,{image:e.image,altImage:e.title,itemName:e.title,price:e.price,quantity:e.count,removeItem:function(){return n(e)}},e.id)})):Object(l.jsx)("div",{className:j.a.addItem,children:"Add items!"})]}),Object(l.jsxs)("h3",{children:["Total: ",a]})]})})},g=i(2),x=i.n(g),O=function(e){var t=e.product,i=e.closeModal;e.addToCart;return Object(l.jsxs)("div",{className:x.a.modalContainer,children:[Object(l.jsx)("button",{className:x.a.closeBtn,onClick:i,children:"Close"}),Object(l.jsxs)("div",{className:x.a.modalWrapper,children:[Object(l.jsx)("div",{className:x.a.imgContainer,children:Object(l.jsx)("img",{src:t.image,alt:t.title})}),Object(l.jsxs)("div",{className:x.a.productContainer,children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("p",{children:t.description}),Object(l.jsxs)("p",{children:["Price: $",t.price]}),Object(l.jsx)("div",{className:x.a.sizes,children:t.availableSizes&&t.availableSizes.map((function(e){return Object(l.jsx)("p",{children:e})}))})]})]})]})},_=i(14),C=i.n(_),f=i(15),v=i(5),I=i.n(v),L=function(e){var t=e.image,i=e.imgAlt,a=e.description,n=e.price,c=e.onClick,r=e.showModal;return Object(l.jsxs)("article",{className:I.a.productContainer,children:[Object(l.jsx)("div",{className:I.a.imgContainer,children:Object(l.jsx)("img",{src:t,alt:i,onClick:r})}),Object(l.jsx)("p",{className:I.a.description,children:a}),Object(l.jsxs)("p",{className:I.a.price,children:["$",n]}),Object(l.jsx)("button",{onClick:c,children:"BUY"})]})},N=function(e){var t=e.addToCart,i=Object(a.useState)(null),n=Object(o.a)(i,2),c=n[0],r=n[1],s=Object(a.useState)(!1),d=Object(o.a)(s,2),m=d[0],u=d[1];return Object(l.jsxs)("div",{className:C.a.productListContainer,children:[f.products.map((function(e){return Object(l.jsx)(L,{image:e.image,description:e.description,price:e.price,showModal:function(){return function(e){r(e),u(!0)}(e)},onClick:function(){return t(e)},alt:e.title},e.id)})),m&&Object(l.jsx)(O,{product:c,closeModal:function(){return u(!1)}})]})},k=i(3),X=i.n(k),S=i.p+"static/media/headerimage-1.29223154.jpg",y=i.p+"static/media/headerimage-2.426fddee.jpg",P=function(){return Object(l.jsxs)("header",{className:X.a.header,children:[Object(l.jsxs)("div",{className:X.a.pageTitle,children:[Object(l.jsx)("h1",{children:"Shopping"}),Object(l.jsx)("p",{className:X.a.description,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})]}),Object(l.jsxs)("div",{className:X.a.imagesContainer,children:[Object(l.jsx)("div",{className:X.a.firstImage,children:Object(l.jsx)("img",{src:S,alt:"first  header"})}),Object(l.jsx)("div",{className:X.a.secondImage,children:Object(l.jsx)("img",{src:y,alt:"second header"})})]})]})},T=i(16),w=i.n(T),z=function(e){var t=e.onClick,i=e.cartItems;return Object(l.jsxs)("nav",{className:w.a.navContainer,children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HOME"}),Object(l.jsx)("li",{children:"ABOUT-US"}),Object(l.jsx)("li",{children:"LATEST"})]}),Object(l.jsxs)("button",{onClick:t,children:["CART (",i,")"]})]})},M=i(17),B=i.n(M),A=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),i=t[0],n=t[1],c=Object(a.useState)(!1),s=Object(o.a)(c,2),d=s[0],m=s[1],u=i.reduce((function(e,t){return e+t.price*t.count}),0).toFixed(2);return Object(l.jsxs)("div",{className:B.a.container,children:[Object(l.jsx)(z,{onClick:function(){return m(!d)},cartItems:i.length}),Object(l.jsx)(P,{}),Object(l.jsx)(N,{addToCart:function(e){var t=i.slice(),a=!1;t.forEach((function(t){t.id===e.id&&(a=!0,t.count++)})),a||t.push(Object(r.a)(Object(r.a)({},e),{},{count:1})),n(t),m(!0)}}),d&&Object(l.jsx)(h,{cartProducts:i,onClick:function(){return m(!1)},totalPrice:u,removeItem:function(e){var t=i.slice();t.filter((function(i){i.id===e.id&&(i.count=i.count-1,i.count<1&&t.pop(e))})),n(t)}})]})},H=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(A,{})})};c.a.render(Object(l.jsx)(H,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.ff621656.chunk.js.map