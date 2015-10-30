/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //fill contact information
var bio = {
		        "name": "Jenny Zhang",
		        "role": "Researcher",
		        "contacts": {
		            "mobile": "1-206-667-0000",
		            "email": "canaantt@hotmail.com",
		            "github": "github/canaantt",
		            "location": "Seattle, WA",
		            "welcomeMessage": "Thank you for viewing my resume!",  
		            },
		         "biopic": "images/fry.jpg",
		         "skills": ["Javascript", "CSS", "testing","Tissue Banking","Tissue Processing","Molecular Profiling"]
		        };

bio.display = function(){
	formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
	formattedHTMLheaderRole  = HTMLheaderRole.replace("%data%", bio.role);
	formattedHTMLcontactGeneric  = HTMLcontactGeneric.replace("%data%", bio.contacts); 
	formattedHTMLmobile  = HTMLmobile.replace("%data%", bio.contacts.mobile);
	formattedHTMLemail  = HTMLemail.replace("%data%", bio.contacts.email); 
	formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	formattedHTMLlocation  = HTMLlocation.replace("%data%",bio.contacts.location);
	formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.contacts.welcomeMessage);

	$("#header").prepend(formattedHTMLheaderRole).prepend(formattedHTMLheaderName);
	$("#header").append(formattedHTMLbioPic).append(formattedHTMLwelcomeMsg).append(HTMLskillsStart);
	$("#topContacts").append(formattedHTMLemail).append(formattedHTMLmobile).append(formattedHTMLgithub).
					  append(formattedHTMLlocation);
	bio.skills.forEach(function(skill){
		formattedHTMLskills = HTMLskills.replace("%data%", skill);
		$("#skills-h3").append(formattedHTMLskills);
	});
	
	$("#footerContacts").append(formattedHTMLemail).append(formattedHTMLmobile).append(formattedHTMLgithub).
					  append(formattedHTMLlocation);
}

bio.display();

//fill Work Experience
var work = { 
			"jobs": [
					{"employer": ["Fred Hutch Cancer Research Center", "http://www.fredhutch.org"],
					 "title": "Researcher",
					 "location": "Seattle, WA",
					 "dates": "Since May 2013 to Present",
					 "descrption": "Working on Solid Tumor Translational Research"},
					 {"employer": ["Memorial Sloan-Kettering Cancer Center", "http://www.mskcc.org"],
					 "title": "Researcher",
					 "location": "New York, NY",
					 "dates": "May 2011 to April 2013",
					 "descrption": "Working on Brain Tumor (GBM) Translational Research"},
					 {"employer": ["New York University", "http://www.nyu.edu"],
					 "title": "Researcher",
					 "location": "New York, NY",
					 "dates": "July 2010 to April 2011",
					 "descrption": "Working on Head&Neck Tumor Translational Research"},
					 {"employer": ["Univeristy of California, San Francisco", "http://www.ucsf.edu"], 
					 "title": "Researcher",
					 "location": "San Francisco, CA",
					 "dates": "July 2009 to June 2010",
					 "descrption": "Working on Head&Neck Tumor Translational Research"}
					 ]
}
work.display = function(){
	work.jobs.forEach(function(job){
		
		formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%",job.employer[0])
													.replace("#", job.employer[1]);
		formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
		formattedHTMlworkDates = HTMLworkDates.replace("%data%",job.dates);
		formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
		formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.descrption);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle)
							.append(formattedHTMlworkDates)
							.append(formattedHTMLworkLocation)
							.append(formattedHTMLworkDescription);
	});
}
work.display();
//fill Projects
var projects = {
				"projects":[
				{"title": "Solid Tumor Precision Medicine",
				 "dates": "Since May 2013 to Present",
				 "descrption": "Participate in Cancer Translational Research Computational Web Application Development",
				 "images":["https://github.com/canaantt/front-end-Projects/blob/master/frontend-nanodegree-resume/images/fh_1.png?raw=true"]
				},
				{"title": "Glioma Study",
				 "dates": "May 2011 to April 2013",
				 "descrption": "Molecular Profiling in Brain Tumor (GBM) Translational Research",
				 "images":["https://github.com/canaantt/front-end-Projects/blob/master/frontend-nanodegree-resume/images/MSK_1.jpg?raw=true"
				 		   ,"https://github.com/canaantt/front-end-Projects/blob/master/frontend-nanodegree-resume/images/MSK_3.jpg?raw=true"
				 		  ,"https://github.com/canaantt/front-end-Projects/blob/master/frontend-nanodegree-resume/images/MSK_4.jpg?raw=true"]
				 }		
				]
}
projects.display = function(){
	projects.projects.forEach(function(project){
		formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
		formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
		formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.descrption);
		
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedHTMLprojectTitle)
					       .append(formattedHTMLprojectDates)
					  	   .append(formattedHTMLprojectDescription);
	    project.images.forEach(function(image){
	   		formattedHTMlprojectImage = HTMLprojectImage.replace("%data%", image);
	   		$(".project-entry:last").append(formattedHTMlprojectImage);
	    });

				  	
	});
}
projects.display();
//fill Education
var education = {
				 "schools":[
				 {"name": "Florida Atlantic University",
				  "location": "Boca Raton, FL, USA",
				  "degree": "Master of Science",
				  "majors": "Biomedical Science",
				  "dates": "12/2007",
				  "url": "http://www.fau.edu/"
				 },
				 {"name": "Shandong University",
				  "location": "Jinan, Shandong, China",
				  "degree": "Bachelor of Science",
				  "majors": "Biochemistry",
				  "dates": "6/2003",
				  "url": "http://en.sdu.edu.cn/"
				 }
				 ],
				 "onlineCourses":[
				 {"title": "Frontend Nanodegree Program",
				  "school": "Udacity",
				  "degree": "pending",
				  "majors": "Froned End Development",
				  "dates": "0",
				  "url": "http://www.udacity.com"
				 }
				 ]
}
education.display = function(){
	education.schools.forEach(function(school){
		formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
		formattedHTMLschoolName = formattedHTMLschoolName.replace("#", school.url);
		formattedHTMlschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
		formattedHTMlschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMlschoolDegree)
								  .append(formattedHTMlschoolLocation)
								  .append(formattedHTMLschoolDates)
								  .append(formattedHTMLschoolMajor);
	});
	$("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
    	formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    	formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    	formattedHTMLonlineDate = HTMLonlineDates.replace("%data%", course.dates);
    	formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", course.url);
    	formattedHTMLonlineURL = formattedHTMLonlineURL.replace("#", course.url);
    	$("#education").append(HTMLschoolStart);
    	$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool)
    	                          .append(formattedHTMLonlineDate)
    	                          .append(formattedHTMLonlineURL)
    	                          
    });


}
education.display();

//Fill the Geo
$("#mapDiv").append(googleMap);
