


document.getElementById("speechBtn").addEventListener("click",() => {
    let textInput = document.getElementById("inpBtn").value;
    
    const voice = new SpeechSynthesisUtterance(textInput);
    window.speechSynthesis.speak(voice);
    document.getElementById("inpBtn").value = ""
})