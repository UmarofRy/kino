/** @format */

let movies = [
   {
      id: 1,
      name: "Forsaj",
      ganre: "Boyevik",
      rating: 8,
      year: 2012,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eqUT2wkPdJaGxzJlQ5HVYT4_olBZ3udySw&s",
   },
   {
      id: 2,
      name: "Harry Boter",
      ganre: "Fantastic",
      rating: 9.5,
      year: 2014,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
   },
   {
      id: 3,
      name: "Taxi",
      ganre: "Comedy",
      rating: 8.5,
      year: 2010,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFsQfXYZzTV7GKy-TcKC9U5P0u3B6FZBFFw&s",
   },
   {
      id: 4,
      name: "Boyka",
      ganre: "Boyevik",
      rating: 9.5,
      year: 2019,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Dk-8LegvBmPoIwpSkJuAY4UGfiXgo_edyw&s",
   },
];

function hammasi(movieArray) {
   let div1 = document.querySelector("#movies");
   div1.innerHTML = "";
   movieArray.map((kino) => {
      div1.innerHTML += `
            <div class="movie">
                <img src="${kino.url}" alt="${kino.name}">
                <h3>${kino.name}</h3>
                <p>Genre: ${kino.ganre}</p>
                <p>Rating: ${kino.rating}</p>
                <p>Year: ${kino.year}</p>
            </div>
      `;
   });
}

let qidir = () => {
   let inp = document.querySelector("input").value.toLowerCase();
   let newKino = movies.filter((movie) =>
      movie.name.toLowerCase().includes(inp)
   );
   hammasi(newKino);
};

hammasi(movies);
