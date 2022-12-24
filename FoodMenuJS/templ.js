var total=new Number(0);
function add(id){
    let a=document.getElementById(id).innerHTML;
    let b=a.split(" ");
    total+=Number(b[1]);
    document.getElementById("total").innerHTML="RS "+total;
}
function sub(id){
    let a=document.getElementById(id).innerHTML;
    b=a.split(" ");
    if(total>0){
        total-=Number(b[1]);  
    }
    document.getElementById("total").innerHTML="RS "+total;
}




var total1=new Number(0)
function add1(id){
    let a=document.getElementById(id).innerHTML
    let b=a.split(" ")
    total1+=Number(b[1])
    document.getElementById("total1").innerHTML="RS "+total1
}
function sub1(id){
    let a=document.getElementById(id).innerHTML
    b=a.split(" ")
    if(total1>0){
        total1-=Number(b[1])
    }
    document.getElementById("total1").innerHTML="RS "+total1
}
