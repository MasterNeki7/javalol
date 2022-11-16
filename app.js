let gold = 0;
let goldLabel = document.querySelector(".gold-label");
let goldButton = document.querySelector(".gold-button");

let goldEarn = document.querySelector(".gold-earn");
let candleLabel = document.querySelector(".candle-label");
let pickaxeLabel = document.querySelector(".pickaxe-label");
let 中国工人Label = document.querySelector(".中国工人-label");
let drillLabel = document.querySelector(".drill-label");
let dynamiteLabel = document.querySelector(".dynamite-label");
let facilityLabel = document.querySelector(".facility-label");
let officeLabel = document.querySelector(".office-label");
let countryLabel = document.querySelector(".country-label");

let diggingPower = 1;

let inventory = ["AK 47", "kläder"];
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

let buyOfficeButton = document.querySelector(".buy-office-button");
let officeCost = 100000;

let buyCountryButton = document.querySelector(".buy-country-button");
let countryCost = 1000000;


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
});
buyFacilityButton.addEventListener("click", () => {
    buyItem("facility", facilityCost);
});
buyOfficeButton.addEventListener("click", () => {
    buyItem("office", officeCost);
});
buyCountryButton.addEventListener("click", () => {
    buyItem("country", countryCost);
});

function buyItem(item, cost) {



    if (gold >= cost && item == "candle") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 5;
        candleCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
        candleLabel.innerHTML = candleCost;
    }

    if (gold >= cost && item == "pickaxe") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 15;
        pickaxeCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
        pickaxeLabel.innerHTML = pickaxeCost;
    }

    if (gold >= cost && item == "中国工人") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 30;
        ChineseWorkerCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
        中国工人Label.innerHTML = ChineseWorkerCost;
    }

    if (gold >= cost && item == "drill") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 50;
        drillCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
        drillLabel.innerHTML = drillCost;
    }

    if (gold >= cost && item == "dynamite") {
        gold -= cost;
        inventory.push(item);
        diggingPower += 100;
        dynamiteCost *= 2;
        updateInventory();
        goldLabel.innerHTML = gold;
        dynamiteLabel.innerHTML = dynamiteCost;
    }

    if (gold >= cost && item == "facility") {
        gold -= cost;
        inventory.push(item);
        diggingPower *= 2;
        facilityCost *= 10;
        updateInventory();
        goldLabel.innerHTML = gold;
        facilityLabel.innerHTML = facilityCost;
    }

    if (gold >= cost && item == "office") {
        gold -= cost;
        inventory.push(item);
        diggingPower *= 3;
        officeCost *= 10;
        updateInventory();
        goldLabel.innerHTML = gold;
        officeLabel.innerHTML = officeCost;
    }

    if(gold >= cost && item == "country") {
        gold -= cost;
        inventory.push(item);
        diggingPower *= 4;
        countryCost *= 10;
        updateInventory();
        goldLabel.innerHTML = gold;
        countryLabel.innerHTML = countryCost;
    }

    goldEarn.innerHTML = diggingPower;
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