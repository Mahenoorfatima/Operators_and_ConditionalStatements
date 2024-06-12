// Get user to input a number using prompt ("Enter a Number:") check if the number is a multiple of 5 or not

let num1 = prompt("Enter a Number")

if (num1 % 5 === 0){
    console.log(num1,"is a multple of 5")
} else{
    console.log(num1, "is not multipe of 5")
}


//Student Grade Checking

let num = prompt("Enter your Scores!");

if (num >= 90 && num <= 100){
    console.log(num, "its your Number & Your grade is A");
} else if(num >= 70 && num <= 89){
    console.log(num, "its your Number & Your grade is B");
} else if(num >= 60 && num <= 69){
    console.log(num, "its your Number & Your grade is c");
} else if(num >= 50 && num <= 59){
    console.log(num, "its your Number & Your grade is D");
} else if (num >= 0 && num <= 49){
    console.log(num, "its your Number & Your grade is F");
}

// Another Way to Save this Question

let score = 99;
let grade; 

if (score >= 90 && score <= 100){
    grade= "A"
} else if(score >= 70 && score <= 89){
    grade= "B"
} else if(score >= 60 && score <= 69){
    grade= "c"
} else if (score >= 50 && score <= 59){
    grade= "D"
} else if (score >= 0 && score <= 49){
    grade= "F"
}


console.log("Your Grade was:" , grade);


// Another Style of coding
let score1 = prompt("Enter Your Scores (0-100):");
let grade1; 

if (score1 >= 90 && score1 <= 100){
    grade1= "A"
} else if(score1 >= 70 && score1 <= 89){
    grade1= "B"
} else if(score1 >= 60 && score1 <= 69){
    grade1= "c"
} else if (score1 >= 50 && score1 <= 59){
    grade1= "D"
} else if (score1 >= 0 && score1 <= 49){
    grade1= "F"
}


console.log("According to your Score, Your Grade was:" , grade1);