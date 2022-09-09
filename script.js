var contain = document.createElement("div");
contain.setAttribute("class", "container ");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("size", "33");
input.setAttribute("class", "screen");
input.setAttribute("onkeypress","keypress");
contain.append(input);

var button12 = document.createElement("input");
button12.setAttribute("type", "button");
button12.setAttribute("value", "C");
button12.setAttribute("class", "clear");
button12.setAttribute("onClick", "clearScreen()");
contain.append(button12);

var breaker = document.createElement("br");
contain.append(breaker);

var keys = document.createElement("div");
keys.setAttribute("class", "keys");

var button1 = document.createElement("input");
button1.setAttribute("type", "button");
button1.setAttribute("value", "7");
button1.setAttribute("class", "button ");
button1.setAttribute("onClick", "display('7')");
keys.append(button1);

var button2 = document.createElement("input");
button2.setAttribute("type", "button");
button2.setAttribute("value", "8");
button2.setAttribute("class", "button");
button2.setAttribute("onClick", "display('8')");
keys.append(button2);

var button3 = document.createElement("input");
button3.setAttribute("type", "button");
button3.setAttribute("value", "9");
button3.setAttribute("class", "button");
button3.setAttribute("onClick", "display('9')");
keys.append(button3);

var button4 = document.createElement("input");
button4.setAttribute("type", "button");
button4.setAttribute("value", "/");
button4.setAttribute("class", "operator");
button4.setAttribute("onClick", "display('/')");
keys.append(button4);

var button5 = document.createElement("input");
button5.setAttribute("type", "button");
button5.setAttribute("value", "4");
button5.setAttribute("class", "button");
button5.setAttribute("onClick", "display('4')");
keys.append(button5);

var button6 = document.createElement("input");
button6.setAttribute("type", "button");
button6.setAttribute("value", "5");
button6.setAttribute("class", "button");
button6.setAttribute("onClick", "display('5')");
keys.append(button6);

var button7 = document.createElement("input");
button7.setAttribute("type", "button");
button7.setAttribute("value", "6");
button7.setAttribute("class", "button");
button7.setAttribute("onClick", "display('6')");
keys.append(button7);

var button8 = document.createElement("input");
button8.setAttribute("type", "button");
button8.setAttribute("value", "*");
button8.setAttribute("class", "operator");
button8.setAttribute("onClick", "display('*')");
keys.append(button8);

var button9 = document.createElement("input");
button9.setAttribute("type", "button");
button9.setAttribute("value", "1");
button9.setAttribute("class", "button");
button9.setAttribute("onClick", "display('1')");
keys.append(button9);

var button10 = document.createElement("input");
button10.setAttribute("type", "button");
button10.setAttribute("value", "2");
button10.setAttribute("class", "button");
button10.setAttribute("onClick", "display('2')");
keys.append(button10);

var button11 = document.createElement("input");
button11.setAttribute("type", "button");
button11.setAttribute("value", "3");
button11.setAttribute("class", "button");
button11.setAttribute("onClick", "display('3')");
keys.append(button11);

var button13 = document.createElement("input");
button13.setAttribute("type", "button");
button13.setAttribute("value", "-");
button13.setAttribute("class", "operator");
button13.setAttribute("onClick", "display('-')");
keys.append(button13);

var button14 = document.createElement("input");
button14.setAttribute("type", "button");
button14.setAttribute("value", "0");
button14.setAttribute("class", "button");
button14.setAttribute("onClick", "display('0')");
keys.append(button14);

var button15 = document.createElement("input");
button15.setAttribute("type", "button");
button15.setAttribute("value", ".");
button15.setAttribute("class", "button");
button15.setAttribute("onClick", "display('.')");
keys.append(button15);

var button16 = document.createElement("input");
button16.setAttribute("type", "button");
button16.setAttribute("id", "equal");
button16.setAttribute("value", "=");
button16.setAttribute("class", "button");
button16.setAttribute("onClick", "solve()");
keys.append(button16);

var button17 = document.createElement("input");
button17.setAttribute("type", "button");
button17.setAttribute("value", "+");
button17.setAttribute("class", "operator");
button17.setAttribute("onClick", "display('+')");
keys.append(button17);

contain.append(keys);
document.body.append(contain);
document.body.addEventListener("keypress", keypress);

function display(val) {
  document.getElementById("result").value += val;
  return val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function keypress(e) {
  let res = document.getElementById("result");
  if (
    (e.keyCode < 48 || e.keyCode > 57)) {
      e.preventDefault();
    res.innerText += e.key;
    alert("Only Number are Allowed")
  } 
}
