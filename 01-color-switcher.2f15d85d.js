!function(){var t=document.querySelectorAll("button"),e=document.querySelector("body"),o=null;t[1].setAttribute("disabled",""),t[0].addEventListener("click",(function(){console.log(t[0].setAttribute("disabled","")),console.log(t[1].removeAttribute("disabled")),o=setInterval((function(){e.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t[1].addEventListener("click",(function(){console.log(t[1].setAttribute("disabled","")),console.log(t[0].removeAttribute("disabled")),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.2f15d85d.js.map
