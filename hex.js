'use-strict'
import { reuse } from "./app.js";
import { reuseadd } from "./app.js";
import { reusemode } from "./app.js";


//vars for hex button
const btn2 = document.getElementById("bgbw");
const chng = document.querySelector(".changebg");
var clrhex = ["#FFDEDE","#73A9AD", "#FBB454"];
const ram = () => Math.floor(Math.random() * clrhex.length);

var newfinal = new reuse(clrhex,ram,btn2);
newfinal.button();

//vars for adding hex
const addbtn = document.getElementById("hexbtn");
const coloriptid = "hxipt";

reuseadd(coloriptid,clrhex,addbtn);

//light mode modified arguments
const lightmode = document.getElementById("lightmode");
const colourofli = "White";

var modes = new reusemode(lightmode,colourofli);
modes.buttonmode();  

