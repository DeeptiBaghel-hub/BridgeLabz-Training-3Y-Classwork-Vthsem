
const shoppingCart = {
    customerName: "Deepti",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

// 1. Calculate sum using rest parameters
function calculateCartTotal(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

// 2. Calculate total cost of one item
function calculateItemTotal(item) {
    return item.price * item.quantity;
}

// 3. Calculate complete cart bill
function calculateCartBill(cart) {
    const itemTotals = cart.items.map(item =>
        calculateItemTotal(item)
    );

    const subtotal = calculateCartTotal(...itemTotals);

    const discount = subtotal > 2000
        ? subtotal * 0.10
        : 0;

    const finalAmount = subtotal - discount;

    return {
        subtotal,
        discount,
        finalAmount
    };
}

// 4. Display checkout summary
function displayCheckoutSummary(cart) {
    console.log("\n========== CHECKOUT SUMMARY ==========");
    console.log("Customer:", cart.customerName);
    console.log("--------------------------------------");

    if (cart.items.length === 0) {
        console.log("Cart is empty!");
    } else {
        for (let i = 0; i < cart.items.length; i++) {
            const item = cart.items[i];
            const itemTotal = calculateItemTotal(item);

            console.log(
                `${item.name.padEnd(12)} x ${item.quantity}    ₹${itemTotal}`
            );
        }
    }

    const bill = calculateCartBill(cart);

    console.log("--------------------------------------");
    console.log("Subtotal:".padEnd(22) + "₹" + bill.subtotal);
    console.log("Discount:".padEnd(22) + "₹" + bill.discount);
    console.log("Final Amount:".padEnd(22) + "₹" + bill.finalAmount);
    console.log("======================================");
}

// 5. Test with multiple items
console.log("TEST 1: MULTIPLE ITEMS");
displayCheckoutSummary(shoppingCart);

// 6. Test with an empty cart
const emptyCart = {
    customerName: "Amit",
    items: []
};

console.log("\nTEST 2: EMPTY CART");
displayCheckoutSummary(emptyCart);

// 7. Test with a single item
const singleItemCart = {
    customerName: "Priya",
    items: [
        { name: "Laptop", price: 25000, quantity: 1 }
    ]
};

console.log("\nTEST 3: SINGLE ITEM");
displayCheckoutSummary(singleItemCart);
