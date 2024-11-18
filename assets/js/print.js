document.addEventListener('DOMContentLoaded', () => {
    // Profile Section
    document.getElementById('profileImg').src = data.profile.profileImg;
    document.getElementById('name').textContent = data.profile.name;
    document.getElementById('designation').textContent = data.profile.designation;

    // Introduction
    document.getElementById('greeting').textContent = data.intro.greeting;
    document.getElementById('description').textContent = data.intro.description;

    // Contact Information
    const contactInfo = document.getElementById('contactInfo');
    const contactDetails = [
        { icon: 'fas fa-birthday-cake', text: `Birthday: ${data.profile.birthday}` },
        { icon: 'fas fa-phone', text: `Phone: ${data.profile.phone}` },
        { icon: 'fas fa-envelope', text: `Email: ${data.profile.email}` },
        { icon: 'fas fa-map-marker-alt', text: `Location: ${data.profile.location}` },
        { icon: 'fas fa-flag', text: `Nationality: ${data.profile.nationality}` }
    ];
    contactDetails.forEach(info => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${info.icon}"></i> ${info.text}`;
        contactInfo.appendChild(li);
    });

    // Languages
    const languagesList = document.getElementById('languagesList');
    data.languages.forEach(language => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-language"></i> ${language.language} - ${language.proficiency}`;
        languagesList.appendChild(li);
    });

    // Interests
    const interestsList = document.getElementById('interestsList');
    data.interests.forEach(interest => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${interest}`;
        interestsList.appendChild(li);
    });

    // Experience Section
    const experienceList = document.getElementById('experienceList');
    data.experience.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experience-item';
        div.innerHTML = `
            <h4><i class="fas fa-briefcase"></i> ${exp.position} (${exp.years})</h4>
            <p><strong>${exp.company}</strong></p>
            <p>${exp.details}</p>
        `;
        experienceList.appendChild(div);
    });

    // Education Section
    const educationList = document.getElementById('educationList');
    data.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'education-item';
        div.innerHTML = `
            <h4><i class="fas fa-graduation-cap"></i> ${edu.title} (${edu.years})</h4>
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.details}</p>
        `;
        educationList.appendChild(div);
    });

    // Participations Section
    const participationsList = document.getElementById('participationsList');
    data.Participation.forEach(participation => {
        const div = document.createElement('div');
        div.className = 'participation-item';
        div.innerHTML = `
            <h4><i class="fas fa-handshake"></i> ${participation.position} (${participation.years})</h4>
            <p><strong>${participation.company}</strong></p>
            <p>${participation.details}</p>
        `;
        participationsList.appendChild(div);
    });

    // Honors and Awards Section
    const awardsList = document.getElementById('awardsList');
    data.Awards.forEach(award => {
        const div = document.createElement('div');
        div.className = 'award-item';
        div.innerHTML = `
            <h4><i class="fas fa-award"></i> ${award.position} (${award.years})</h4>
            <p><strong>${award.company}</strong></p>
            <p>${award.details}</p>
        `;
        awardsList.appendChild(div);
    });

    // Projects Section
    const projectsList = document.getElementById('projectsList');
    data.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = `
            <h4><i class="fas fa-project-diagram"></i> ${project.title}</h4>
            <p>${project.content}</p>
            <p><em>${project.subtitle}</em></p>
        `;
        projectsList.appendChild(div);
    });

    // Training Courses Section
    const trainingCoursesList = document.getElementById('trainingCoursesList');
    data.trainingCourses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'course-item';
        div.innerHTML = `
            <h4>${course.title} (${course.date})</h4>
            <p><strong>${course.institution}</strong></p>
            ${course.details ? `<p>${course.details}</p>` : ''}
        `;
        trainingCoursesList.appendChild(div);
    });

    window.print();
});
window.addEventListener('afterprint', function () {
    window.close();
});