const allQuestions = [
  {
    question: "Who is the all-time leading run scorer for RCB?",
    options: ["AB de Villiers", "Chris Gayle", "Virat Kohli", "Faf du Plessis"],
    answer: "Virat Kohli"
  },
  {
    question: "Which bowler took a hat-trick for RCB in IPL history?",
    options: ["Harshal Patel", "Samuel Badree", "Yuzvendra Chahal", "Mitchell Starc"],
    answer: "Samuel Badree"
  },
  {
    question: "When was RCB founded?",
    options: ["2008", "2009", "2007", "2010"],
    answer: "2008"
  },
  {
    question: "What is RCB’s home ground?",
    options: ["Wankhede", "Chinnaswamy", "Eden Gardens", "Feroz Shah Kotla"],
    answer: "Chinnaswamy"
  },
  {
    question: "Who is the current RCB women’s team captain (2024)?",
    options: ["Smriti Mandhana", "Harmanpreet Kaur", "Ellyse Perry", "Deepti Sharma"],
    answer: "Smriti Mandhana"
  },
  {
    question: "What’s RCB’s team color?",
    options: ["Blue & Red", "Red & Black", "Yellow & Green", "Orange & Purple"],
    answer: "Red & Black"
  },
  {
    question: "Who scored the fastest century in IPL history for RCB?",
    options: ["Chris Gayle", "Virat Kohli", "AB de Villiers", "KL Rahul"],
    answer: "Chris Gayle"
  },
  {
    question: "Who is the current RCB head coach (2024)?",
    options: ["Andy Flower", "Daniel Vettori", "Mike Hesson", "Tom Moody"],
    answer: "Andy Flower"
  },
  {
    question: "RCB’s highest IPL score is?",
    options: ["248/3", "263/5", "235/4", "271/6"],
    answer: "263/5"
  },
  {
    question: "Which cricketer is known as 'Mr. 360°' in RCB?",
    options: ["Virat Kohli", "AB de Villiers", "Glenn Maxwell", "Devdutt Padikkal"],
    answer: "AB de Villiers"
  },
  {
    question: "How many times has RCB reached the IPL final?",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "Who hit 175* for RCB, the highest IPL individual score?",
    options: ["Chris Gayle", "Virat Kohli", "KL Rahul", "AB de Villiers"],
    answer: "Chris Gayle"
  },
  {
    question: "Which RCB player has the most wickets in IPL?",
    options: ["Harshal Patel", "Yuzvendra Chahal", "Zaheer Khan", "Mitchell Starc"],
    answer: "Yuzvendra Chahal"
  },
  {
    question: "Which year did RCB last play an IPL final?",
    options: ["2011", "2013", "2016", "2020"],
    answer: "2016"
  },
  {
    question: "Who is RCB’s all-time best wicketkeeper-batsman?",
    options: ["KL Rahul", "Quinton de Kock", "AB de Villiers", "Parthiv Patel"],
    answer: "AB de Villiers"
  },
  {
    question: "Which player once captained RCB before Kohli?",
    options: ["Rahul Dravid", "Anil Kumble", "Daniel Vettori", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What’s the nickname of RCB fans?",
    options: ["Red Brigade", "Bold Army", "Challengers", "RCBians"],
    answer: "Bold Army"
  },
  {
    question: "Which RCB player is known for his funky celebrations?",
    options: ["Chris Gayle", "Dale Steyn", "Harshal Patel", "Mohammed Siraj"],
    answer: "Mohammed Siraj"
  },
  {
    question: "RCB holds the record for...?",
    options: ["Highest & lowest IPL scores", "Most finals", "Most Orange Caps", "Most Purple Caps"],
    answer: "Highest & lowest IPL scores"
  },
  {
    question: "Who sang the original 'Ee Sala Cup Namde' anthem?",
    options: ["Chandan Shetty", "Raghu Dixit", "Vijay Prakash", "Arjun Janya"],
    answer: "Chandan Shetty"
  },
  // Add 30 more like this...
];

// Utility: Shuffle and grab 10 questions
function getRandomQuestions() {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

// Render Questions
const form = document.getElementById("quizForm");
const questions = getRandomQuestions();

questions.forEach((q, index) => {
  const block = document.createElement("div");
  block.classList.add("question-block");
  block.innerHTML = `<h3>${index + 1}. ${q.question}</h3>` +
    q.options.map(opt => `
      <label>
        <input type="radio" name="q${index}" value="${opt}" required />
        ${opt}
      </label>
    `).join("");
  form.appendChild(block);
});

// Submission Logic
document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  document.getElementById("scoreText").textContent = `Your score: ${score} / 10`;
  document.getElementById("scoreModal").style.display = "flex";
});

// Modal close
document.querySelector(".close").onclick = function () {
  document.getElementById("scoreModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("scoreModal")) {
    document.getElementById("scoreModal").style.display = "none";
  }
};
