const $view = document.querySelector(".view");

const routes = {
  "/login": "LOGIN",
  "/about": "ABOUT",
};

// window.addEventListener("hashchange", (e) => {
//   console.log(e)
//   const route = getHash(e.newURL);
//   console.log(route)
//   if (route) {
//     renderView(route);
//   }
// });

function renderView(route) {
  const content = routes[route];
  $view.innerHTML = content;
}

function getHash(url) {
  const href = window.location.href;
  const i = href.indexOf("#");
  const hash = i >= 0 ? href.slice(i + 1) : "";
  return hash;
}

function getHash2(url) {
  const i = url.indexOf("#");
  const hash = i >= 0 ? url.slice(i + 1) : "";
  return hash;
}



const $links = document.querySelectorAll("a");
$links.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    const path = e.target.getAttribute("href");
    console.log(path)
    const url = getHash2(path)
    console.log(url)
    renderView(url);
    window.history.pushState({}, "", path);
  });
});

