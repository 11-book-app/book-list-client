

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    console.log('init index page');
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
   $('#book-count').text(app.Book.numBooks);
  }


module.bookView = bookView;

})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});