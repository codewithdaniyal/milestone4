// Selecting the form and output elements
var form = document.getElementById("resume-input-form");
var resumeContent = document.getElementById("resume-content");
if (form && resumeContent) {
    // Event listener for the form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission
        // Retrieving input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var degree = document.getElementById("degree").value;
        var university = document.getElementById("university").value;
        var graduationYear = document.getElementById("graduation-year").value;
        var skills = document.getElementById("skills").value.split(',').map(function (skill) { return skill.trim(); });
        var jobTitle = document.getElementById("job-title").value;
        var company = document.getElementById("company").value;
        var workYears = document.getElementById("work-years").value;
        var jobDescription = document.getElementById("job-description").value;
        // Generating resume content dynamically
        var resumeHTML = "\n            <h3 contenteditable=\"true\">".concat(name, "</h3>\n            <p contenteditable=\"true\">Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n            <h4 contenteditable=\"true\">Education</h4>\n            <p contenteditable=\"true\">").concat(degree, ", ").concat(university, " (").concat(graduationYear, ")</p>\n            <h4 contenteditable=\"true\">Skills</h4>\n            <ul>").concat(skills.map(function (skill) { return "<li contenteditable=\"true\">".concat(skill, "</li>"); }).join(''), "</ul>\n            <h4 contenteditable=\"true\">Work Experience</h4>\n            <p contenteditable=\"true\"><strong>").concat(jobTitle, "</strong> at <strong>").concat(company, "</strong> (").concat(workYears, ")</p>\n            <p contenteditable=\"true\">").concat(jobDescription, "</p>\n        ");
        // Injecting generated HTML into the editable resume section
        resumeContent.innerHTML = resumeHTML;
    });
}
