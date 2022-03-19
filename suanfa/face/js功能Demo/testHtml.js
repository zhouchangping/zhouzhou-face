let dom = document.querySelector("#testHtml")
let str = "";
for (let i = 0; i < 500; i++) {
  str+= "<p>" + i + "</p>"
}
dom.innerHTML = str;
