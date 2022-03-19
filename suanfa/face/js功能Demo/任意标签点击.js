// document.onclick = function (e) {
//   let e = e || window.event;
//   let o = e["target"] || e["srcElement"];
//   alert(o.tagName.toLowerCase())
// }

function elementName(evt) {
  evt = evt || window.event;
  console.log(evt)
  var selected = evt.target || evt.srcElement;
  console.log(selected)
  var eleName = selected && selected.tagName ? selected.tagName.toLowerCase() : "no tagName";
  alert(eleName)
}
// window.onload = function () {
//   var el = document.getElementsByTagName("body");
//   console.log(el[0])
//   el[0].onclick = elementName();
// }