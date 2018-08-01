function showHiddeen(){
    var loginpage=document.getElementsByClassName("message")
    var hiddenElement=document.getElementsByClassName("registration-page");
    for(var i=0;i<hiddenElement.length;i++){
        if(loginpage.checked){
            hiddenElement[i].style.display="block";

        }
        else{
            hiddenElement[i].style.display="none";

        }

    }
}
