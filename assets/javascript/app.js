//create array of questons and answers
//add images to each question and answer
//create variable for counter
//create variable to push counter into
//create variable to push questions into
//create loop to go through questions

var questions = [{
    question: "Where does the show take place?",
    answers: ["New Jersey", "Manhattan", "Scranton", "Pittsburgh"],
    rightAnswer: "Scranton",
    gif: "../images/dwight-scranton.gif",
}, {
    question:"What county in Pennsylvania is Dunder Mifflin Scranton branch located?",
    answers: ["Westmoreland County", "Lackawanna County", "Allegheny County","Lehigh County"],
    rightAnswer: "Lackawanna County",
    gif: "../images/michaelscott2.gif",
}, {
    question:"Who was Assistant to the Regional Manager, but was promoted to Assistant Regional Manager?",
    answers: ["Dwight","Toby", "Meredith", "Phyllis"],
    rightAnswer: "Dwight",
    gif: "../images/dwight.gif",
}, {
    question:"What does Kevin bring into the office that he spills all over the floor?",
    answers: ["Soup", "Spaghetti and Meatballs", "Teriyaki Chicken", "Pot of Chili"],
    rightAnswer: "Pot of Chili",
    gif: "../images/kevin-chili.gif",
}, {
    question: "What objects in Angela's freezer convinced her that Dwight had killed her cat?",
    answers: ["Kitty litter", "Bag of frozen french fries", "Blood", "Chew toy"],
    rightAnswer: "Bag of french fries",
    gif: "../images/angela.gif",
}, {
    question: "What is the web address of Creed's blog?",
    answers: ["www.creedsthoughts.gov.www/creedsthoughts", "creed.com", "creedsimagination.gov/creedsimagination", "creedatdundermifflin.com"],
    rightAnswer: "www.creedsthoughts.gov.www/creedsthoughts",
    gif: "../images/creed.gif",
}, {
    question:"What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'?",
    answers: ["Wine and Cheese Club", "Fight Club", "The Secret Dunder Mifflin Club", "Finer Things Club"],
    rightAnswer: "Finer Things Club",
    gif: "../images/oscar.gif",
}, {
    question:"What substance does Jim put office supplies owned by Dwight and Andy into?",
    answers: ["Ketchup", "Ranch", "Jello", "Soup"],
    rightAnswer: "Jello",
    gif: "../images/jello.gif",
}, {
    question:"What does Michael burn his foot on when getting out of bed?",
    answers: ["Hot plate", "George Foreman grill", "Clothing iron", "A lit cigarette"],
    rightAnswer: "George Foreman grill",
    gif: "../images/michael-foot.gif",
}, {
    question:"What is the name of the employee who started out as 'the temp' in the office?",
    answers: ["Ryan Howard", "Erin Hannon", "Stanley Hudson", "Ryan Bittala"],
    rightAnswer: "Ryan Howard",
    gif: "../images/ryan.gif",
}, {
    question:"Dwight owns and runs a farm in his spare time. What does this farm primarily produce?",
    answers: ["Onions", "Carrots", "Corn", "Beets"],
    rightAnswer: "Beets",
    gif: "../images/dwight3.gif",
}, {
    question:"At Jim and Pam's wedding in the 'Niagara' episode, what was Kevin wearing on his feet?",
    answers: ["Dress shoes", "Socks", "Tissue boxes", "Velcro sandals"],
    rightAnswer: "Tissue boxes",
    gif: "../images/kevin-tissuebox.gif",
}, {
    question:"This character became Jim's love interest after he moved to the Stamford branch. Who left the office to run her own branch when she discovered that Jim was still in love with Pam?",
    answers: ["Karen Filipelli", "Holly Flax", "Andy Bernard", "Carol Filipelli"],
    rightAnswer: "Karen Filipelli",
    gif: "../images/karen.gif",
}, {
    question:"What did Jim buy for $20 at a flea market, which sends Dwight on a hunt from the back of his computer all the way up a telephone pole?",
    answers: ["200 feet of yarn", "500 feet of red wire", "300 foot extension chord", "A candy trail"],
    rightAnswer: "500 feet of red wire",
    gif: "../images/dwight2.gif",
}, {
    question:"What is the name of Michael Scott's boss and later girlfriend?",
    answers: ["Holly Flax", "Carol Stills", "Phyllis Vance", "Jan Levinson-Gould"],
    rightAnswer: "Jan Levinson-Gould",
    gif: "../images/jan.gif",
}, {
    question:"Who runs the warehouse below the Dunder-Mifflin offices?",
    answers: ["Roy", "Darryl", "Michael", "Bob Vance"],
    rightAnswer: "Darryl",
    gif: "../images/darryl.gif",
}, {
    question:"In the episode 'Weight Loss'; which member of the office tries so hard to lose weight that they buy a tape worm from Creed?",
    answers: ["Pam", "Meredith", "Angela", "Kelly"],
    rightAnswer: "Kelly",
    gif: "../images/kelly.gif",
}, {
    question:"Who is the Human Resources representative at Dunder-Mifflin and Michael Scott’s worst enemy?",
    answers: ["Holly", "Ryan", "Toby", "Oscar"],
    rightAnswer: "Toby",
    gif: "../images/michael-toby.gif",
}, {
    question:"What is the the name of the annual employee awards night on the show?",
    answers: ["The Dunder Mifflin Awards", "The Dundies", "The Michael Scott Special Awards", " The Dunder Mifflies"],
    rightAnswer: "The Dundies",
    gif: "../images/dundies.gif",
}, {
    question:'When Darryl is asking for a raise in "The Negotiation" episode, what does Darryl notice Michael is wearing?',
    answers: ["A woman's suit", "A toupe", "Earrings", "Women's underwear"],
    rightAnswer: "A woman's suit",
    gif: "../images/michaelscott.gif",
}, 
];
console.table(questions);

var question = questions;
var timer = 20;
var questionArea = $("#trivia-questions");
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;

function countdown () {
  timer--;
  $("#counter").html(timer);
  
  if (timer === 0) {;
      timesUp ();
  }
};

function loadQuestion () {
    timer = setInterval(timer, 1000);
    questionArea.html("<h2>" + questions[currentQuestion].question + "</h2>");
    for ( var i = 0; i<questions[currentQuestion].answers.length; i++) {
     questionArea.append('<button class="answer-button" id="button"' + 'data-name="' + questions[currentQuestion].answers[i] + '">' + questions[currentQuestion].answers[i] + "</button>");
    }
}
function nextQuestion () {
    timer = 20;
    $("#counter").html(timer);
    currentQuestion++;
    loadQuestion ();
}
nextQuestion ();
