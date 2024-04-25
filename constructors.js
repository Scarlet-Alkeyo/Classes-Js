class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}
const toyota = new Car("Prado", "Harrier", 2003, true);
console.log(toyota.isAvailable);
toyota.toggleAvailability();I

console.log(toyota.isAvailable);




// question2

class Question {
    constructor(text,options,correctAnswer){
            this.text = text;
            this.options = options;
            this.correctAnswer = correctAnswer
    }
    checkAnswer(userName){
        return userName === this.correctI
        Answer;
    }
 }
 const question = new Question(
    "What is the capital city in Kenya?",
 ["Nairobi","Narok","Nakuru","Adis Ababa"],

);
console.log(question.checkAnswer("Nakuru"));
console.log(question.checkAnswer("Narok"));


    
   class quiz {
    constructor (){
        this.questions = [];

        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question)
    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(userName){
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if(currentQuestion.checkAnswer(userName)){
            this.score++;
        }
    }
   }
