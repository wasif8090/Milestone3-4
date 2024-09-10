function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const picture = (document.getElementById('picture') as HTMLInputElement).files?.[0];

    const resumeOutput = document.getElementById('resumeOutput');
    const editButton = document.getElementById('editButton') as HTMLButtonElement;
    const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;

    if (resumeOutput) {
        const pictureUrl = picture ? URL.createObjectURL(picture) : '';
        resumeOutput.innerHTML = `
            ${picture ? `<img src="${pictureUrl}" alt="Profile Picture">` : ''}
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
        `;

        // Show edit and download buttons
        editButton.style.display = 'block';
        downloadButton.style.display = 'block';
    }
}

function editResume() {
    // Re-show the form and hide the resume output
    document.getElementById('resumeForm')!.style.display = 'block';
    document.getElementById('resumeOutput')!.style.display = 'none';

    // Hide the edit and download buttons
    const editButton = document.getElementById('editButton') as HTMLButtonElement;
    const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;
    editButton.style.display = 'none';
    downloadButton.style.display = 'none';
}

function downloadResume() {
    const resumeOutput = document.getElementById('resumeOutput')!.innerHTML;
    const blob = new Blob([resumeOutput], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
