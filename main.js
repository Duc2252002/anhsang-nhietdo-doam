
    setInterval(function a(){
    var number = Math.floor(Math.random()*100)
    var number1 = Math.floor(Math.random()*100)
    var number2 = generateRandomNumber();
        

    document.getElementById('nhietdoValue').innerHTML = number + "℃"
    document.getElementById('doamValue').innerHTML = number1 + "%"
    document.getElementById('anhsangValue').innerHTML = number2 + "lux"


    
    ChangeColor(number)
    ChangeColor1(number1)
    ChangeColor2(number2)


    nhiet_do.push(number); //thêm 1 giá trị vào cuối mảng
    nhiet_do.shift(); // xóa 1 giá trị ở đầu mảng
    


    do_am.push(number1);
    do_am.shift();


    anh_sang.push(number2);
    anh_sang.shift();

    totalChart.update();
    
},2000)
function generateRandomNumber() {
    // Sinh số ngẫu nhiên dựa trên trạng thái đèn
    if (isLightOn) {
        // Nếu đèn bật, sinh từ 50 đến 100
        return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    } else {
        // Nếu đèn tắt, sinh từ 0 đến 49
        return Math.floor(Math.random() * 50);
    }
}

// Thêm hàm để bật/tắt đèn khi nhấn nút
function toggleLight() {
    isLightOn = !isLightOn; // Đảo ngược trạng thái đèn
    var bulbImage = document.getElementById('myImage');
    bulbImage.src = isLightOn ? 'https://www.w3schools.com/js/pic_bulbon.gif' : 'https://www.w3schools.com/js/pic_bulboff.gif';
}

// khai báo mảng
var nhiet_do = [0,0,0,0,0,0,0,0,0,0,0,0];
var do_am = [0,0,0,0,0,0,0,0,0,0,0,0];
var anh_sang = [0,0,0,0,0,0,0,0,0,0,0,0];
var xValues = [100,200,300,400,500,600,700,800,900,1000];

    // khai bao Chart
    var totalChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [
                
            { 
            data: nhiet_do ,
            borderColor: "red",
            fill: false
            }, 
            
            { 
            data: do_am,
            borderColor: "green",
            fill: false
            }, 
            
            { 
            data: anh_sang ,
            borderColor: "blue",
            fill: false
            }
        ]
        },
        options: {
            legend: {display: false}
        }
    });
    function ChangeColor(value) {
        var element = document.getElementById('col1');
        if (value < 20) {
            element.style.background = '#FFF9B0';
        } else if (value >= 20 && value < 50) {
            element.style.background = '#CCFF66';
        } else {
            element.style.background = '#FF884B';
        }
    }
    
    function ChangeColor1(value) {
        var element = document.getElementById('col2');
        if (value < 33) {
            element.style.background = '#72FFFF';
        } else if (value >= 33 && value < 66) {
            element.style.background = '#00CC99';
        } else {
            element.style.background = '#0096FF';
        }
    }
    
    function ChangeColor2(value) {
        var element = document.getElementById('col3');
        if (value < 33) {
            element.style.background = '#FEF9A7';
        } else if (value >= 33 && value < 66) {
            element.style.background = '#FAC213';
        } else {
            element.style.background = '#F77E21';
        }
    }
