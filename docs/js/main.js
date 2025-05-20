const i=document.querySelector(".js_listProducts"),p=document.querySelector(".js_btnFind"),f=document.querySelector(".js_inputFind");document.querySelector(".js_btnComprar");const o=document.querySelector(".js_listCart"),_=document.querySelector(".js_btnEmptyCart");let y="https://raw.githubusercontent.com/Adalab/resources/master/apis/products.json",n=[],r=[];function S(t){return`<li class="ulStyle__liStyle">
              <img class="ulStyle__img" src="${t.image}" alt="imagen">
              <h4 class="ulStyle__productName">${t.title}</h4>
              <p class="ulStyle__productPrice">${t.price}€</p>
              <button class="ulStyle__btnComprar js_btnComprar" id="${t.id}"> Comprar </button>
            </li>`}function u(t){return`<li class="ulStyle__liStyle">
              <img class="ulStyle__img" src="${t.image}" alt="imagen">
              <h4 class="ulStyle__productName">${t.title}</h4>
              <p class="ulStyle__productPrice">${t.price}€</p>
              <button class="ulStyle__btnEliminar js_btnComprar" id="${t.id}"> Eliminar </button>
            </li>`}function c(t){i.innerHTML="";for(const e of t)r.find(l=>l.id===e.id)!=null?i.innerHTML+=u(e):i.innerHTML+=S(e)}function d(){o.innerHTML="";for(const t of r)o.innerHTML+=u(t)}function C(t){t.preventDefault();const e=f.value,s=n.filter(l=>l.title.toLowerCase().includes(e.toLowerCase()));i.innerHTML="",c(s)}function m(t){const e=parseInt(t.target.id);if(!e)return;let s=n.find(a=>a.id===e),l=r.findIndex(a=>a.id===e);l===-1?r.push(s):r.splice(l,1),d(),c(n),localStorage.setItem("myCart",JSON.stringify(r))}function g(){r=[],o.innerHTML="",localStorage.removeItem("myCart"),c(n)}p.addEventListener("click",C);i.addEventListener("click",m);o.addEventListener("click",m);_.addEventListener("click",g);fetch(y).then(t=>t.json()).then(t=>{n=t,localStorage.setItem("Products",JSON.stringify(n)),c(n)});localStorage.getItem("myCart")!==null&&(r=JSON.parse(localStorage.getItem("myCart")),c(n),d());
//# sourceMappingURL=main.js.map
