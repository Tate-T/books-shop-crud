const t=document.querySelector(".books-shop");fetch("http://localhost:3000/books").then(t=>t.json()).then(e=>{t.innerHTML=e.map(t=>`<li>
        <h2>${t.title}</h2>
        <p>${t.price}</p>
        <img src="${t.image}" alt="${t.title}">
        <p>${t.author}</p>
    </li>`)});
//# sourceMappingURL=books-shop-crud.1702b65b.js.map
