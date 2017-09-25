window.onload = function add_outline () {
  var h2s = document.getElementsByTagName("h2");
  // console.log(h2s.length);
  if(h2s.length == 0){
    return(false);
  }
  var outline = document.createElement("fieldset");
  var outLegend = document.createElement("legend");
  var outLegTxt = document.createTextNode("Outline");
  outline.id = "outline";
  outLegend.appendChild(outLegTxt);
  outline.appendChild(outLegend);
  document.getElementsByTagName("article")[0].appendChild(outline);
  for(var i=0; i<h2s.length; i++){
    var newLine = document.createElement("br");
  	var iSection = document.createElement("a");
  	var iSecTxt = h2s[i].firstChild.cloneNode(true);
    iSecTxt.nodeValue = "+ " + iSecTxt.nodeValue;
  	iSection.href = "#" + h2s[i].id;
  	iSection.appendChild(iSecTxt);
    outline.appendChild(iSection);
    outline.appendChild(newLine);
  }
};
