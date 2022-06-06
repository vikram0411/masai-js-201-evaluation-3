var bag =  JSON.parse(localStorage.getItem("user"))||[]

  function data(na,em,ad,amt){
    this.name = na
    this.email = em
    this.address = ad
    this.amount = amt
  }
  function sub(){
    event.preventDefault()
    name = document.querySelector("#name").value
    email = document.querySelector("#email").value
    add = document.querySelector("#address").value
    amt = Number(document.querySelector("#amount").value)
    document.querySelector("#name").value=null;
    document.querySelector("#email").value=null;
    document.querySelector("#address").value=null;
    document.querySelector("#amount").value=null;
    
    let user = new data(name,email,add,amt)

    console.log(user)
    localStorage.setItem("user",JSON.stringify(user))
  }

  sub()