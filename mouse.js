// ------------Alt-Key------------
var d1 = document.createElement("div")
d1.innerHTML = "Alt - key"
d1.id= "div1"
document.body.appendChild(d1)
d1.style.margin = "10px"
d1.style.border = "1px solid blue"

d1.addEventListener('click', altt,true);
function altt(e) {
  e.preventDefault()
  d1.textContent = `The alt key is pressed: ${e.altKey}`;
  console.log(e)
}

// -------Button-----------
var d2 = document.createElement("div")
d2.id= "div2"
d2.innerHTML = "Button"
document.body.appendChild(d2)
d2.style.margin = "10px"
d2.style.border = "1px solid blue"

var but = document.createElement("button")
but.id="but1"
but.innerText = "Click me"
d2.appendChild(but)
but.addEventListener('mouseup', buttonn);

function buttonn(e) {
  console.log(e)
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        d1.textContent = 'Left button clicked.';
        break;
      case 1:
        d1.textContent = 'Middle button clicked.';
        break;
      case 2:
        d1.textContent = 'Right button clicked.';
        break;
    }
  }
}

// --------------buttons---------
var d3 = document.createElement("div")
d3.id= "div3"
d3.innerHTML = "Buttons"
document.body.appendChild(d3)
d3.style.margin = "10px"
d3.style.border = "1px solid blue"
// let log = document.createTextNode('?');
function _buttons(e) {
    d3.textContent = `${e.buttons}`;
}
d3.addEventListener('mouseup', _buttons);
d3.addEventListener('mousedown', _buttons);

// --------------cancelbubble-----------
var d4 = document.createElement("div")
d4.id= "div4"
document.body.appendChild(d4)
d4.style.margin = "10px"
d4.style.border = "1px solid blue"
d4.textContent = "Outer"

var d41 = document.createElement("div")
d41.id= "div41"
d4.appendChild(d41)
d41.style.margin = "10px"
d41.style.border = "1px solid blue"
d41.textContent = "Inner"

d41.addEventListener("click",function(e1){
  console.log(e.eventPhase)
  e1.cancelBubble = true
  console.log("2.")
})
d41.addEventListener("click", (e) =>{
  // e.cancelBubble = true
  console.log("3")
})
d4.addEventListener("click",function(e){
  // e.cancelBubble = true
  console.log("1")
})

// ---------- Cancelable
var d5 = document.createElement("div")
d5.innerHTML  = "Cancelable"
d5.id= "div4"
document.body.appendChild(d5)
d5.style.margin = "10px"
d5.style.border = "1px solid blue"
d5.addEventListener("click",function(e){
  this.innerHTML = e.cancelable
})

// ------------ clientx and clienty
// var d6 = document.createElement("div")
// d6.innerHTML  = "ClientX and ClientY"
// d6.id= "div4"
// d6.style.height = "200px"
// d6.style.width = "300px"
// document.body.appendChild(d6)
// d6.style.margin = "10px"
// d6.style.border = "1px solid blue"

// d6.addEventListener("click",function(e){
//   this.innerHTML = "ClientX: "+e.clientX+" ClientY: "+e.clientY
// })

// -------Ctrlkey
var d7 = document.createElement("div")
d7.innerHTML = "Ctrl - key"
d7.id= "div7"
document.body.appendChild(d7)
d7.style.margin = "10px"
d7.style.border = "1px solid blue"

d7.addEventListener('click', ctrll);
function ctrll(e) {
  d7.textContent = `The ctrl key is pressed: ${e.ctrlKey}`
}

// -----------Current Target
var d8 = document.createElement("div")
d8.innerHTML = "CurrentTarget"
d8.id= "div8"
document.body.appendChild(d8)
d8.style.margin = "10px"
d8.style.border = "1px solid blue"

d8.addEventListener('click', currTar);
function currTar(e) {
  // e.preventDefault()
  d8.textContent = `The Current Target: ${e.currentTarget}`
  console.log(e.defaultPrevented)
}

// ----------Default Prevented
var d9 = document.createElement("div")
d9.innerHTML = "Default Prevented"
d9.id= "div9"
document.body.appendChild(d9)
d9.style.margin = "10px"
d9.style.border = "1px solid blue"

d9.addEventListener('click', currTar);
function currTar(e) {
  e.preventDefault()
  d9.textContent = `The preventDefault is used: ${e.defaultPrevented}`
}

