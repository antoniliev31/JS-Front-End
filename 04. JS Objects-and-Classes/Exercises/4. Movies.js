function solve(input) {
    let movies = [];

    input.forEach(cmd => {
        if (cmd.includes("addMovie")) {
            const [_, name] = cmd.split("addMovie ")
            movies.push({
                name,
                // director: null,
                // date: null,
            })                       
        } else if (cmd.includes("directedBy"))  {
            const [movieName, directorName] = cmd.split(" directedBy ")
            const movie = movies.find((m) => m.name === movieName)
            
            if(movie){
                movie.director = directorName;
            }
            
        } else if (cmd.includes("onDate")){
            const [movieName, movieDate] = cmd.split(" onDate ")
            const movie = movies.find((m) => m.name === movieName)
            
            if(movie){
                movie.date = movieDate;
            }
        }
    });

    movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)))
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );