$(document).ready(function() {
<<<<<<< HEAD
    $("#checkout_button").click(function() {
        $("#form").submit();
    });

 });

// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='checkout_registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        lastname: "required",
        phone: "required",
        street: "required",
        zipcode: "required",
        city: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },

      },
      // Specify validation error messages
      messages: {
        firstname: "Fyll i ditt förnamn",
        lastname: "Fyll i ditt efternamn",
        phone: "Fyll i ditt telefonnummer",
        street: "Fyll i din gatuadress",
        zipcode: "Fyll i ditt postnummer",
        city: "Fyll i din ort",
        email: "Fyll i din emailadress"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
=======

  function counter() {
    let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};
    let cartLength = currentCartItems.length;
    console.log(cartLength);

    $(".badge-info").html(cartLength);
  };
  counter();


  cart = JSON.parse(localStorage.getItem("cart")) || [];

  for (let p = 0; p < cart.length; p++) {
>>>>>>> 17d88624c12ce2bdd9fd67eaf377fe75b8179eb3

    $("#checkout_items_titel1").html(cart[p].title)
    $("#checkout_items_price1").html(cart[p].price)

    console.log("kom och hjälp mig!")


<<<<<<< HEAD
  
=======
  }


  let checkoutButton = $("#checkout_button");
  let checkBoxes = $("#checkout_checkbox");
  checkoutButton.addEventListener("click", function() {
    $("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
  });
  checkBoxes.change();

  $("#checkout_checkbox").on("change", function(e) {
    if ($("#checkout_checkbox").attr("checked")) {
      $("#checkout_button").button("enable");
    } else {
      $(".submit").button("disable");
    }

  });

});
>>>>>>> 17d88624c12ce2bdd9fd67eaf377fe75b8179eb3
