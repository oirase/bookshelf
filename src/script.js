/*eslint no-console: "off"*/
document.getElementById('alert').addEventListener('click', function () {
   alert(`document.getElementByIdのalert`);
});

$('#alert').on('click', function () {
  console.log('jQueryのalert');
  alert('jQueryのalert');
});

const a = {};
a.title = 6;
//a["title"] = 8;
//  comment
