$(document).ready(function(){
    
    //Slider

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        responsive: true,
        pager: true
      });

    //Post
      var posts = [
        {
            title: 'Prueba de Titulo 1',
            date: 'Publicado el; '+moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut architecto exercitationem cum voluptates, repellendus eaque autem libero quae repellat aspernatur esse rem minima dolorum? Esse vero perferendis molestiae voluptatem eaque!'
        },
        {
            title: 'Prueba de Titulo 2',
            date: 'Publicado el; '+moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut architecto exercitationem cum voluptates, repellendus eaque autem libero quae repellat aspernatur esse rem minima dolorum? Esse vero perferendis molestiae voluptatem eaque!'
        },
        {
            title: 'Prueba de Titulo 3',
            date: 'Publicado el; '+moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut architecto exercitationem cum voluptates, repellendus eaque autem libero quae repellat aspernatur esse rem minima dolorum? Esse vero perferendis molestiae voluptatem eaque!'
        },
        {
            title: 'Prueba de Titulo 4',
            date: 'Publicado el; '+moment().format("Do MMMM YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut architecto exercitationem cum voluptates, repellendus eaque autem libero quae repellat aspernatur esse rem minima dolorum? Esse vero perferendis molestiae voluptatem eaque!'
        }
      ]
      posts.forEach((item, index) => {
        var post =`
            <article class="post">
                <h2>${item.title}</h2>
                    <p class="date">${item.date}</p>
                    <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            `;

            $("#posts").append(post);
      });

      var tema = $("#tema");

      $("#green").click(function(){
        tema.attr("href","css/green.css");
      });
      $("#red").click(function(){
        tema.attr("href","css/red.css");
      });
      $("#blue").click(function(){
        tema.attr("href","css/blue.css");
      });

      //Scroll Arriba de la web 
      $('.subir').click(function(){

        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
      
});