const ENV = {};


ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'http://kh-booklist.herokuapp.com/';
ENV.developmentApiUrl = 'http://localhost:3000/';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;