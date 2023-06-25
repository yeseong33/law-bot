// // contents 생성
// var request = new XMLHttpRequest();
// request.open('POST', 'http://localhost:3000/make-word/content');

// var data = {
//     contents: '',
//     filePath: "file path"
// }
// // 보내는 본문의 Content-Type을 JSON으로 설정합니다.
// request.setRequestHeader('Content-Type', 'application/json');

// request.send(JSON.stringify(a));
// request.onload = function() {
//     console.log(JSON.parse(request.response));
// }



// 함수
function changeContent(content, id) {
    let test = document.getElementById(id);
    test.innerHTML = content
}

// 변경할 정보 가져오는 로직
// let change_content = dataToChange.contents 
// let change_id = 'reason'

// changeContent(change_content, change_id)
changeContent('인터넷 상에서 저에게 욕을 했습니다.', 'reason')

// html 전문 저장
const htmlContent = document.documentElement.outerHTML;

console.log(htmlContent)

// 백엔드로 내용 전달
var request = new XMLHttpRequest();
request.open('POST', 'http://localhost:3000/make-word/');

var a = {
    htmlString: htmlContent,
    filePath: "./word/exmaple.docx"
}
// 보내는 본문의 Content-Type을 JSON으로 설정합니다.
request.setRequestHeader('Content-Type', 'application/json');

request.send(JSON.stringify(a));
request.onload = function() {
    console.log(JSON.parse(request.response));
}

