fetch("https://api.jikan.moe/v4/anime?q=naruto")
    .then((result)=>result.json())
    .then((data)=>{
        dados = data.data
        dados.forEach(e => {
            let card = "<div class='card'>"
            card += "<img src='" + e.images.jpg.image_url + "' >"
            card += "<h2>" + e.title + "</h2>"
            if(e.year != null){
                card += "<h4>" + e.year + "</h4>"
            }
            if(e.title_japonese != null){
                card += "<h3>" + e.title_japanese + "</h3>"
            }
            if(e.synopsis != null){
                card += "<p>" + e.synopsis.substring(0,150) + "...</p>"           
             }
             if(e.url != null){
                card += "<a href= '" + e.url +"'>Saiba Mais</a>"        
             }
           
            
            document.querySelector(".lista-animes").innerHTML += card
        });
    })