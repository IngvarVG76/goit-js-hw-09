const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");d.disabled=!0,e.addEventListener("click",(()=>{e.disabled=!0,d.disabled=!1,timerId=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3)})),d.addEventListener("click",(()=>{clearInterval(timerId),e.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.1dba80e3.js.map
