const e=document.querySelectorAll("button"),t=document.querySelector("body");let l=null;e[1].setAttribute("disabled",""),e[0].addEventListener("click",(()=>{console.log(e[0].setAttribute("disabled","")),console.log(e[1].removeAttribute("disabled")),l=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e[1].addEventListener("click",(()=>{console.log(e[1].setAttribute("disabled","")),console.log(e[0].removeAttribute("disabled")),clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.41313573.js.map