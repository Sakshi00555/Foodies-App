

// let  url ="https://www.themealdb.com/api/json/v1/1/categories.php";

 async function apiData(url){
     try{
    let res= await fetch(url);
    let data =await res.json();
   
    let dataArr = data.categories;
    console.log("dataArr",dataArr);
    dataDisplya(dataArr);
}
catch(err){
    console.log("err",err)
}
}
apiData("https://www.themealdb.com/api/json/v1/1/categories.php");




const dataDisplya=(menus)=>{
   
    // console.log("dataArr",dataArr)

    menus.map(function (element){
    
        //console.log("element",element)
        
        let div= document.createElement("div");
        div.setAttribute("id","flex")
        let image =document.createElement("img");
        let strCategory=document.createElement("h2");
       
        let title= document.createElement("p");
        title.innerHTML=element.strCategoryDescription;
        title.setAttribute("id","title")
        image.src=element.strCategoryThumb;
        strCategory.innerHTML=element.strCategory;
        
        
        
        div.append(strCategory,image,title);
        
        document.getElementById("by-day").append(div);
    });
}



