'use strict';

// use app = app || {};
// (function(module){
//   const bookView = {}

// })(app)


// let template = Handlebars.compile($('#book-template').text());

// allBooks().forEach(stat => $('.book-data').append(template(stat)));

// var fetchAll = () => {
//   $.get(/)
// };


var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = () => {
    app.Book.all.map(book => $('#book-data').append(book.toHtml()));
  };

  module.bookView = bookView;


})(app);