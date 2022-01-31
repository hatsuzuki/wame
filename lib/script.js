// wa.me
// helper site for quickly starting whatsapp chats with unknown numbers (numbers not in contacts)

// normally we can start chats with unknown numbers by entering https://wa.me/[number] in the browser
// but it can be quite tedious to do so
// this site should make it slightly easier
// especially it is is added to the home screen of a mobile device

$(document).ready(function()
{
    $("#telephone").focus(); // focus on telephone number input on page load
});

$("#form").submit(function(e)
{
    e.preventDefault(); // prevent default form submit action

    var countryCode = $("#countryCode").val().replace(/\D/g,""); // remove all non-digits
    var telephone = $("#telephone").val().replace(/\D/g,""); // remove all non-digits

    var number = countryCode + telephone; // cat countryCode and telephone together

    window.location = "https://wa.me/" + number; // open whatsapp URL to start a chat with number
});
