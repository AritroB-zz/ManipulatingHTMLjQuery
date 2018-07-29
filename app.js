let $button = $("<button>1. Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Messi is the GOAT!")
});

let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});