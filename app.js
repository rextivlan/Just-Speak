var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = $("#textbox");

var instructions = $("#instructions");

var content = "";

recognition.continuous = true;

// recognition is started

recognition.onstart = function () {
  instructions.text("Voice Recognition is on");
};

recognition.onspeechend = function () {
  instructions.text("Sucessfully Converted Speech to Text");
};

recognition.onerror = function () {
  instructions.text("Try Again");
};

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  content += transcript;

  textbox.val(content);
};

$("#start-btn").click(function (event) {
  if (content.length) {
    content += "";
  }

  recognition.start();
});

// Set the onClick property of the stop button
document.querySelector("#stop").onclick = () => {
  // Stop the Speech Recognition
  recognition.stop();
};

textbox.on("input", function () {
  content = $(this).val();
});
