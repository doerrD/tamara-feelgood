$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);

        var exitSubmit = false;
        for(var pair of formData.entries()){
            if (pair[0] === 'goodinput' && !(pair[1] === '' || pair[1] == null || pair[1] === undefined)) {
                exitSubmit = true;
            }
        }

        if (!exitSubmit) {
            formData.delete("goodinput");

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
              })
                .then(() => document.getElementById("success").className = "show-result")
                .catch((error) => alert(error));
        } else {
            console.log('bot-alert');
        }
    };
    
    document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);

    if(window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        const element = document.getElementById(hash);
        if (element) {
            element.checked = true;
        }
    }
});