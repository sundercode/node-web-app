var totalPrice = 0;

function getSum() {
    let cart = JSON.parse(localStorage.getItem("Cart"));
    if (totalPrice === 0 || cart === null){
      document.getElementById("cartTotal").innerHTML = "$0.00";
    }

    try {
        for (var i = 0; i < cart.length; i++){
            totalPrice += cart[i]["PRICE"];
        }
    } catch (e) {
        console.log(e.message);              // "null has no properties"
        console.log(e.name);
    }
    document.getElementById("cartTotal").innerHTML = "$" + parseFloat(totalPrice).toFixed(2);
}

function showTotal() {
    document.getElementById("cartTotal2").innerHTML = "Total: $" + parseFloat(totalPrice).toFixed(2);
}

//item that removes item from cart with button press
function removeOnClick(itemName) {
    var i;
    let newCart = JSON.parse(localStorage.getItem("Cart"));
    //look through cart and find name of item to be removed
    for (i = 0; i < newCart.length; i++) {
        if (newCart[i]["ITEM NAME"] === itemName) {
            var index = i;
            if (index > -1) {
                newCart.splice(index, 1);
                console.log(newCart);
            }
        }
    }
    localStorage.setItem("Cart", JSON.stringify(newCart));
    generateCart();
    showTotal();
    //location.reload();
}

function generateButton() {
    var tabs = document.getElementById("cart");
    var removeDiv = document.getElementById("remove");

    let removeButton = document.createElement("button");
    removeButton.className += "btn btn-danger";
    removeButton.onclick = function () {removeOnClick("Toodle Loo Kangaroo")};
    let text = document.createTextNode("X");
    removeButton.appendChild(text);

    removeDiv.appendChild(removeButton);
}

//generate the table from what is in the cart. use lodash?
function generateCart() {
    //using the cartArray, generate rows of a table using jQuery(?)
    // EXTRACT VALUE FOR HTML HEADER.
    var col = ['ITEM NAME', 'CATEGORY', 'PRICE'];

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.className += "table table-hover";
    table.id += "cart"

    //RETRIEVE THE CART OBJECT FROM localStorage
    let newCart = JSON.parse(localStorage.getItem("Cart"));

    if (newCart === null) {
        var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "Your Cart is empty! Go look at some of our cards!";
    }

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);  // TABLE ROW. -1 appends on to the end

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    try {
        for (var i = 0; i < newCart.length; i++) {

            tr = table.insertRow(-1);
            tr.className += "row-hover";

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                //inserts our info from the inventory
                tabCell.innerHTML = newCart[i][col[j]];
                tabCell.id += "col" + j + i;
            }

        }
    } catch (e) {
        console.log(e.message);              // "null has no properties"
        console.log(e.name);
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}
