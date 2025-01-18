function createArticle(s, p){
    let main = document.getElementById("main");
    let Article = document.createElement("article");
    main.appendChild(Article);

    let image = document.createElement("img");
    image.src=s;
    image.id = "main-article-img";

    let price = document.createElement("p");
    price.innerHTML = "Price: ₹"+p;

    let div = document.createElement("div");
    // let span = document.createElement("span");
    // span.innerHTML="";
    let btn = document.createElement("button");
    btn.innerHTML = "Add To Cart";
    div.appendChild(btn);
    // div.appendChild(span);

    Article.appendChild(image);
    Article.appendChild(price);
    Article.appendChild(div);
}

let imgs = ['Photos/pizza.jpg', 'photos/paneer pizza.jpg', 'photos/onion pizza.jpg', "photos/samosa.jpg", 'photos/puff.png', 'photos/cutlet.jpg', 'photos/dosa.jpg', 'photos/paneer choudry.jpg', 'photos/paneer tikka.jpg'];
let price = [50, 60, 60, 20, 20, 20, 80, 60, 80];
for(let i = 0; i < imgs.length; i++){
    createArticle(imgs[i], price[i]);
}