// ---------Detail
var d10 = document.createElement("div")
d10.innerHTML = "Details"
d10.id= "div10"
document.body.appendChild(d10)
d10.style.margin = "10px"
d10.style.border = "1px solid blue"

d10.addEventListener("click", det);
function det(e) {
  d10.textContent = `The detail : ${e.detail}`
}
// ---------EventPhase
var d11 = document.createElement("div")
d11.innerHTML = "EventPhase-Outside"
d11.id= "div11"
document.body.appendChild(d11)
d11.style.margin = "10px"
d11.style.border = "1px solid blue"

var d111 = document.createElement("div")
d111.innerHTML = "EventPhase-Inside"
d111.id= "div11"
d11.appendChild(d111)
d111.style.margin = "10px"
d111.style.border = "1px solid blue"

d111.addEventListener("click",function(e1){
  console.log(e1.eventPhase)
  // e1.cancelBubble = true
})
d11.addEventListener("click",function(e){
  console.log(e.eventPhase)
  // e.cancelBubble = true
})

// ----------fromElement 
var d12 = document.createElement("div")
d12.innerHTML = "FromELement"
d12.id= "div12"
document.body.appendChild(d12)
d12.style.margin = "10px"
d12.style.border = "1px solid blue"

d12.addEventListener("click", fromEle);
function fromEle(e) {
  d12.textContent = `The fromElement : ${e.fromELement}`
}
// --------istrusted
var d13 = document.createElement("div")
d13.innerHTML = "IsTrusted"
d13.id= "div13"
document.body.appendChild(d13)
d13.style.margin = "10px"
d13.style.border = "1px solid blue"

var bt1 = document.createElement("button")
bt1.id = "bt1"
bt1.innerHTML = "Trusted"
d13.appendChild(bt1)

var bt2 = document.createElement("button")
bt2.id = "bt1"
bt2.innerHTML = "NotTrusted"
d13.appendChild(bt2)

bt1.addEventListener("click",function(e){
  d13.innerHTML = "istrusted: "+ e.isTrusted
})
bt2.addEventListener("click",fc)
function fc(){
  bt1.click()
}

// --------metaKey

var d14 = document.createElement("div")
d14.innerHTML = "Meta - key"
d14.id= "div14"
document.body.appendChild(d14)
d14.style.margin = "10px"
d14.style.border = "1px solid blue"

d14.addEventListener('click', metaa);
function metaa(e) {
  d14.textContent = `The meta key is pressed: ${e.metaKey}`
}

// ---------Related target
var d15 = document.createElement("div")
d15.innerHTML = "Related target"
d15.id= "div15"
document.body.appendChild(d15)
d15.style.margin = "10px"
d15.style.border = "1px solid blue"

var d151 = document.createElement("div")
d151.style.height = "50px"
d151.style.width = "50px"
d151.style.margin = "30px"
d151.style.border = "1px solid blue"
d151.style.backgroundColor = "blue"
d151.id= "div151"
d15.appendChild(d151)

var d152 = document.createElement("div")
d152.style.height = "50px"
d152.style.width = "50px"
d152.style.margin = "30px"
d152.style.border = "1px solid red"
d152.style.backgroundColor = "red"
d152.id= "div152"
d15.appendChild(d152)

var p2 = document.createElement("p")
p2.id = "p2"
d15.appendChild(p2)

d151.addEventListener("mouseover",overr)
d152.addEventListener("mouseover",overr)
function overr(e){
  p2.innerText = "This ele: "+ e.target.id+" Related target: "+e.relatedTarget.id
}

function outt(e){
  p2.innerText = "This ele: "+ e.target.id+" Related target: "+e.relatedTarget.id
}

// -----------shiftkey
var d16 = document.createElement("div")
d16.innerHTML = "Shift - key"
d16.id= "div16"
document.body.appendChild(d16)
d16.style.margin = "10px"
d16.style.border = "1px solid blue"

d16.addEventListener('click', shiftt);
function shiftt(e) {
  d16.textContent = `The shift key is pressed: ${e.shiftKey}`
}



// -------ScrollEvent is uncancelable
window.addEventListener("scroll", (e) => {
  e.preventDefault()
  console.log("Scrolled")
  console.log(e)
})

