
let car = prompt("Would you like to learn about the w211 E55 AMG, the w211 E63 AMG, the w212 E63 AMG, the w213 E63 AMG, or the home page?");
carType(car);
function carType(type){
    let page = type;
    if(page == "w211 E55 AMG" || page =="W211 E55 AMG" || page == "W211E55AMG" || page == "w211E55AMG" || page == "E55 AMG" || page == "E55AMG" || page == "E55"){
        location.href("E55 AMG.html");
    }else if(page == "w211 E63 AMG" ||page == "W211 E63 AMG" || page == "W211E63AMG" || page == "w211E63AMG"){
        location.href("W211 E63 AMG.html");
    }else if(page == "w212 E63 AMG" || page == "W212 E63 AMG" || page == "w212E63AMG" || page == "w212" || page == "W212"){
        location.href("W212 E63 AMG.html");
    }else if(page == "w213 E63 AMG" || page == "W213 E63 AMG" || page == "W213E63AMG"  || page == "w213E63AMG" || page == "w213" || page == "W213"){
        location.href("W213 E63 AMG.html");
    }else if(page.toLowerCase() == "home page" || page.toLowerCase() == "home"){
        location.href("index.html");
    }else{
        let go = prompt("Sorry didn't recognize that car. Would you like to input another?");
        if(go.toLowerCase() == "yes"){
            let car2 = prompt("Would you like to learn about the w211 E55 AMG, the w211 E63 AMG, the w212 E63 AMG, or the w213 E63 AMG?");
            carType(car2);
        }else{
            confirm("Here is a one page summary on the cars.");
            window.location = "index.html";
        }
    }
}