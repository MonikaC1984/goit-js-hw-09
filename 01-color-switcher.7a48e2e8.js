!function(){const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let l=null;t.disabled=!0,e.addEventListener("click",(()=>{const d=()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};l=setInterval((()=>{console.log("to jest zmiana koloru:",d())}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(()=>{console.log("stop:",clearInterval(l)),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7a48e2e8.js.map
