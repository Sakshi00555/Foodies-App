async function apiData(url) {
    try {
      let res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let data = await res.json();

      let dataArr = data.meals;
      console.log("dataArr", dataArr);
      dataDisplya(dataArr);
    } catch (err) {
      console.log("err", err);
    }
  }
  apiData();

  const dataDisplya=(menus)=>{
    // console.log("dataArr",dataArr)
    menus.map(function (element) {
        let div= document.createElement("div");
        let div1= document.createElement("div");
        let div2= document.createElement("div");
        div.setAttribute("id","flex")
        let image =document.createElement("img");
        image.setAttribute("class","image")

        let strCategory=document.createElement("h1");
       
        let title= document.createElement("h1");
        title.innerHTML=element.strMeal;
        title.setAttribute("id","title")
        image.src=element.strMealThumb;
        strCategory.innerHTML=element.strCategory;

      let p1 = document.createElement("p");
      p1.innerHTML = element.strIngredient1;
      
      let p2 = document.createElement("p");
      p2.innerHTML = element.strIngredient2;
      let p3 = document.createElement("p");
      p3.innerHTML = element.strIngredient3;
      let p4 = document.createElement("p");
      p4.innerHTML = element.strIngredient4;
      let p5 = document.createElement("p");
      p5.innerHTML = element.strIngredient5;
      let p6 = document.createElement("p");
      p6.innerHTML = element.strIngredient6;
      let p7 = document.createElement("p");
      p7.innerHTML = element.strIngredient7;
      let p8 = document.createElement("p");
      p8.innerHTML = element.strIngredient8;
      let p9 = document.createElement("p");
      p9.innerHTML = element.strIngredient9;
      let p10 = document.createElement("p");
      p10.innerHTML = element.strIngredient10;
      let p11 = document.createElement("p");
      p11.innerHTML = element.strIngredient11;
      let p12 = document.createElement("p");
      p12.innerHTML = element.strIngredient12;
      let p13 = document.createElement("p");
      p13.innerHTML = element.strIngredient13;

      let m1 = document.createElement("p");
      m1.innerHTML = element.strMeasure1;
      let m2 = document.createElement("p");
      m2.innerHTML = element.strMeasure2;
      let m3 = document.createElement("p");
      m3.innerHTML = element.strMeasure3;
      let m4 = document.createElement("p");
      m4.innerHTML = element.strMeasure4;
      let m5 = document.createElement("p");
      m5.innerHTML = element.strMeasure5;
      let m6 = document.createElement("p");
      m6.innerHTML = element.strMeasure6;
      let m7 = document.createElement("p");
      m7.innerHTML = element.strMeasure7;
      let m8 = document.createElement("p");
      m8.innerHTML = element.strMeasure8;
      let m9 = document.createElement("p");
      m9.innerHTML = element.strMeasure9;
      let m10 = document.createElement("p");
      m10.innerHTML = element.strMeasure10;
      let m11 = document.createElement("p");
      m11.innerHTML = element.strMeasure8;
      let m12 = document.createElement("p");
      m12.innerHTML = element.strMeasure9;
      let m13 = document.createElement("p");
      m13.innerHTML = element.strMeasure10;
      var divM=document.createElement("div")
      var divP=document.createElement("div")
      var div3=document.createElement("div")
        var ins= document.createElement("p")
        ins.style.fontSize="25px";
        ins.innerText=element.strInstructions
        
        divM.append(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13)
        divP.append(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13)
        div1.append(strCategory,title,image);

        div2.append(ins)
        div3.append(divP,divM)
        div.append(div1,div3,div2)
        
        document.getElementById("random").append(div);
     
    });
  }
 

