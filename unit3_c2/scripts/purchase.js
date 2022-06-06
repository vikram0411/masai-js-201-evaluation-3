
var arr=JSON.parse(localStorage.getItem("purchase"))
console.log(arr)

var user=JSON.parse(localStorage.getItem("user"))
console.log(user)

document.querySelector("#amt").innerText=user.amount;
append =(arr)=>{
    arr.forEach(function(data){
        console.log(data)
        var box=document.querySelector("#voucher_list");
        // box.innerHTML=null
        var card = document.createElement("div")
        card.setAttribute("class","voucher")
        var img=document.createElement("img");
        img.src=data.image;
        var name=document.createElement("h4");
        name.innerText=data.name
        var price=document.createElement("h4");
        price.innerText=data.price
        // var but=document.createElement("button");
        // but.innerText="buy"
        // but.addEventListener("click",function(){
        //     getvoucher(data)
        // })
        // but.setAttribute("class","buy_voucher");
        price.innerText=data.price
        card.append(img,name,price)
        
        box.append(card)
    })
   
}

append(arr)