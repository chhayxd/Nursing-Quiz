//Menu Page
function startGame(level) {
    localStorage.setItem("quizLevel", level);
    window.location.href = "quiz.html";
}
function goToMenu() {
    window.location.href = "index.html";
}
let questionNumber = 0;

let chosenLevel = null;

function showLevelMenu() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("level-box").style.display = "block";
}

function selectLevel(level) {
    chosenLevel = level;

    document.querySelectorAll(".level-btn").forEach(btn => {
        btn.classList.remove("selected-level");
    });

    event.target.classList.add("selected-level");

    document.getElementById("play-btn").disabled = false;
}

function startSelectedLevel() {
    if (!chosenLevel) return;

    localStorage.setItem("quizLevel", chosenLevel);
    window.location.href = "quiz.html";
}

let selectedAnswer = null;
let answered = false;

//Questions Based on levels
const questions = [
    {
        level: "easy",
        question: "និយមន័យ កោសិកា?",
        answers: ["កោសិកា គឺជាសរីរាង្គដែលបូមឈាមទៅទូទាំងរាងកាយ។",
                 "កោសិកា គឺជាឯកតាតូចបំផុតនៃរចនាសម្ព័ន្ធ និងមុខងាររបស់សារពាង្គកាយរស់។",
                 "កោសិកា គឺជាសារធាតុចិញ្ចឹមដែលមាននៅក្នុងអាហារ។",
                 "កោសិកា គឺជាប្រព័ន្ធដង្ហើមដែលជួយផ្លាស់ប្តូរឧស្ម័ន។"],
        correct: "កោសិកា គឺជាឯកតាតូចបំផុតនៃរចនាសម្ព័ន្ធ និងមុខងាររបស់សារពាង្គកាយរស់។"
    },
    {
        level: "easy",
        question: "កាយវិភាគ នៃ កោសិកា មាន អ្វីខ្លះ?",
        answers: ["ភ្នាសកោសិកា (Cell Membrane) ស៊ីតូប្លាស (Cytoplasm) និងស្នូលកោសិកា (Nucleus)", 
            "បេះដូង សួត និងថ្លើម", 
            "ឆ្អឹង សាច់ដុំ និងសរសៃប្រសាទ", 
            "មាត់ ច្រមុះ និងត្រចៀក"],
        correct: "ភ្នាសកោសិកា (Cell Membrane) ស៊ីតូប្លាស (Cytoplasm) និងស្នូលកោសិកា (Nucleus)"
    },
    {
        level: "easy",
        question: "សរីរៈវិទ្យានៃកោសិកា មានអ្វីខ្លះ?",
        answers: [
            "ការរត់ ការនិយាយ ការស្តាប់ និងការមើលឃើញ",
            "ការដកដង្ហើម ការលូតលាស់ ការបែងចែកកោសិកា និងការបញ្ចេញកាកសំណល់",
            "ការបង្កើតឆ្អឹង ការបង្កើតសាច់ដុំ និងការលូតកម្ពស់",
            "ការបូមឈាម ការរំលាយអាហារ និងការដកដង្ហើមរបស់សួត"
        ],
        correct: "ការដកដង្ហើម ការលូតលាស់ ការបែងចែកកោសិកា និងការបញ្ចេញកាកសំណល់"
    },
    {
        level: "easy",
        question: "ប្រភេទនៃកោសិកាមានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?",
        answers: ["កោសិកាមាន ២ ប្រភេទ គឺ ប្រូការីយ៉ូត និង យូការីយ៉ូត",
            "កោសិកាមាន ៣ ប្រភេទ គឺ កោសិកាឈាម កោសិកាស្បែក និង កោសិកាឆ្អឹង",
            "កោសិកាមាន ៤ ប្រភេទ គឺ រឹង ទន់ រាវ និង ឧស្ម័ន",
            "កោសិកាមាន ៥ ប្រភេទ បែងចែកតាមទំហំ"],
        correct: "កោសិកាមាន ២ ប្រភេទ គឺ ប្រូការីយ៉ូត និង យូការីយ៉ូត"
    },
    {
        level: "easy",
        question: "ការបំបែកខ្លួននៃកោសិកា មានសារប្រយោជន៍អ្វី? ការបំបែកខ្លួនកោសិកាមានប៉ុន្មានយ៉ាង?",
        answers: ["ជួយឱ្យបេះដូងបូមឈាមបានលឿន និងមាន ១ យ៉ាង ប៉ុណ្ណោះ",
            "ជួយឱ្យឆ្អឹងរឹងមាំ និងមាន ៤ យ៉ាង គឺ ឈាម សាច់ដុំ សរសៃប្រសាទ និងស្បែក",
            "ជួយឱ្យកោសិកាផលិតអាហារបានកាន់តែច្រើន និងមាន ៣ យ៉ាង គឺ ដកដង្ហើម រំលាយអាហារ និងបញ្ចេញកាកសំណល់",
            "ជួយឱ្យសារពាង្គកាយលូតលាស់ ជួសជុលកោសិកាខូច និងបន្តពូជ។ ការបំបែកខ្លួនកោសិកាមាន ២ យ៉ាង គឺ មីតូស (Mitosis) និង ម៉េយ៉ូស (Meiosis)"],
        correct: "ជួយឱ្យសារពាង្គកាយលូតលាស់ ជួសជុលកោសិកាខូច និងបន្តពូជ។ ការបំបែកខ្លួនកោសិកាមាន ២ យ៉ាង គឺ មីតូស (Mitosis) និង ម៉េយ៉ូស (Meiosis)"
    },
    {
        level: "easy",
        question: "ចូរពន្យល់ មីតូស, មេយ៉ូស។",
        answers: ["មីតូស និង មេយ៉ូស គឺជាផ្នែកនៃភ្នាសកោសិកា ដែលគ្រប់គ្រងការចេញចូលសារធាតុ។",
            "មីតូស បង្កើតកោសិកាកូន ១០ និង មេយ៉ូស បង្កើតកោសិកាកូន ២០។",
            "មីតូស គឺការបំបែកខ្លួនកោសិកាដើម្បីលូតលាស់ និងជួសជុលជាលិកា បង្កើតកោសិកាកូន ២ ដែលមានចំនួនក្រូម៉ូសូមដូចកោសិកាមេ។ មេយ៉ូស គឺការបំបែកខ្លួនដើម្បីបង្កើតកោសិកាបន្តពូជ បង្កើតកោសិកាកូន ៤ ដែលមានចំនួនក្រូម៉ូសូមពាក់កណ្តាលនៃកោសិកាមេ។",
            "មីតូស គឺការដកដង្ហើមរបស់កោសិកា ហើយ មេយ៉ូស គឺការរំលាយអាហារក្នុងកោសិកា។"],
        correct: "មីតូស គឺការបំបែកខ្លួនកោសិកាដើម្បីលូតលាស់ និងជួសជុលជាលិកា បង្កើតកោសិកាកូន ២ ដែលមានចំនួនក្រូម៉ូសូមដូចកោសិកាមេ។ មេយ៉ូស គឺការបំបែកខ្លួនដើម្បីបង្កើតកោសិកាបន្តពូជ បង្កើតកោសិកាកូន ៤ ដែលមានចំនួនក្រូម៉ូសូមពាក់កណ្តាលនៃកោសិកាមេ។"
    },
    {
        level: "easy",
        question: "តួនាទីធាតុ នៃ កោសិកាមាន អ្វីខ្លះ?",
        answers: ["ភ្នាសកោសិកា គ្រប់គ្រងការចេញចូលសារធាតុ, ស៊ីតូប្លាស ផ្ទុកអង្គធាតុផ្សេងៗ, និងស្នូលកោសិកា គ្រប់គ្រងសកម្មភាពកោសិកា និងផ្ទុក DNA។",
            "ភ្នាសកោសិកា បូមឈាម, ស៊ីតូប្លាស ជួយដកដង្ហើម, និងស្នូលកោសិកា ជួយរំលាយអាហារ។",
            "ភ្នាសកោសិកា បង្កើតឆ្អឹង, ស៊ីតូប្លាស បង្កើតសាច់ដុំ, និងស្នូលកោសិកា បង្កើតស្បែក។",
            "ភ្នាសកោសិកា ជួយស្តាប់សំឡេង, ស៊ីតូប្លាស ជួយមើលឃើញ, និងស្នូលកោសិកា ជួយដើរ។"],
        correct: "ភ្នាសកោសិកា គ្រប់គ្រងការចេញចូលសារធាតុ, ស៊ីតូប្លាស ផ្ទុកអង្គធាតុផ្សេងៗ, និងស្នូលកោសិកា គ្រប់គ្រងសកម្មភាពកោសិកា និងផ្ទុក DNA។"
    },
    {
        level: "easy",
        question: "កាយវិភាគ នៃ កោសិកា មាន អ្វីខ្លះ?",
        answers: ["មាត់, ច្រមុះ និង ត្រចៀក",
            "ឆ្អឹង, សាច់ដុំ និង សរសៃប្រសាទ",
            "បេះដូង, សួត និង ថ្លើម។",
            "ភ្នាសកោសិកា (Cell Membrane), ស៊ីតូប្លាស (Cytoplasm) និង ស្នូលកោសិកា (Nucleus)"],
        correct: "ភ្នាសកោសិកា (Cell Membrane), ស៊ីតូប្លាស (Cytoplasm) និង ស្នូលកោសិកា (Nucleus)"
    },
    {
        level: "easy",
        question: "ការបំបែក ខ្លួននៃកោសិកា មាន សារប្រយោជន៍ អ្វី? ការបំបែក ខ្លួន កោសិកា មាន ប៉ុន្មាន យ៉ាង?",
        answers: ["ជួយឱ្យកោសិកាផលិតអាហារបានកាន់តែច្រើន និងមាន ៣ យ៉ាង គឺ ដកដង្ហើម រំលាយអាហារ និងបញ្ចេញកាកសំណល់",
            "ជួយឱ្យសារពាង្គកាយលូតលាស់ ជួសជុលកោសិកាខូច និងបន្តពូជ។ ការបំបែកខ្លួនកោសិកាមាន ២ យ៉ាង គឺ មីតូស (Mitosis) និង មេយ៉ូស (Meiosis)",
            "ជួយឱ្យឆ្អឹងរឹងមាំ និងមាន ៤ យ៉ាង គឺ ឈាម សាច់ដុំ សរសៃប្រសាទ និងស្បែក។",
            "ជួយឱ្យបេះដូងបូមឈាមបានលឿន និងមាន ១ យ៉ាងប៉ុណ្ណោះ"],
        correct: "ជួយឱ្យសារពាង្គកាយលូតលាស់ ជួសជុលកោសិកាខូច និងបន្តពូជ។ ការបំបែកខ្លួនកោសិកាមាន ២ យ៉ាង គឺ មីតូស (Mitosis) និង មេយ៉ូស (Meiosis)"
    },
    {
        level: "easy",
        question: "ចូរពន្យល់ មីតូស, មេយ៉ូស។",
        answers: ["មីតូស បង្កើតកោសិកាកូន ១០ និង មេយ៉ូស បង្កើតកោសិកាកូន ២០។",
            "មីតូស និង មេយ៉ូស គឺជាផ្នែកនៃភ្នាសកោសិកា ដែលគ្រប់គ្រងការចេញចូលសារធាតុ។",
            "មីតូស គឺជាការបំបែកខ្លួនកោសិកាសម្រាប់ការលូតលាស់ និងជួសជុលជាលិកា បង្កើតកោសិកាកូន ២។ មេយ៉ូស គឺជាការបំបែកខ្លួនដើម្បីបង្កើតកោសិកាបន្តពូជ បង្កើតកោសិកាកូន ៤ ដែលមានក្រូម៉ូសូមពាក់កណ្តាល។",
            "មីតូស គឺជាការដកដង្ហើមរបស់កោសិកា ហើយ មេយ៉ូស គឺជាការរំលាយអាហាររបស់កោសិកា។"],
        correct: "មីតូស គឺជាការបំបែកខ្លួនកោសិកាសម្រាប់ការលូតលាស់ និងជួសជុលជាលិកា បង្កើតកោសិកាកូន ២។ មេយ៉ូស គឺជាការបំបែកខ្លួនដើម្បីបង្កើតកោសិកាបន្តពូជ បង្កើតកោសិកាកូន ៤ ដែលមានក្រូម៉ូសូមពាក់កណ្តាល។"
    },
];

