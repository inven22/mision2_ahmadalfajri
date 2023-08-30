
    $(document).ready(function() {
      $(".add-button").click(function() {
        var quantityElem = $(this).siblings(".quantity");
        var currentQuantity = parseInt(quantityElem.text());
        quantityElem.text(currentQuantity + 1);
        updateCart();
      });

      $(".remove-button").click(function() {
        var quantityElem = $(this).siblings(".quantity");
        var currentQuantity = parseInt(quantityElem.text());
        if (currentQuantity > 0) {
          quantityElem.text(currentQuantity - 1);
          updateCart();
        }
      });

      function updateCart() {
        var cartItems = [];
        var totalItems = 0;
        var totalPrice = 0;

        $(".menu-list .card").each(function() {
          var itemName = $(this).find(".card-title").text();
          var itemQuantity = parseInt($(this).find(".quantity").text());

          if (itemQuantity > 0) {
            cartItems.push(itemName + " (" + itemQuantity + ")");
            totalItems += itemQuantity;
            var itemPrice = parseInt($(this).find(".card-price").text().replace("Harga : Rp ", ""));
            totalPrice += itemQuantity * itemPrice;
          }
        });

        $(".cart-item").remove();
        for (var i = 0; i < cartItems.length; i++) {
          $(".cart-container").append(
            '<div class="cart-item"><div class="cart-item-info"><span class="cart-item-name">' +
              cartItems[i] +
              '</span></div></div>'
          );
        }

        $(".total-items").text(totalItems);
        $(".total-price").text("Rp " + totalPrice);
      }

      $(".order-button").click(function() {
        alert("Pesanan Anda telah berhasil dipesan!");
        $(".quantity").text("0");
        updateCart();
      });
    });