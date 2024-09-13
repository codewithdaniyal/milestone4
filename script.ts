// Selecting the form and output elements
const form = document.getElementById("resume-input-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLDivElement;

if (form && resumeContent) {
    // Event listener for the form submission
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault(); // Prevents the default form submission

        // Retrieving input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const degree = (document.getElementById("degree") as HTMLInputElement).value;
        const university = (document.getElementById("university") as HTMLInputElement).value;
        const graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(',').map(skill => skill.trim());
        const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
        const company = (document.getElementById("company") as HTMLInputElement).value;
        const workYears = (document.getElementById("work-years") as HTMLInputElement).value;
        const jobDescription = (document.getElementById("job-description") as HTMLTextAreaElement).value;

        // Generating resume content dynamically
        const resumeHTML = `
            <h3 contenteditable="true">${name}</h3>
            <p contenteditable="true">Email: ${email} | Phone: ${phone}</p>
            <h4 contenteditable="true">Education</h4>
            <p contenteditable="true">${degree}, ${university} (${graduationYear})</p>
            <h4 contenteditable="true">Skills</h4>
            <ul>${skills.map(skill => `<li contenteditable="true">${skill}</li>`).join('')}</ul>
            <h4 contenteditable="true">Work Experience</h4>
            <p contenteditable="true"><strong>${jobTitle}</strong> at <strong>${company}</strong> (${workYears})</p>
            <p contenteditable="true">${jobDescription}</p>
        `;

        // Injecting generated HTML into the editable resume section
        resumeContent.innerHTML = resumeHTML;
    });
}
