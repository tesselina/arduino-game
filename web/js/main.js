/**
 * @author    Tesselina Späth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */
var main={greet:function(){document.getElementById("text_hello").innerHTML="Hello, "+document.getElementById("input_name").value+"!",document.getElementById("section_form").classList.add("hidden"),document.getElementById("section_welcome").classList.remove("hidden")},greetOnEnter:function(a){"Enter"!==a.code&&13!==a.keyCode||document.activeElement!==document.getElementById("input_name")||(a.preventDefault(),a.stopPropagation(),main.greet())},init:function(){document.getElementById("button_submit").addEventListener("click",main.greet),window.addEventListener("keydown",main.greetOnEnter)}};window.addEventListener("load",main.init);