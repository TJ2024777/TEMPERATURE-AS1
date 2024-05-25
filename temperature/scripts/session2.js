
function mult(num,num1){
   // let num=prompt("Enter a number:");
    console.log(num*num1);
}


mult(10,3);
mult(10,3);
mult(10,3);

function taxCalculation(){
    var product=prompt("Enter the product's name:");
    var price=prompt("Enter the price:");
    var qty=prompt("Enter the quantity:");
    const taxes= 1.00;

    var subtotal=price*qty;
    var total=subtotal*taxes;

    console.log(product);
    console.log(subtotal);
    console.log(total);
    
}

//Enter student information (name, grade101, grade102) and calculate and display the GPA  

function getGPA(){
    var name=prompt("Enter the name");
    var grade101=prompt("Enter the 101 grade");
    var grade102=prompt("Enter the 102 grade");
    var gpa=(grade101+grade102)/2;

    document.write("Name:"+name)
    document.write("Gpa:"+gpa)

    document.getElementById("Student List").
    innerHTML+=`<li> Name: ${name}
    GPA: ${gpa}</li>;`
} 


    
   
    


