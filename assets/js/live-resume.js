$('[data-toggle="collapsible-nav"]').on('click', function(e){
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
	
	populateData(data);  // Populate data on page load
});

$(window).resize(
    function() {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }, 
    
    function (event) {

        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);

function printCV() {
    var printWindow = window.open('print.html', '_blank');

    printWindow.onload = function () {
        printWindow.focus();
        printWindow.print();
    };
}

function populateData(data) {
    // Profile Information
    $('.profile-name').text(data.profile.name);
    $('.profile-designation').text(data.profile.designation);
    $('.profile-img-wrapper img').attr('src', data.profile.profileImg); // Set profile image
    $('.widget-content').first().html(`
		<p>NATIONALITY : ${data.profile.nationality}</p>
        <p>BIRTHDAY : ${data.profile.birthday}</p>
        <p>PHONE : ${data.profile.phone}</p>
        <p>MAIL : ${data.profile.email}</p>
        <p>Location : ${data.profile.location}</p>
        <button onclick="printCV();" class="btn btn-download-cv btn-primary rounded-pill"> 
            <img src="assets/images/download.svg" alt="download" class="btn-img">DOWNLOAD CV 
        </button>
    `);

    // Social Links
    let socialLinksHTML = data.socialLinks.map(link => `
        <a href="${link.url}" class="social-link"><i class="fab fa-${link.platform}"></i></a>
    `).join('');
    $('.social-links').html(socialLinksHTML);

    // Languages
    let languagesHTML = `<h5 class="widget-title">LANGUAGES</h5>`;
    languagesHTML += data.languages.map(lang => `<p>${lang.language} : ${lang.proficiency}</p>`).join('');
    $('.widget.card:contains("LANGUAGES") .widget-content').html(languagesHTML);

    // Interests
    let interestsHTML = `<h5 class="widget-title">INTERESTS</h5>`;
    interestsHTML += data.interests.map(interest => `<p>${interest}</p>`).join('');
    $('.widget.card:contains("INTERESTS") .widget-content').html(interestsHTML);

    // Intro Section
    $('.intro-section .section-title').text(data.intro.greeting);
    $('.intro-section p').text(data.intro.description);

    // Education
    let educationHTML = data.education.map(edu => `
        <li class="time-line-item">
            <span class="badge badge-primary">${edu.years}</span>
            <h6 class="time-line-item-title">${edu.title}</h6>
            <p class="time-line-item-subtitle">${edu.institution}</p>
            <p class="time-line-item-content">${edu.details}</p>
        </li>
    `).join('');
    $('.resume-section .col-lg-6:contains("EDUCATION") .time-line').html(educationHTML);

    // Experience
    let experienceHTML = data.experience.map(exp => `
        <li class="time-line-item">
            <span class="badge badge-primary">${exp.years}</span>
            <h6 class="time-line-item-title">${exp.position}</h6>
            <p class="time-line-item-subtitle">${exp.company}</p>
            <p class="time-line-item-content">${exp.details}</p>
        </li>
    `).join('');
    $('.resume-section .col-lg-6:contains("Experience") .time-line').html(experienceHTML);
	
	// Participations
    let participationHTML = data.Participation.map(exp => `
        <li class="time-line-item">
            <span class="badge badge-primary">${exp.years}</span>
            <h6 class="time-line-item-title">${exp.position}</h6>
            <p class="time-line-item-subtitle">${exp.company}</p>
            <p class="time-line-item-content">${exp.details}</p>
        </li>
    `).join('');
    $('.resume-section .col-lg-6:contains("Participation") .time-line').html(participationHTML);
	
	// Awards
    let awardsHTML = data.Awards.map(exp => `
        <li class="time-line-item">
            <span class="badge badge-primary">${exp.years}</span>
            <h6 class="time-line-item-title">${exp.position}</h6>
            <p class="time-line-item-subtitle">${exp.company}</p>
            <p class="time-line-item-content">${exp.details}</p>
        </li>
    `).join('');
    $('.resume-section .col-lg-6:contains("Awards") .time-line').html(awardsHTML);

    // Projects
    let projectsHTML = data.projects.map(project => `
        <li class="time-line-item">
            <h6 class="time-line-item-title">${project.title}</h6>
            <p class="time-line-item-content">${project.content}</p>
            <p class="time-line-item-subtitle">${project.subtitle}</p>
        </li>
    `).join('');
    
    // Select the projects section by its new class
    document.querySelector('.projects-section .time-line').innerHTML = projectsHTML;

	
	// Training Courses and Certificates
    let trainingHTML = data.trainingCourses.map(course => `
        <li class="time-line-item">
            <span class="badge badge-primary">${course.date}</span>
            <h6 class="time-line-item-title">${course.title}</h6>
            <p class="time-line-item-subtitle">${course.institution}</p>
            <p class="time-line-item-content">${course.details}</p>
        </li>
    `).join('');
    $('.resume-section .col-lg-6:contains("Training Courses and Certificates") .time-line').html(trainingHTML);


    // Services
    let servicesHTML = data.services.map(service => `
        <div class="media service-card col-lg-6">
            <div class="service-icon">
                <img src="${service.icon}" alt="${service.title}">
            </div>
            <div class="media-body">
                <h5 class="service-title">${service.title}</h5>
                <p class="service-description">${service.description}</p>
            </div>
        </div>
    `).join('');
    $('.services-section .row').html(servicesHTML);

    // Testimonials
    let testimonialsHTML = data.testimonials.map((test, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <p class="testimonial-content">${test.content}</p>
            <img src="${test.image}" alt="${test.name}" class="testimonial-img">
            <p class="testimonial-name">${test.name}</p>
        </div>
    `).join('');
    $('.testimonial-carousel .carousel-inner').html(testimonialsHTML);

    // Testimonial Indicators
    let indicatorsHTML = data.testimonials.map((_, index) => `
        <li data-target="#testimonialCarousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>
    `).join('');
    $('.carousel-indicators').html(indicatorsHTML);
}
