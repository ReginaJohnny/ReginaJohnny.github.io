

const treeList = ["oakprice","birchprice","cherryprice","elmprice","walnutprice","koaprice","firprice","palmprice","volcanoprice","snowglowprice","goldprice","zombieprice","cavecrawlerprice","frostprice","phantomprice","bluespruceprice","mapleprice","spookyprice","sinisterprice"];
const multList = [10        ,15          ,10.5         ,6         ,11           ,26.4      ,18        ,32         ,28            ,10             ,36         ,30           ,35                ,106         ,420           ,40               ,16          ,54           ,90];



function priceAdd(entry, price) {
    //Adds the price to the table entry in the "Calculated price" section
    document.getElementById(entry).innerHTML = price + "$";
    console.log("Price for entry " + entry + " replaced with " + price);
}

function priceCalculate(unit, multiplier) {
    //Calculates the sell price of a plank (units * multiplier)
    let result = Math.round(unit * multiplier);
    return result;
}





function testFunction() {
    //Get the XYZ values from the forms:
    let valueX = document.getElementById("sizeX").value;
    //Make sure the values aren't invalid:
    if (valueX < 0.4 || valueX > 3) {
        alert("X value must be between 0.4 and 3");
        return
    }
    let valueY = document.getElementById("sizeY").value;
    if (valueY < 0.4 || valueY > 2.4) {
        alert("Y value must be between 0.4 and 2.4");
        return
    }
    let valueZ = document.getElementById("sizeZ").value;
    if (valueX < 0.4) {
        alert("Z value can not be below 0.2");
        return
    }

    //Calculate units price (measurements multiplied to get m^3)
    let units = valueX * valueY * valueZ;

    //For every entry in the treeList array, add/replace and calculate price
    for (let i = 0; i < treeList.length; i++) {
        priceAdd(treeList[i], priceCalculate(units, multList[i]));
    }
}



function presetMax() {
    document.getElementById("sizeX").value = 3;
    document.getElementById("sizeY").value = 2.4;
    document.getElementById("sizeZ").value = 0;
}

function preset1x1() {
    document.getElementById("sizeX").value = 2;
    document.getElementById("sizeY").value = 1.8;
    document.getElementById("sizeZ").value = 0.2;
}









document.getElementById("startprogram").addEventListener("click", testFunction);


document.getElementById("presetMax").addEventListener("click", presetMax);
document.getElementById("preset1x1").addEventListener("click", preset1x1)



