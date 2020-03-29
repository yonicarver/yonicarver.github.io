function open_tab(tab_name, tab_id) {
  var i;
  var x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  var y = document.getElementsByClassName("side_tab");
    for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "#333"
  }


  // display the tab
  document.getElementById(tab_name).style.display = "block";
  
  document.getElementById(tab_id).style.backgroundColor = "#4CAF50";
}