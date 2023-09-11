function display(val){
    document.getElementById("result").value +=val;
    return val;
}
function calResult(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
    return y;
}
function valueScreen(){
    document.getElementById("result").value=""
}