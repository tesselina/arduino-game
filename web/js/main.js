/**
 * @author    Tesselina Späth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */
function print(){console.log("test in main ",name,dist)}var v_timer=setInterval(print,200),dist;console.log("i love you fucker",name),$.get("/data.json",function(a){a&&(dist=a,console.log("jquery getter",a))});