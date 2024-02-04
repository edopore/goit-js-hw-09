const t=document.querySelectorAll("button"),e=document.querySelector("body");let l=null;t[0].addEventListener("click",(t=>{l=setInterval((()=>{e.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t[1].addEventListener("click",(()=>{clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.ff20c2ad.js.map
