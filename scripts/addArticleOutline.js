window.onload = function add_outline () {
  if(!document.getElementById("highlights")){
    return(false);
  }
  var h2s = document.getElementsByTagName("h2");
  var outline = document.createElement("fieldset");
  var outLegend = document.createElement("legend");
  var outLegTxt = document.createTextNode("Outline");
  var back2outlButt = document.createElement("p");
  var back2outlLink = document.createElement("a");
  var back2outlTxt = document.createTextNode("[Go to outline]");
  var horiline = document.createElement("hr");
  outLegend.id = "outline";
  outLegend.appendChild(outLegTxt);
  outline.appendChild(outLegend);
  back2outlButt.appendChild(back2outlLink);
  back2outlLink.href = "#outline";
  back2outlLink.appendChild(back2outlTxt);
  var insBefore = 1;   // insert outline after highlights
  h2s[insBefore].parentNode.insertBefore(outline, h2s[insBefore]);
  for(var i=insBefore; i<h2s.length; i++){
    var newLine = document.createElement("br");
  	var iSection = document.createElement("a");
  	var iSecTxt = h2s[i].firstChild.cloneNode(true);
  	iSection.href = "#" + h2s[i].id;
  	iSection.appendChild(iSecTxt);
    outline.appendChild(iSection);
    outline.appendChild(newLine);
    if(i>insBefore){
      h2s[i].parentNode.insertBefore(back2outlButt.cloneNode(true), h2s[i]);
      h2s[i].parentNode.insertBefore(horiline.cloneNode(true), h2s[i]);
    }
  }
  h2s[insBefore].parentNode.appendChild(back2outlButt.cloneNode(true));
};