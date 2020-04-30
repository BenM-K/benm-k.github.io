  //Disable right clicking
  document.addEventListener("contextmenu", event => event.preventDefault());

  //Draw matrix effect
  setInterval(draw, 35);

  //Set custom cursor
  document.body.style.cursor = "url('/assets/cursor.png'), auto";

  /*   setTimeout(function() {
      $(".banner").show();
    }, 6500);
    
    setTimeout(function() {
      $(".bannertitle").show();
    }, 7000);
    
    setTimeout(function() {
      $(".nav").show();
    }, 8000);
    
    setTimeout(function() {
      $(".container").show();
      $(".footer").show();
    }, 9000); */

  $(window).on("resize", function() {
      resizeCanvas();
  });

  //Dynamically resizes the canvas to the width and height of the viewport
  function resizeCanvas() {
      var canvas = $("#c");
      canvas.css("width", $(window).width());
      canvas.css("height", $(window).height());
  }

  //Credit: Techgokul (https://gist.github.com/Techgokul)
  //#region MATRIX
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  //Make the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  //The letters to be used
  var letters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝZ012345789:・.=*+-<>¦｜çﾘｸ";

  //Converting the string into an array of single characters
  letters = letters.split("");

  var font_size = 15;

  //Number of columns for the rain
  var columns = c.width / font_size;

  //An array of drops, one per column
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
      ctx.fillStyle = "#0F0"; //Green text
      ctx.font = font_size + "px arial";

      //Looping over drops
      for (var i = 0; i < drops.length; i++) {
          //A random letter to print
          var text = letters[Math.floor(Math.random() * letters.length)];

          //x = i*font_size, y = value of drops[i]*font_size
          ctx.fillText(text, i * font_size, drops[i] * font_size);

          //Sending the drop back to the top randomly after it has crossed the screen
          //Make the drops randomly scatter across the Y axis
          if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

          //Incrementing Y coordinate
          drops[i]++;
      }
  }
  //#endregion

    /* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
  /* function marqueeTitle(c, a, m) {
    var title = (c || document.title) + " " + (a || "-") + " ";
    setInterval(function() {
      title = title.substring(1) + title.charAt(0);
      document.title = title;
    }, m || 100);
  } */