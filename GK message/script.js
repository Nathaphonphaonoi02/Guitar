var currentQuestion;

var timerInterval;
var score = 0;

function generateQuestion() {
    var num1 = Math.floor(Math.random() * 25) + 1;
    var num2 = Math.floor(Math.random() * 25) + 1;
    var operators = ['+', '-'];
    var operator = operators[Math.floor(Math.random() * operators.length)];

    switch (operator) {
        case '+':
            currentQuestion = num1 + ' ' + operator + ' ' + num2;
            break;
        case '-':
            currentQuestion = num1 + ' ' + operator + ' ' + num2;
            break;
      
    }

    document.getElementById('question').innerText = currentQuestion;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 100);
}

function checkAnswer() {
    var userAnswer = parseFloat(document.getElementById('answer').value);
    var correctAnswer = eval(currentQuestion);
    var resultElement = document.getElementById('result');
    ;

    clearInterval(timerInterval);

    if (userAnswer === correctAnswer) {
        resultElement.style.color = 'green';
        resultElement.innerText = 'คำตอบถูกต้อง!  เก่งมากอย่าใช้เครื่องคิดเลขล่ะ ' 
        score += 5; // กำหนดคะแนนที่จะได้เมื่อตอบถูก

        if (score >= 20) {
            endGame();
        } else {
            setTimeout(function() {
                generateQuestion();
            }, 2000); // หน่วงเวลา 2 วินาทีก่อนที่จะสร้างคำถามใหม่
        }
    } else {
        resultElement.style.color = 'red';
        resultElement.innerText = 'คำตอบไม่ถูกต้อง ลองใหม่อีกครั้ง';
        setTimeout(function() {
            resultElement.innerText = ''; // เคลียร์ข้อความผลลัพธ์ที่แสดงให้หายไป
            document.getElementById('answer').value = ''; // เคลียร์คำตอบใน input
            generateQuestion();
             // นับเวลาใหม่
           }, 2000); // หน่วงเวลา 2 วินาทีก่อนที่จะรีเซ็ตคำถามใหม่
    }

    document.getElementById('score').innerText = 'คะแนน: ' + score;
}



function endGame() {
    clearInterval(timerInterval);
    document.getElementById('result').innerText = 'คุณได้คะแนนเต็ม 20 คะแนน!';
    document.getElementById('answer').disabled = true;
    document.getElementById('question').innerText = 'สิ้นสุดเกม';
    document.getElementById('score').innerText = 'คะแนน: 20';
}
function resetGame() {
 clearInterval(timerInterval);
 document.getElementById('question').innerText = '';
 document.getElementById('answer').value = '';
 document.getElementById('result').innerText = '';
 document.getElementById('score').innerText = 'คะแนน: 0';
 document.getElementById('answer').disabled = false;
 score = 0;
 generateQuestion();
}
function handleKeyPress(event) {
 if (event.keyCode === 13) { // ตรวจสอบว่าเป็นปุ่ม Enter (key code 13)
     checkAnswer(); // เรียกใช้ฟังก์ชัน checkAnswer() เมื่อกดปุ่ม Enter
 }
}

generateQuestion();
