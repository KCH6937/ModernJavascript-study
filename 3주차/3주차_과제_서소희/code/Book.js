const Movie = (function () {
  function Movie(title, director = undefined, year = undefined) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  Movie.prototype.printInfo = function () {
    console.log(`${this.title}(${this.year ?? "-"}) - ${this.director}`);
  };
  return Movie;
})();

const movie = new Movie("Avengers", "Sohui", "2100");
movie.printInfo();

movie.printInfo = function () {
  console.log(
    `${this.title}(${this.year ?? "-"}) is written by ${this.director}`
  );
};
movie.printInfo();
