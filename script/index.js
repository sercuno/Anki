var data = localStorage.getItem("list").split(" | ");

console.log(data[0]);

// localStorage.clear();

for(var i=0;i<data.length;i++) {
    fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/info?id=${data[i]}`)
    .then((response) => response.json())
    .then((res) => {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.insertAdjacentHTML('beforeend', `<img src='${res[0].img}'> ${res[0].title}`);
        li.setAttribute("onclick", `window.location.href='anime.html?id=${res[0].id}';`);
    ul.appendChild(li);
    });
}