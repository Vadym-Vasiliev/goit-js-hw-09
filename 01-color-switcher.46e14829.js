!function(){var t={dataStart:document.querySelector("[data-start]"),dataStop:document.querySelector("[data-stop]"),bodyEl:document.body},a=null;function e(t,a){t.setAttribute("disabled",!0),a.removeAttribute("disabled")}t.dataStart.addEventListener("click",(function(d){a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3),e(t.dataStart,t.dataStop)})),t.dataStop.addEventListener("click",(function(){clearInterval(a),e(t.dataStop,t.dataStart)})),t.dataStop.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.46e14829.js.map