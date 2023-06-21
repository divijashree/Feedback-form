document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var internshipSatisfaction = document.querySelector('input[name="internshipSatisfaction"]:checked').value;
  var knowledgeRating = document.querySelector('input[name="knowledgeRating"]:checked').value;
  
    // Validate form data
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
    if (typeof internshipSatisfaction === "undefined") {
        alert("Please select your satisfaction with the Abhyaz internship.");
        return;
      }
    
      if (typeof knowledgeRating === "undefined") {
        alert("Please rate your knowledge earned through this internship.");
        return;
      }
  
    // Process the form data (you can customize this part)
    // ...
  
    // Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="internshipSatisfaction"]:checked').checked = false;
  document.querySelector('input[name="knowledgeRating"]:checked').checked = false;
  
    alert("Thank you for your feedback!");
  });
  