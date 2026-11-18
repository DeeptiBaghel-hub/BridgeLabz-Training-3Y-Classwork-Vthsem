const user1={
    name:"deepti",
    email:"deepti@gmail.com",
    address:"agra",
    ottSubscriptions:{
        netflix:"basic",
        amazonPrime:"premium"
    },
    show:function showDetails(){
        console.log(`user:${this.name} has netflix subscription of ${this.ottSubscriptions}variant`)
    }
}

console.log(user1.show())
console.log(user1.email)
console.log(user1["email"])

console.log(user1.ottSubscriptions.netfix)

Object.keys(user1)
Object.values(user1)


const shoppingCart = {
    customerName:"deepti",
    items:[
        {name:"milk", price:50, quantity:2},
        {name:"bread", price:40, quantity:1},
        {name:"eggs", price:10, quantity:12},
        {name:"Rice", price:250, quantity:1}
    ],
    totalPrice:function calculateTotalPrice(){
        let total=0;
        for(let i=0;i<this.items.length;i++){
            total+=this.items[i].price*this.items[i].quantity;
        }
        return total;
    }   
}