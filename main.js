menuListArray = ["Pizza Vegetariana","pizza portuguesa","pizza 4queijos","pizza peperone","pizza costumizavel"
                    ];
                

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menulistArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'

}
document.getElementById("displayMenu").innerHTML = htmldata;
}
function addItem(){
    var htmldata;
    var imgtags='<img id="im1" src="images/pizzaimg.png"/>'
    var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("additem").value;
menuListArray.push(item);
addItem();
}