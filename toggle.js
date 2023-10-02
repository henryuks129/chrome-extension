document.addEventListener("DOMContentLoaded", () => {
    const recording = document.querySelector("button#start-video");
    const endRecording = document.querySelector("button#end-video");
    let isRecording = false;
  
    function startRecording() {
      isRecording = true;
      recording.style.display = "none";
      endRecording.style.display = "block";
  
      // ... Code for starting recording ...
    }
  
    function stopRecording() {
      isRecording = false;
      recording.style.display = "block";
      endRecording.style.display = "none";
  
      // ... Code for stopping recording ...
    }
  
    function toggleRecording() {
      if (isRecording) {
        stopRecording();
      } else {
        startRecording();
      }
    }
  
    recording.addEventListener("click", () => {
      toggleRecording();
    });
  
    endRecording.addEventListener("click", () => {
      toggleRecording();
    });
  });
  