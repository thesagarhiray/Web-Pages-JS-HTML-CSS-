function validate(a,b) {
    var userID=9766583610;
    var password="sagarhiray";
    var userID1=a;
    var password1=b;
    if(userID==userID1 && password==password1){
        window.location.assign("index.html")
    }
    else{
        window.location.assign("start.html")
    }

}