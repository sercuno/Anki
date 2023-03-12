let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');
var ep= searchParams.get('ep');
   

fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/url?id=${id}&ep=${ep}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    document.getElementById("vid").src=data[0].servers[2].iframe;
    document.getElementById("title").innerHTML=data[0].id;

});

document.getElementById("ep").innerHTML=`Episode ${ep}`;