var box=document.getElementById("display")
function math(val){
    box.value+=val;
}
function clr(val){
    document.getElementById("display").value =val;
}

function answer(){
    val=box.value;
    val=eval(val);
    box.value=val;

}