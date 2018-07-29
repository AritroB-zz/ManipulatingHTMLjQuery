/* let $button = $("<button>1. Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Messi is the GOAT!")
});*/

/* OBJECTIVE 2
let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});

*/

/* OBJECTIVE 3 
let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
});*/

/* OBJECTIVE 4
let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";
    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }
    $($p).css("color", "#" + $randcol);
});
*/

 /*OBJECTIVE 5*/
let $button = $("#button");
let $div = $("#div");
$button.click( function() {
    let $span = $("<span> Aritro</span>");
    $($span).appendTo($div);
});

