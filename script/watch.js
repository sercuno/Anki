let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');
var ep= searchParams.get('ep');
   
fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/url?id=${id}&ep=${ep}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    document.getElementById("vid").src= "https://" + data[0].servers[0].iframe;
    for(var i=0;i<data[0].servers.length;i++) {
        var ul = document.getElementById("source");
        var li = document.createElement("li");

        
        var src=data[0].servers[i].iframe;
        if(src.includes('https://')!=true) {
            src='https://' + src;
        }

        li.setAttribute("onclick", `document.getElementById("vid").src = '` + src + "'");
        li.insertAdjacentHTML('beforeend', `${data[0].servers[i].name}`);
        ul.appendChild(li);
    }

});

fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/info?id=${id}`)
.then((response) => response.json())
.then((data) => {
    document.getElementById("title").innerHTML=data[0].title;
});

document.getElementById("ep").innerHTML=`Episode ${ep}`;


localStorage.setItem(`${id}-epNumber`, ep);
if((localStorage.getItem("list")!=null) && (localStorage.getItem("list").includes(id)!=true)) {
    localStorage.setItem('list', localStorage.getItem("list")+ ` | ${id}`);
} else if(localStorage.getItem("list")==null) {
    localStorage.setItem('list', `${id}`);
}


console.log(localStorage.getItem("list"));

function set(video) {
    document.getElementById("vid").src=video;

}