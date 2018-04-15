

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    console.log('init index page');
    app.Book.all.map(task => $('#book-list').append(task.toHtml()));
  }

module.bookView = bookView;

})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});