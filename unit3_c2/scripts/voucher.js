 async function getdata(){
 var url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
    try{
       res=await fetch(url)
       data=await res.json()
       console.log(data[0].vouchers)
       append(data[0].vouchers)
    }catch(err){
        console.log(err)
    }
}

getdata()

append =(vouchers)=>{
    vouchers.forEach(function(data){
        // console.log(vouchers)
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
        var but=document.createElement("button");
        but.innerText="buy"
        but.addEventListener("click",function(){
            getvoucher(data)
        })
        but.setAttribute("class","buy_voucher");
        price.innerText=data.price
        card.append(img,name,price,but)
        
        box.append(card)
    })
   
}

var arr=JSON.parse(localStorage.getItem("purchase")) || []
var user=JSON.parse(localStorage.getItem("user"))
console.log(user)

document.querySelector("#amt").innerText=user.amount;
function getvoucher(data){
  
    var walletbalance=user.amount
          if(walletbalance>=data.price){
            arr.push(data)
            // console.log(user)
           
            // console.log(walletbalance)
             alert("Hurray! purchase successful")
             var rest=walletbalance-data.price;
             document.querySelector("#amt").innerText=rest
             user.amount=rest;
             localStorage.setItem("user",JSON.stringify(user))
             
          }
          else{
              alert("Sorry! insufficient balance")
          }
// console.log(arr)
localStorage.setItem("purchase",JSON.stringify(arr))
          }
console.log(arr)
         

         var items=JSON.parse(localStorage.getItem("purchase"))
         console.log(items)