var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    $(".cart-list").empty()
    $(".total").empty()
    const source = $('#cart-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({cart});
    $('.cart-list').append(newHTML); 
    let total=0
    for(let i in cart){
      total+=cart[i].price
    }
    $('.total').html(total)
  }


  var addItem = function (item) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    let name=item.data().name;
    let price=item.data().price;
    let product={name:name, price:price}
    cart.push(product);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    cart = [];
  }

  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  $('.container').find('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  let item=$(this).closest('.item')
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
  app.updateCart();
});