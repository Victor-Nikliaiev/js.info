// import alert from "alert";

import alert from "alert";

// class User {
//   static staticMethod() {
//     alert(this === User);
//   }
// }

// User.staticMethod();

// class Article {
//   static publisher = "Victor Onlight";

//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }

//   static createTodays() {
//     return new this("Today's digest", new Date());
//   }
// }

// let articles = [
//   new Article("JavaScript", new Date(2022, 2, 21)),
//   new Article("CSS", new Date(2018, 1, 12)),
//   new Article("Python", new Date(2022, 2, 1)),
// ];

// articles.sort(Article.compare);
// console.table(articles);

// let article = Article.createTodays();
// // alert(article.title);
// alert(Article.publisher);

class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

const rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run();
console.log(Rabbit.planet);
