var grade = 95;
switch (true) {
	case (grade <= 100 && grade >=90):
		console.log("You got an A :) :)"); 
		break;
	case (grade <= 89 && grade >=80):
		console.log("You got an B :)"); 
		break;
	case (grade <= 79 && grade >=70):
		console.log("You got an C :/"); 
		break
	case (grade <= 69 && grade >=60):
		console.log("You got an D :("); 
		break;
	case (grade <= 59 && grade >=50):
		console.log("You got an F >:("); 
		break;
	default:
		console.log('You should come to class');
}
