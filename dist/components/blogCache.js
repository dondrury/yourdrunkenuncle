'use strict';

fetch('https://www.googleapis.com/blogger/v3/blogs/4196086360428346825/posts?key=AIzaSyDxP53eK9I0f5YDMZTEt7j-Dx3Of7GsE_c').then(function (response) {
  return response.json();
}).then(function (json) {
  console.log(json);
  blogEntries = json.items;
});