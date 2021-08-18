const postSection = document.getElementById("postSection");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json()) 
.then(posts => {    

 
   posts.forEach(post => {
       let title = document.createTextNode(post.title);
        let postitle = document.createElement("h1");

if(post.completed == true){
    postitle.classList.add("true");
}   else {
    postitle.classList.add("false");
}
postitle.appendChild(title);
postSection.appendChild(createElement);


   });
})










        