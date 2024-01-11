
    setInterval(function a(){
    var number = Math.floor(Math.random()*100)
    var number1 = Math.floor(Math.random()*100)
    var number2 = Math.floor(Math.random()*100)
        

    document.getElementById('nhietdoValue').innerHTML = number + "℃"
    document.getElementById('doamValue').innerHTML = number1 + "%"
    document.getElementById('anhsangValue').innerHTML = number2 + "lux"


    function ChangeColor(){
        if(number< 20){
            document.getElementById(`col1`).style.background = '#FFF9B0'
        }else if (number >= 20 && number<50){
            document.getElementById(`col1`).style.background = '#CCFF66'
        }else{
            document.getElementById(`col1`).style.background = '#FF884B'
            
        }
    }
    function ChangeColor1(){
    if(number1< 33){
        document.getElementById(`col2`).style.background = '#72FFFF'
    }else if (number1 >= 33 && number1<66){
        document.getElementById(`col2`).style.background = '#00CC99'
    }else{
        document.getElementById(`col2`).style.background = '#0096FF'
        
    }
    }
    function ChangeColor2(){
        if(number2< 33){
            document.getElementById(`col3`).style.background = '#FEF9A7'
        }else if (number2 >= 33 && number2<66){
            document.getElementById(`col3`).style.background = '#FAC213'
        }else{
            document.getElementById(`col3`).style.background = '#F77E21'
        }
    }




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