let score = 0;
let usedQuestions = [];
let selectedLevel = localStorage.getItem("quizLevel") || "easy";
let levelQuestions = questions.filter(q => q.level === selectedLevel);


function getRandomQuestion() {
    if (usedQuestions.length === levelQuestions.length) {
        endGame();
        return;
    }

    questionNumber++;

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * levelQuestions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    showQuestion(levelQuestions[randomIndex]);
}

function showQuestion(q) {
    answered = false;
    selectedAnswer = null;

    document.getElementById("progress").textContent =
    "Question " + questionNumber + " / " + levelQuestions.length;
    
    document.getElementById("question").textContent =
    questionNumber + ". " + q.question;

    document.getElementById("confirm-btn").style.display = "inline-block";
    document.getElementById("next-btn").style.display = "none";

    const answerButtons = document.querySelectorAll(".answer-btn");

    answerButtons.forEach((button, index) => {
        button.textContent = q.answers[index];
        button.disabled = false;
        button.className = "answer-btn";

        button.onclick = function () {
            answerButtons.forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
            selectedAnswer = button.textContent;
        };
    });
}

function confirmAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer first!");
        return;
    }

    answered = true;

    const currentQuestion = levelQuestions[usedQuestions[usedQuestions.length - 1]];
    const answerButtons = document.querySelectorAll(".answer-btn");

    answerButtons.forEach(button => {
    button.classList.remove("selected");
    button.disabled = true;

    if (button.textContent === currentQuestion.correct) {
        button.classList.add("correct");
    }

    if (
        button.textContent === selectedAnswer &&
        selectedAnswer !== currentQuestion.correct
    ) {
        button.classList.add("wrong");
    }
});

    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }

    document.getElementById("score").textContent = "Score: " + score;

    document.getElementById("confirm-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
    if (!answered) {
        alert("Please select an answer first!");
        return;
    }

    getRandomQuestion();
}

function endGame() {
    document.getElementById("question").textContent = "Game Finished!";
    document.getElementById("answers").style.display = "none";

    document.getElementById("next-btn").style.display = "none";

    document.getElementById("score").textContent =
        "Final Score: " + score + "/" + levelQuestions.length;

    document.getElementById("menu-btn").style.display = "block";
}

getRandomQuestion();