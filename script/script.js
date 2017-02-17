  function ss1() {
 
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('fname').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }
 function ss2(){

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('mname').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }
   function ss3(){

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('lname').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }
   function ss4(){

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('dob').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }
   function ss5(){

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('ead').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }
   function ss6(){

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = true;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('ad').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }
   function ss7(){

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
 
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('no').value
                                 = e.results[0][0].transcript;
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }