$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => document.getElementById("success").className = "show-result")
          .catch((error) => alert(error));
      };
      
      document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
});