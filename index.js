function changemode(){
    var mybody = document.body;
    var mybutton = document.getElementById(`dark`);
    var myborder = document.getElementsByClassName(`data`)[0];
    var myborderm = document.getElementsByClassName(`data`)[1];
    var mybordermy = document.getElementsByClassName(`data`)[2];
    var mybordermyb = document.getElementsByClassName(`data`)[3];
    var mybordermybo = document.getElementsByClassName(`data`)[4];
    var mybordermybor = document.getElementsByClassName(`data`)[5];
    var mybordermybord = document.getElementsByClassName(`data`)[6];
    var mybordermyborde = document.getElementsByClassName(`data`)[7];
    var mybordermyborder = document.getElementsByClassName(`data`)[8];
    var myborde = document.getElementsByClassName(`data`)[9];
    var mybord = document.getElementsByClassName(`data`)[10];
    var mybor = document.getElementsByClassName(`data`)[11];
    var mybo = document.getElementsByClassName(`data`)[12];
    var myb = document.getElementsByClassName(`data`)[13];
    var my = document.getElementsByClassName(`data`)[14];
    var m = document.getElementsByClassName(`data`)[15];
    var mmyborder = document.getElementsByClassName(`data`)[16];
    var myyborder = document.getElementsByClassName(`data`)[17];
    mybody.classList.toggle(`mydark`);
    mybutton.classList.toggle(`mybutton`);
    myborder.classList.toggle(`mydata`);
    myborderm.classList.toggle(`mydata`);
    mybordermy.classList.toggle(`mydata`);
    mybordermyb.classList.toggle(`mydata`);
    mybordermybo.classList.toggle(`mydata`);
    mybordermybor.classList.toggle(`mydata`);
    mybordermybord.classList.toggle(`mydata`);
    mybordermyborde.classList.toggle(`mydata`);
    mybordermyborder.classList.toggle(`mydata`);
    myborde.classList.toggle(`mydata`);
    mybord.classList.toggle(`mydata`);
    mybor.classList.toggle(`mydata`);
    mybo.classList.toggle(`mydata`);
    myb.classList.toggle(`mydata`);
    my.classList.toggle(`mydata`);
    m.classList.toggle(`mydata`);
    mmyborder.classList.toggle(`mydata`);
    myyborder.classList.toggle(`mydata`);
}

function clearscreen() {
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
}

function clearmyscreen() {
    document.getElementById("question").value = "";
}

function showme(value) {
    document.getElementById("question").value += value;
}

function solve() {
    var a = document.getElementById("question").value;
    var b = eval(a);
    document.getElementById("answer").value = b;
}