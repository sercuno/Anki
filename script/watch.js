let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');
var ep= searchParams.get('ep');
   

fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/url?id=${id}&ep=${ep}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    document.getElementById("vid").src=data[0].servers[3].iframe;


});

fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/info?id=${id}`)
.then((response) => response.json())
.then((res) => {
    document.getElementById("title").innerHTML=res[0].title;

});

document.getElementById("ep").innerHTML=`Episode ${ep}`;


localStorage.setItem(`${id}-epNumber`, ep);
if((localStorage.getItem("list")!=null)&&(localStorage.getItem("list").includes(id)==false)) {
    localStorage.setItem('list', `${localStorage.getItem("list")} | ${id}`);
} else {
    localStorage.setItem('list', `${id}`);
}


console.log(localStorage.getItem("list"));