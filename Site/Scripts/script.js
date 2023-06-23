function OrologioJavascript()
{
    var orologio = document.getElementById("orologioScript");
    var data = new Date();
    var ore = data.getHours();
    var minuti = data.getMinutes();
    var secondi = data.getSeconds();
    var ora = ore+":"+minuti+":"+secondi;
    orologio.innerHTML = ora;
}
setInterval(OrologioJavascript, 1000);





