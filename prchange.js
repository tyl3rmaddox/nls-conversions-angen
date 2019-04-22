$( "#prSelect" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text();
    });
    $( "#proofreader" ).text( str );
  })
  .change();

  // $( "#prodSelect" )
  // .change(function () {
  //   var str = "";
  //   $( "#prodSelect option:selected" ).each(function() {
  //     str += $( this ).text();
  //   });
  //   $( "#prodSelected" ).text( str );
  // })
  // .change();


  const prodSpan = document.getElementById("prodSelected");
  const prodSelector = document.getElementById("prodSelect");
  console.log(prodSpan);

  prodSelector.addEventListener("change", () => {
    let selection = prodSelector.options[prodSelector.selectedIndex].value;
    prodSpan.innerHTML = selection;
  })
