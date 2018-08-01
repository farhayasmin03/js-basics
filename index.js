
    //  console.log('hey hello world');
       
    // let name='farhana';
    // console.log(name);
    // const number=234;
    
    // console.log(number+2345);
    // let age=67;
    // let compare=true;
    // let lastName=null;
    // let person={
    //     firstname: 'farha',
    //     age:26,
    // };
    // console.log(person.firstname);
    // let listAnimal=['cat','dog'];
    //  listAnimal[3]=3;
    //  console.log(listAnimal.length);
    //  console.log(listAnimal);
    //  function square(numb){
    //     return numb*numb;
    //  }
    //  let number1=square(45);
    //  console.log(number1);
    
   
    function changeColor(){
        document.getElementById("myBody").style.color = "pink";
        alert("Color changed successfully!!");
    };

    function submitForm(){
         var name = document.getElementById("nameField").value;
         var city = document.getElementById("cityField").value;
        alert(name+" "+city);
    }

    function showTime(){
        var today = new Date();
        var d=today.getTime();

        alert(today.setTime());
        
       
    }
    function readableTime(){
        var convertion=new Date(1993, 6, 28, 14, 39, 7)
        
        alert(convertion.toDateString());
    }