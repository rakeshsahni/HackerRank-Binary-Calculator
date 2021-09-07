const res = document.getElementById("res");

const zero = document.getElementById("btn0");

const one = document.getElementById("btn1");

const clear = document.getElementById("btnClr");

const equal = document.getElementById("btnEql");

const sum = document.getElementById("btnSum");

const sub = document.getElementById("btnSub");

const mul = document.getElementById("btnMul");

const div = document.getElementById("btnDiv");

const buttons = document.getElementById('btns')

let pre = "";
let curr = "";
let ope = "";
clear.onclick = () => {
    res.innerHTML = "";
    curr = "";
    pre = "";
    ope = "";
}

zero.onclick = () => {
    curr = curr + "0";
    res.innerHTML = pre + ope + curr;
}

one.onclick = () => {
    curr = curr + "1";
    res.innerHTML = pre + ope + curr;
}

equal.onclick = () => {
    if(pre.length >0 && curr.length > 0){
        if(ope == "+") curr = (parseInt(pre,2) + parseInt(curr,2)).toString(2);
        else if(ope === "-") curr = (parseInt(pre,2) - parseInt(curr,2)).toString(2);
        else if(ope === "*") curr = (parseInt(pre,2) * parseInt(curr,2)).toString(2);
        else if(ope === "/") curr = (parseInt(parseInt(pre,2) / parseInt(curr,2))).toString(2);
        pre = "";
        ope = "";
    }
    res.innerHTML = pre + ope + curr;
}

sum.onclick = () => {
    if(curr.length > 0 && pre === ""){
        pre = curr;
        ope = "+";
        curr = "";
    }
    res.innerHTML = pre + ope + curr;
}


sub.onclick = () => {
    if(curr.length > 0 && pre === ""){
        pre = curr;
        ope = "-";
        curr = "";
    }
    res.innerHTML = pre + ope + curr;
}

mul.onclick = () => {
    if(curr.length > 0 && pre === ""){
        pre = curr;
        ope = "*";
        curr = "";
    }
    res.innerHTML = pre + ope + curr;
}

div.onclick = () => {
    if(curr.length > 0 && pre === ""){
        pre = curr;
        ope = "/";
        curr = "";
    }
    res.innerHTML = pre + ope + curr;
}
