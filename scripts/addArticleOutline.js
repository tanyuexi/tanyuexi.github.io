window.onload = function add_outline () {
  // var outline = document.getElementById("outline"); // should be a fieldset
  // if(!outline){
  //   return(false);
  // }
  var h2s = document.getElementsByTagName("h2");
  if(h2s.length == 0){
    return(false);
  }
  var outline = document.createElement("fieldset");
  var outLegend = document.createElement("legend");
  var outLegTxt = document.createTextNode("Outline");
  // var back2outlButt = document.createElement("p");
  // var back2outlLink = document.createElement("a");
  // var back2outlTxt = document.createTextNode(">>outline<<");
  //var horiline = document.createElement("hr");
  outline.id = "outline";
  outLegend.appendChild(outLegTxt);
  outline.appendChild(outLegend);
  // back2outlButt.appendChild(back2outlLink);
  // back2outlLink.href = "#outline";
  // back2outlLink.appendChild(back2outlTxt);
  // var insBefore = ;   // insert outline after highlights
  // h2s[insBefore].parentNode.insertBefore(outline, h2s[insBefore]);
  document.getElementsByTagName("article")[0].appendChild(outline);
  // for(var i=insBefore; i<h2s.length; i++){
  for(var i=0; i<h2s.length; i++){
    var newLine = document.createElement("br");
  	var iSection = document.createElement("a");
  	var iSecTxt = h2s[i].firstChild.cloneNode(true);
    iSecTxt.nodeValue = "+ " + iSecTxt.nodeValue;
  	iSection.href = "#" + h2s[i].id;
  	iSection.appendChild(iSecTxt);
    outline.appendChild(iSection);
    outline.appendChild(newLine);
    // if(i>insBefore){
    // if(i>0){
    //   h2s[i].parentNode.insertBefore(back2outlButt.cloneNode(true), h2s[i]);
    //   //h2s[i].parentNode.insertBefore(horiline.cloneNode(true), h2s[i]);
    // }
  }
  // h2s[insBefore].parentNode.appendChild(back2outlButt.cloneNode(true));
};
