type Menu={
   id: number
   name: string
   price: number
}

type Order={
    Id: number
    name: string
    status: "Ordered" | "Completed"
}

const menu: Menu[] = [
    {id:1, name: "Margherita", price: 200 },
    {id:2, name: "Pepperconi", price: 150 },
    {id:3, name: "hawaiian", price: 300 },
    {id:4, name: "Veggie", price: 370 }
];
let cashInStore= 1000
const orders: Order[] = []

function addToPizzaMenu(pizzaObj: Menu) {
    menu.push(pizzaObj)
}

let orderIdNo = 1
function placeOrders(pizzaName: string): Order | undefined {
    //this is one way to do it another way is to use array method .find()
    // menu.forEach(pizza=> {
    //     if(pizza.name===pizzaName) {
    //         availableCash+=pizza.price
    //         const order={name: pizzaName, status:"Ordered"}
    //         orders.push(order)
    //         return order
    //     }
    // })
    const orderedPizza = menu.find(p=> p.name === pizzaName)
    if (orderedPizza) {
        cashInStore += orderedPizza.price
        const order:Order = { Id: orderIdNo, name: pizzaName, status: "Ordered" }
        orderIdNo += 1
        orders.push(order)
        return order
    }
    else {
        console.log("The pizza is out of stock")
    }
}

function completeTheOrder(oId: number): Order[] | undefined {
    let changed=false
    orders.forEach(p=>{
        if(p.Id === oId) {
            p.status="Completed"
            changed=true
        }
    })
    if(changed) return orders
    else console.error("Such Order doesn't exist")
}

function getPizzaDetail(identifier: string|number): Menu | undefined {
    let details
    if(typeof(identifier)==='string') {
        console.log("string")
        details=menu.find(p=>p.name.toLowerCase()===identifier.toLowerCase())
        return details
    }
    else if(typeof(identifier)==='number'){
        console.log("number")
        details=menu.find(p=>p.id===identifier)
        return details
    }
    else {
        throw new TypeError("Invalid datatype")
    }

    if(!details) {
        throw new Error("Such pizza doesn't exist")
    }
}

addToPizzaMenu({id:5, name: "BBQ Chicken", price: 500 })
placeOrders("Margherita")
completeTheOrder(1)
console.log("Menu: " + menu)
console.log("Cash Available: " + cashInStore)
console.log("orders till now: " + orders)

