var userMoney = prompt("Ваш бюджет?");
var userShop = prompt("Название вашего магазина?")

var mainList = {
    cashMoney: userMoney,
    nameShop: userShop,
    shopGoods: [],
    employeers: {},
    open: true
}

console.log("The customer has " + mainList.cashMoney + " cash and customer's planning go to " + mainList.nameShop);

answer = 0;
while (answer !== 3) {
    var product = prompt("Какой тип товаров будем покупать?");
    mainList.shopGoods.push(product);
    answer++;
}

console.log("The customer has these goods " + mainList.shopGoods + " in his basket");

var dayOfMonth = 30;

console.log("The customer has limit money " + (mainList.cashMoney / dayOfMonth) + " to spend this day");