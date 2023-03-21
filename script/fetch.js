let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');
   
var totalEp, title;


   fetch(`https://heavenlyaccomplishedcubase.avirana2.repl.co/info?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        document.getElementById("title").innerHTML = data[0].title;
        document.getElementById("totalEp").innerHTML= 'Total episodes: ' + data[0].totalEpisodes;
        document.getElementById("status").innerHTML= 'Status: ' + data[0].status;
        document.getElementById("cover").src = data[0].img;

        title=data[0].id;
        totalEp = data[0].totalEpisodes;
        
        for(var i=1;i<=totalEp;i++) {
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            if(localStorage.getItem(`${id}-epNumber`)>=i) {
                li.setAttribute("class", `watched`);
            }
            li.setAttribute("onclick", `window.location.href='watch.html?id=${title}&ep=${i}';`);
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
        
    });


    function animeProgress() {
        localStorage.setItem(`${id}-epNumber`,)
    }
    
    function play() {
        if((localStorage.getItem(`${id}-epNumber`)==null) && (title!=undefined)) {
            window.location.href=`watch.html?id=${title}&ep=1`;

        } else {
            window.location.href=`watch.html?id=${title}&ep=${localStorage.getItem(`${id}-epNumber`)}`;
        }
    }