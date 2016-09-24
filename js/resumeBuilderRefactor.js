$(function(){
    var model = {
        bio: {
            "name": "Simon Stusak",
            "role": "Web Developer",
            "biopic": "images/biopic_simonstusak.jpg",
            "welcomeMessage": "Hi there!",
            "skills": ["HCI", "UX", "Data Visualization", "Web Development", "JS"],
            "contacts": {
                "email": "simon@stusak.de",
                "mobile": "+49 174 456 0607",
                "github": "simonstu",
                "twitter": "@supernuss",
                "location": "Munich"
            }
        },
        education: {
            "schools": [{
                "name": "LMU Munich",
                "location": "Munich",
                "degree": "Diplom",
                "dates": "2004 - 2011",
                "url": "http://www.medien.ifi.lmu.de/",
                "majors": ["Media Economics"]
            }, {
                "name": "Universidad de Granada",
                "location": "Granada",
                "degree": "Erasmus",
                "dates": "2009",
                "url": "https://www.ugr.es/en/",
                "majors": ["Media Economics"]
            }, {
                "name": "LMU Munich",
                "location": "Munich",
                "degree": "Ph.D.",
                "dates": "2012 - 2016",
                "url": "http://www.medien.ifi.lmu.de/",
                "majors": ["Human-Computer Interaction"]
            }],
            "onlineCourses": [{
                "title": "Front-End Developer",
                "school": "Udacity",
                "dates": "2016",
                "url": "http://www.udactiy.com"
            }]
        },
        work: {
            "jobs": [{
                "title": "Student Tutor",
                "employer": "LMU Munich",
                "location": "Munich",
                "dates": "04/2012 - 06/2016",
                "description": "todo"
            }, {
                "title": "Guest Reseacher",
                "employer": "RMIT, Exertion Games Lab",
                "location": "Melbourne",
                "dates": "01/2015 - 04/2015",
                "description": "todo"
            }]
        },
        projects: {
            "projects": [{
                "title": "Activity Sculptures",
                "dates": "2012",
                "description": "todo",
                "images": ["images/activity_sculptures_370_1x.jpg"]
            }]
        }
    };

    window.octopus = {
        init: function() {
            bioView.render(model.bio);
            projectsView.render(model.projects);
            educationView.render(model.education);
            workView.render(model.work);
        },
        getBio: function() {
            return model.bio;
        },
        getProjects: function() {
            return model.projects;
        },
        getEducation: function() {
            return model.education;
        },
        getWork: function() {
            return model.work;
        }
    };

    var bioView = {
        render: function(bio) {
            $header = $("#header");
            $header.prepend(HTMLheaderRole.replace("%data%", bio.role));
            $header.prepend(HTMLheaderName.replace("%data%", bio.name));
            $header.append(HTMLbioPic.replace("%data%", bio.biopic));
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            var formattedContacts = formattedEmail + formattedMobile + formattedTwitter + formattedGithub + formattedLocation;
            $("#topContacts").append(formattedContacts);
            $("#footerContacts").append(formattedContacts);
            if (bio.skills.length > 0) {
                $header.append(HTMLskillsStart);
                bio.skills.forEach(function(val) {
                    $("#skills").append(HTMLskills.replace("%data%", val));
                });
            };
        }
    };

    var projectsView = {
        render: function(projects) {
            projects.projects.forEach(function(project) {
                $("#projects").append(HTMLprojectStart);
                formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
                formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
                formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
                formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
                project.images.forEach(function(image) {
                    formattedProject += HTMLprojectImage.replace("%data%", image);
                });
                $(".project-entry:last").append(formattedProject);
            });
        }
    };

    var educationView = {
        render: function(education) {
            if (education.schools.length > 0) {
                education.schools.forEach(function(school) {
                    $("#education").append(HTMLschoolStart);
                    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
                    formattedSchoolName = formattedSchoolName.replace("#", school.url);
                    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
                    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
                    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
                    $(".education-entry:last").append(
                        formattedSchoolName +
                        formattedSchoolDegree +
                        formattedSchoolDates +
                        formattedSchoolLocation +
                        formattedSchoolMajor);
                });
            }
            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                education.onlineCourses.forEach(function(onlineCourse) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
                    formattedOnlineCourseTitle = formattedOnlineCourseTitle.replace("#", onlineCourse.url);
                    var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
                    var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
                    var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
                    formattedOnlineCourseURL = formattedOnlineCourseURL.replace("#", onlineCourse.url);
                    $(".education-entry:last").append(
                        formattedOnlineCourseTitle +
                        formattedOnlineCourseSchool +
                        formattedOnlineCourseDates +
                        formattedOnlineCourseURL);
                });
            }
        }
    };

    var workView = {
        render: function(work) {
            if (work.jobs.length > 0) {
                work.jobs.forEach(function(job) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
                    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
                    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
                    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
                    $(".work-entry:last").append(
                        formattedEmployer +
                        formattedTitle +
                        formattedDates +
                        formattedLocation +
                        formattedDescription);
                });
            }
        }
    };

    function showGoogleMap() {
        $("#mapDiv").append(googleMap);
    }

    octopus.init();
    showGoogleMap();

    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
    if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.display = 'none';
    }
});