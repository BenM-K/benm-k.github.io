var skull = document.getElementById("skull");
var loading = document.getElementById("loading");
var audio = document.getElementById("player");

document.title = "Loading...";

skull.setAttribute("draggable", false);
loading.setAttribute("draggable", false);

document.addEventListener("contextmenu", event => event.preventDefault());

skull.style.display = "none";
document.body.style.cursor = "none";

setTimeout(function() {
  skull.style.display = "block";
}, 150);

setTimeout(function() {
  audio.pause();
  document.body.style.cursor = "url('/img/cursor.png'), auto";
  marqueeTitle("WELCOME TO HACKER.NET", "...", 100);
  skull.style.display = "none";
  loading.style.display = "none";
  setInterval(draw, 50);
}, 4545);

/* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
function marqueeTitle(c, a, m) {
  var title = (c || document.title) + " " + (a || "-") + " ";
  setInterval(function() {
    title = title.substring(1) + title.charAt(0);
    document.title = title;
  }, m || 300);
}

$(document).ready(function() {
  $("#loading").attr("src", "/img/loading.gif?" + Math.random());
});

//Credit: Techgokul (https://gist.github.com/Techgokul/e434ea602bda6840d5ebf95c4be5ebeb)
//#region MATRIX
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//Making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//Letters to be used
var letters =
  "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝZ012345789:・.=*+-<>¦｜çﾘｸ";

//Converting the string into an array of single characters
letters = letters.split("");

var font_size = 15;

//Number of columns for the rain
var columns = c.width / font_size;

//An array of drops - one per column
var drops = [];

//X below is the Y coordinate
//1 = y co-ordinate of the drop (same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

//Drawing the characters
function draw() {
  //Black BG for the canvas
  //Translucent background to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //Looping over drops
  for (var i = 0; i < drops.length; i++) {
    //A random letter to print
    var text = letters[Math.floor(Math.random() * letters.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //Sending the drop back to the top randomly after it has crossed the screen
    //Make the drops randomly scatter on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    //Incrementing Y coordinate
    drops[i]++;
  }
}
//#endregion
