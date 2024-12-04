function sendEmail() {
    (function () {
        emailjs.init("AK4F4gxAdcG-3Y9ZE");
    })();

    let name = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let product = document.getElementById("vybranyprodukt")
    let producttext = product.options[product.selectedIndex].innerHTML;
    let customerdetails = document.getElementById("customerdetails");


    let params = {
        fullname: document.getElementById("fullname").value,
        to: "philip.hruby777@gmail.com",
        replyto: document.getElementById("email").value,
        message: `new order! 8)! \n jméno: ${name} si objednal: ${producttext} \n email: ${email}`
    };

    let serviceID = "service_15c72dl"
    let templateID = "template_uuli8d8"

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Váš email byl zaslán úspěšně! Vyčkejte než Vás kontaktuji.")
            customerdetails.reset()
        })
        .catch(err => {
            console.log(err)
            customerdetails.reset()
        });


}


var typed = new Typed('#introduction', {
    strings: ['na této stránce máte možnost si objednat nějaké z mojich děl, klikněte na tlačítko <strong>[Mám zájem!]</strong> pod dílem, vyplňte údaje klikněte na <strong>[Objednat]</strong> a ja se Vám ozvu co nejdříve to půjde. Snad Vám něco padne do oka 8)'],
    typeSpeed: 10,
    showCursor: false
  });