function calculateGrade() {
    let mark = document.getElementById("marks").value;
    let grade;
    let result;


    if (mark === "") {
        result = "Please Enter a Mark";
    }
    else if(mark >100){
        result ="Invalid Input";
    }
    else{
       let marks =parseInt(mark);

    if (marks >=30){
    if (marks >= 90 && marks<=100) {
        grade = "A+";
    } else if (marks >= 80 && marks< 90) {
        grade = "A";
    } else if (marks >= 70 && marks< 80) {
        grade = "B+";
    } else if (marks >= 60 && marks< 70) {
        grade = "B";
    } else if (marks >= 50 && marks< 60) {
        grade = "C+";
    } else if (marks >= 40 && marks< 50) {
        grade = "C";
    } else if (marks >= 30 && marks< 40) {
        grade = "D+";
    }
    result =`Pass! \n Your grade is ${grade}`;
}
else if(marks >=20 && marks <30){
    grade ="D"
    result =`Fail \n Your grade is ${grade}`;
}
    else{
        grade ="E"
        result =`Fail \n Your grade is ${grade}`;

    }
    }
    document.getElementById("result").innerText = result;
}