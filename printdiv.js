function printData()
{
   var divToPrint=document.getElementById("openClose");
   var prSelector=document.getElementById("prSelect");
   var dbNumber=document.getElementById("dbNumber").innerText;
   console.log(dbNumber);
   var prSelection=prSelector.options[prSelector.selectedIndex].value
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.document.write('<p style="position: fixed; bottom: 0; font-size: 15px; font-family: courier" >' + "Proofreader: " + prSelection + '</p>');
   newWin.document.write('<h1 style="position: absolute; box-shadow: 3px 3px 3px rgba(0,0,0,0.45); top:0; font-size: 38px; left:32rem; border:2px solid black; margin-top: 0px; padding: 15px;">DB: ' + dbNumber + '</h1>');
   newWin.print();
   newWin.close();
}

$('#printButton').on('click',function(){
printData();
})