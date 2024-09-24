var ToggleSection = function (headerId, contentId) {
    var header = document.getElementById(headerId);
    var content = document.getElementById(contentId);
    if (header && content) {
        header.addEventListener('click', function () {
            content.classList.toggle('hidden');
        });
    }
};
// Call the function for each section
ToggleSection('educationHeader', 'education');
ToggleSection('skillsHeader', 'skills');
ToggleSection('experienceHeader', 'experience');
