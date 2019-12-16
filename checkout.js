$(document).ready(function() {

    $("#checkout_button").click(function() {
        $("#form").submit();
    });


    /*

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

*/
    $(".menu-toggle").click(function() {
        if ($(".menu").hasClass("menu-hide")) {
            $(".menu").removeClass("menu-hide");
            $(".menu").addClass("menu-show");

        } else {
            $(".menu").addClass("menu-hide");
            $(".menu").removeClass("menu-show");
        }
    });
    $(".filter-button").on("click", function() {
        $(".menu").addClass("menu-hide");
        $(".menu").removeClass("menu-show");


        let newFilter = this.id;
        localStorage.setItem("filter", newFilter);
        window.open("index.html", "_self");
    });

    $(".home").on("click", function() {
        localStorage.setItem("filter", 0);
        window.open("index.html", "_self");
    });

    function counter() {
        let currentCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        let cartLength = currentCartItems.length;
        console.log(cartLength);

        $(".badge-info").html(cartLength);
    };
    counter();

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(cart);

    let items_div = $("#checkout_container_items");

    for (let p = 0; p < cart.length; p++) {
        console.log(cart[p]);

        let Tagdiv = $("<div>").append("<h4>").html(cart[p].title)
        let spanPrice = $("<span>").html(cart[p].price)
        let spanSize = $("<span>").html(cart[p].size)
        items_div.append(Tagdiv).addClass("divClass")
        Tagdiv.append(spanPrice)
        Tagdiv.append(spanSize)
    };

});