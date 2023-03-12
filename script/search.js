function search() {
    document.getElementById("loading").style.display = "block";
    
var totalEp, title;
   
   fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/info?id=${document.getElementById("search").innerHTML}`)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("loading").style.display = "none";
        for(var i=0;i<=data.length;i++) {
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            li.setAttribute("onclick", `window.location.href='anime.html?id=${data[i].id}';`);
            li.insertAdjacentHTML('beforeend', `<img src='${data[i].img}'> ${data[i].title}`);
            ul.appendChild(li);
        }
    
    });

}