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
		            "twitter": "twitter/canaantt",
		            "location": "Seattle, WA",
		            "welcomeMessage": "Thank you for viewing my resume!",  
		            },
		         "biopic": "images/fry.jpg",
		         "skills": ["Javascript", "CSS", "testing"]
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
	formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

	$("#header").prepend(formattedHTMLheaderRole).prepend(formattedHTMLheaderName);
	$("#header").append(formattedHTMLbioPic).append(formattedHTMLwelcomeMsg).append(HTMLskillsStart);
	$("#topContacts").append(formattedHTMLemail).append(formattedHTMLmobile).append(formattedHTMLgithub).
					  append(formattedHTMLlocation).append(formattedHTMLtwitter);
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
		$("#workExperience").append(HTMLworkStart)
							.append(formattedHTMLworkEmployer)
							.append(formattedHTMLworkTitle)
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
				 "descrption": "Working on Solid Tumor Translational Research",
				 "images":["http://research.fhcrc.org/content/stripe/holland/en/members/jennyzhang/_jcr_content/par/image/image.img.jpg/1431537596391.jpg"
				 		  ,"http://oncoscape.sttrcancer.org/oncoscape/images/oncoscape_logo_TM.png"]},
				{"title": "Glioma Study",
				 "dates": "May 2011 to April 2013",
				 "descrption": "Working on Brain Tumor (GBM) Translational Research",
				 "images":["https://www.mskcc.org/sites/default/files/styles/large/public/node/5070/group_image/huse-lab.jpg"]
				 }		
				]
}
projects.display = function(){
	projects.projects.forEach(function(project){
		formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
		formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
		formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.descrption);
		
	$("#projects").append(HTMLprojectStart)
				  .append(formattedHTMLprojectTitle)
				  .append(formattedHTMLprojectDates)
				  .append(formattedHTMLprojectDescription);
   project.images.forEach(function(image){
   		formattedHTMlprojectImage = HTMLprojectImage.replace("%data%", image);
   		$("#projects").append(formattedHTMlprojectImage);
   });

				  	
	});
}
projects.display();
//fill Education
//Fill the Geo

