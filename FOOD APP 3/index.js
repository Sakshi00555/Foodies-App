

var id;
var result = document.getElementById("result")

    async function search(query) {
      
        const link= `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        //console.log(link)
        var res = await fetch(link)
        var data = await res.json()
        displaydata(data.meals)
       
    }

    function main() {
        var query = document.getElementById("input").value
       //console.log(query)
        search(query)
    }


    function displaydata(char) {
        if (char == undefined) {
            return false
        }
        var result = document.getElementById("result")
       
        result.innerHTML = null
        char.forEach(function (el) {
           
            console.log(el)
            let card = document.createElement("div")
            card.setAttribute("class", "card")
            
            var p = document.createElement("p")
            p.setAttribute("class","p")
            p.innerText = el.strMeal
            p.addEventListener("click",function(){
                show(el)
            })
            
            //console.log(p)
            card.append(p)
            result.append(card)
            console.log(result)
        })
    
    }
    function debounce(fun,delay){
    if(id){
    clearTimeout(id)
}
        id=setTimeout(function(){
            fun()
        },delay)
    }
function show(ele){
    
    result.innerHTML=null
    var picture=document.getElementById("ans")
    picture.innerHTML=null
    
    var select=document.createElement("div")
    select.setAttribute("class","select")
    var top=document.createElement("div")
    top.setAttribute("class","top")
    
    var name=document.createElement("h3")
    name.setAttribute("class","name")
    name.innerText=ele.strMeal;
    var image=document.createElement("img")
    image.setAttribute("class","image-food")
    image.src=ele.strMealThumb
    var area= document.createElement("h3")
    area.setAttribute("class","name")
    area.innerText=`Area:-${ele.strArea}`
    var categ= document.createElement("h3")
    categ.setAttribute("class","name")
    categ.innerText=`Category:-${ele.strCategory}`
   


    top.append(name,image,area, categ)
   
    
    ans.append(top)
    console.log(select)
   

    
}

let LSData=JSON.parse(localStorage.getItem("userData"));
let LSDataa=JSON.parse(localStorage.getItem("signin"));
if(LSData.email===LSDataa.email && LSData.password===LSDataa.password){
    document.getElementById("login").innerText=`Hi ${LSData.name}`
}



