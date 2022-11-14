let gold = 0;
let goldLabel = document.querySelector(".gold-label");
let goldButton = document.querySelector(".gold-button");

let diggingPower = 1;

let inventory = ["AK 47"];
let inventoryList = document.querySelector(".inventory-list")

let buyCandleButton = document.querySelector(".buy-candle-button");
let candleCost = 10;

let buyPickaxeButton = document.querySelector(".buy-pickaxe-button");
let pickaxeCost = 50;

let buyChineseWorkerButton = document.querySelector(".buy-chinese-worker");
let ChineseWorkerCost = 150;

let buyDrillButton = document.querySelector(".buy-drill-button");
let drillCost = 300;

let buyDynamiteButton = document.querySelector(".buy-dynamite-button");
let dynamiteCost = 1000;

let buyFacilityButton = document.querySelector(".buy-facility-button");
let facilityCost = 50000;




goldButton.addEventListener("click", addGold);

buyCandleButton.addEventListener("click", () => {
    buyItem("candle", candleCost);
});
buyPickaxeButton.addEventListener("click", () => {
    buyItem("pickaxe", pickaxeCost);
});
buyChineseWorkerButton.addEventListener("click", () => {
    buyItem("中国工人", ChineseWorkerCost);
});
buyDrillButton.addEventListener("click", () => {
    buyItem("drill", drillCost);
});
buyDynamiteButton.addEventListener("click", () => {
    buyItem("dynamite", dynamiteCost);
})
buyFacilityButton.addEventListener("click", () => {
    buyItem("facility", facilityCost);
})


function buyItem(item, cost) {

    if (gold >= cost && item == "candle") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 3;
        candleCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
    }

    if(gold >= cost && item == "pickaxe"){
        gold -= cost;
        inventory.push(item);
        diggingPower += 7;
        pickaxeCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
    }

    if (gold >= cost && item == "中国工人") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 15;
        ChineseWorkerCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
    }

    if (gold >= cost && item == drill) {
        gold -= cost;
        inventory.push(item);
        diggingPower += 30;
        drillCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
    }

    if (gold >= cost && item == dynamite) {
        gold -= cost;
        inventory.push(item);
        diggingPower += 100;
        dynamiteCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
    }

    if (gold >= cost && item == facility) {
        gold -= cost;
        inventory.push(item);
        diggingPower *= 2;
        facilityCost *= 10;
        updateInventory();
        goldLabel.innerHTML = gold;
    }


}



function addGold() {
    gold += diggingPower;
    goldLabel.innerHTML = gold;
}

function updateInventory() {
    inventoryList.innerHTML = "";
    for (let index = 0; index < inventory.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = inventory[index];
        inventoryList.append(li);

    }
}

updateInventory();