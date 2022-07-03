'use-strict'

//Vars for clickme button
const btn = document.getElementById("bgbtn");
const chng = document.querySelector(".changebg");
var clrarr = ["red","green", "blue"];
const ram = () => Math.floor(Math.random() * clrarr.length);


//Class for resuing action listner with arrow function
export class reuse {
    constructor(array,fun,butn){
        this.array = array;
        this.fun = fun;
        this.butn = butn;
    }
    button(){
        this.butn.addEventListener("click", () => {
            const bty = this.fun();
            console.log(bty);
            document.body.style.backgroundColor = this.array[bty]
        })
    } 
}

//calling for clickme
var final = new reuse(clrarr,ram,btn)
final.button();



//vars for adding colors
const addbtn = document.getElementById("normalbtn");
const coloriptid1 = "normalipt"

//reuse code for adding clrs
export const reuseadd = (coloriptid,arr,clrbtnid) => {
    clrbtnid.addEventListener("click", ()=> {
    var normalclr = document.getElementById(coloriptid).value;
     if (normalclr !=''){
            console.log(normalclr);
            arr.push(normalclr);
            console.log(arr);
     }
     else {
        alert("Please enter the correct value")
     }

    
})
}

reuseadd(coloriptid1,clrarr,addbtn);


//code for darkmode
const darkmode = document.getElementById("darkmode");
const colourof = "Black";

export class reusemode {
    constructor(butn,modeclr){
    
        this.modeclr = modeclr;
        this.butn = butn;
    }
    buttonmode(){
        this.butn.addEventListener("click", () => {
            document.body.style.backgroundColor = this.modeclr;
            
        })
    } 
}

var modes = new reusemode(darkmode,colourof)
modes.buttonmode();



