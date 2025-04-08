var menu = [
    { name: "Margherita", price: 200 },
    { name: "Pepperconi", price: 150 },
    { name: "hawaiian", price: 300 },
    { name: "Veggie", price: 370 }
];
var cashInStore = 1000;
var orders = [];
function addToPizzaMenu(pizzaObj) {
    menu.push(pizzaObj);
}
var orderIdNo = 1;
function placeOrders(pizzaName) {
    //this is one way to do it another way is to use array method .find()
    // menu.forEach(pizza=> {
    //     if(pizza.name===pizzaName) {
    //         availableCash+=pizza.price
    //         const order={name: pizzaName, status:"Ordered"}
    //         orders.push(order)
    //         return order
    //     }
    // })
    var orderedPizza = menu.find(function (p) { return p.name === pizzaName; });
    if (orderedPizza) {
        cashInStore += orderedPizza.price;
        var order = { Id: orderIdNo, name: pizzaName, status: "Ordered" };
        orderIdNo += 1;
        orders.push(order);
        return order;
    }
    else {
        console.log("The pizza is out of stock");
    }
}
function completeTheOrder(oId) {
    var findOrder = orders.find(function (p) { return p.Id === oId; });
    if (findOrder) {
        findOrder.status = "Completed";
        return findOrder;
    }
}
addToPizzaMenu({ name: "BBQ Chicken", price: 500 });
placeOrders("Margherita");
completeTheOrder(1);
console.log("Menu: " + menu);
console.log("Cash Available: " + cashInStore);
console.log("order till now: " + orders);
