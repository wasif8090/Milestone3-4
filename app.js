function generateResume() {
    var _a;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var picture = (_a = document.getElementById('picture').files) === null || _a === void 0 ? void 0 : _a[0];
    var resumeOutput = document.getElementById('resumeOutput');
    var editButton = document.getElementById('editButton');
    var downloadButton = document.getElementById('downloadButton');
    if (resumeOutput) {
        var pictureUrl = picture ? URL.createObjectURL(picture) : '';
        resumeOutput.innerHTML = "\n            ".concat(picture ? "<img src=\"".concat(pictureUrl, "\" alt=\"Profile Picture\">") : '', "\n            <h2>").concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n        ");
        // Show edit and download buttons
        editButton.style.display = 'block';
        downloadButton.style.display = 'block';
    }
}
function editResume() {
    // Re-show the form and hide the resume output
    document.getElementById('resumeForm').style.display = 'block';
    document.getElementById('resumeOutput').style.display = 'none';
    // Hide the edit and download buttons
    var editButton = document.getElementById('editButton');
    var downloadButton = document.getElementById('downloadButton');
    editButton.style.display = 'none';
    downloadButton.style.display = 'none';
}
function downloadResume() {
    var resumeOutput = document.getElementById('resumeOutput').innerHTML;
    var blob = new Blob([resumeOutput], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
