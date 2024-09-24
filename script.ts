const ToggleSection = (headerId: string, contentId: string) => {
    const header = document.getElementById(headerId);
    const content = document.getElementById(contentId);
    if (header && content) {
        header.addEventListener('click', () => {
            content.classList.toggle('hidden');
        });
    }
};

// Call the function for each section
ToggleSection('educationHeader', 'education');
ToggleSection('skillsHeader', 'skills');
ToggleSection('experienceHeader', 'experience');
