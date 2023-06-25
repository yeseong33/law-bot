// 폼 요소 가져오기
var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

var dataToChange = {}

// submit 이벤트 핸들러 함수
function handleSubmit(event) {
  event.preventDefault();
  // 폼 데이터 가져오기
  var formData = new FormData(form);
  var data = Object.fromEntries(formData);
  // let jsonData = JSON.stringify(data);

  // html 내용 변경
  // var ret = window.open("./petition.html", "width=600, height=800, left=600, top =600");
  var ret = window.open("./petition.html", "ddd",'width=500, height=700, scrollbars=yes')

}

