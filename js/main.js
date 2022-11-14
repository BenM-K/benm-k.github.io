if (window.location.href === "https://blacklinx.github.io/" || window.location.href === "https://blacklinx.github.io/index.html") { window.location.href = "https://benm-k.github.io/"; }
let skull = document.getElementById("skull"),
    loading = document.getElementById("loading");
function resizeCanvas() {
    let a = $("#c");
    a.css("width", $(window).width()), a.css("height", $(window).height());
}
$(".bannertitle").hide(),
    $(".nav").hide(),
    $(".banner").hide(),
    $(".container").hide(),
    $(".footer").hide(),
    document.addEventListener("contextmenu", (a) => a.preventDefault()),
    (skull.style.display = "none"),
    (document.body.style.cursor = "none"),
    setTimeout(function () {
        (skull.style.display = "block"), (document.title = "Loading...");
    }, 150),
    setTimeout(function () {
        (document.body.style.cursor = "url('/assets/cursor.png'), auto"), (document.title = "Benjamin Morelli-Kirshner - Home"), (skull.style.display = "none"), (loading.style.display = "none"), setInterval(draw, 35);
    }, 4550),
    setTimeout(function () {
        $(".banner").show();
    }, 6500),
    setTimeout(function () {
        $(".bannertitle").show();
    }, 7e3),
    setTimeout(function () {
        $(".nav").show();
    }, 8e3),
    setTimeout(function () {
        $(".container").show(), $(".footer").show();
    }, 9e3),
    $(document).ready(function () {
        $("#loading").attr("src", "/assets/loading.gif?" + Math.random());
    }),
    $(window).on("resize", function () {
        resizeCanvas();
    });
let c = document.getElementById("c"),
    ctx = c.getContext("2d");
(c.height = window.innerHeight), (c.width = window.innerWidth);
let letters =
    "\u65E5\uFF8A\uFF90\uFF8B\uFF70\uFF73\uFF7C\uFF85\uFF93\uFF86\uFF7B\uFF9C\uFF82\uFF75\uFF98\uFF71\uFF8E\uFF83\uFF8F\uFF79\uFF92\uFF74\uFF76\uFF77\uFF91\uFF95\uFF97\uFF7E\uFF88\uFF7D\uFF80\uFF87\uFF8D\uFF66\uFF72\uFF78\uFF7A\uFF7F\uFF81\uFF84\uFF89\uFF8C\uFF94\uFF96\uFF99\uFF9A\uFF9B\uFF9DZ012345789:\u30FB.=*+-<>\xa6\uFF5C\xe7\uFF98\uFF78";
letters = letters.split("");
let font_size = 15,
    columns = c.width / font_size,
    drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;
function draw() {
    (ctx.fillStyle = "rgba(0, 0, 0, 0.05)"), ctx.fillRect(0, 0, c.width, c.height), (ctx.fillStyle = "#0F0"), (ctx.font = font_size + "px arial");
    for (let a = 0; a < drops.length; a++) {
        let b = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(b, a * font_size, drops[a] * font_size), drops[a] * font_size > c.height && Math.random() > 0.975 && (drops[a] = 0), drops[a]++;
    }
}
