$(document).ready(function(){
    buttonEnlarge();
})

const buttonEnlarge = () => {
    $("button").hover(function() {
        $(this).css("width", "80px");
        $(this).css("height", "50px");
    }, function() {
        $(this).css("width", "70px");
        $(this).css("height", "40px");
    });
}

/* let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitRepos").innerHTML = gitObject.repo;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/fromise/repos", true);
gitHubRequest.send(); */

let hasLoaded = false;

function loadRepo() {
  if (hasLoaded) {
    return; // Exit the method if it has already been executed
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      results = JSON.parse(this.responseText);
      for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
        let ul = document.getElementById("repo1");
        let li = document.createElement("LI");
        li.className = "list-group-items";
        let a = document.createElement("a");

        li.appendChild(document.createTextNode(results[i].name));
        a.appendChild(li);
        a.setAttribute("href", results[i].html_url);
        ul.appendChild(a);
      }

      hasLoaded = true;
    }
  };

  xhttp.open("GET", "https://api.github.com/users/fromise/repos", true);
  xhttp.send();
}