/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
		        "name": "Jenny Zhang",
		        "role": "Researcher",
		        "contacts": {
		            "mobile": "1-206-667-0000",
		            "email": "canaantt@hotmail.com",
		            "github": "github/canaantt",
		            "location": "Seattle, WA",
		            "welcomeMessage": "Thank you for viewing my resume!",
		            "skills": {
		                "Web Develop": [
		                    "Javascript",
		                    "CSS",
		                    "testing"
		                ]
		            }},
		            "biopic": "images/fry.jpg",
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
	
	$.each(bio.contacts.skills,function(skill){
		formattedHTMLskills = HTMLskills.replace("%data%", skill);
		HTMLskillsStart.append(formattedHTMLskills);
	})

	$("#topContacts").prepend(formattedHTMLheaderRole).prepend(formattedHTMLheaderName);
	$("#topContacts").prepend(formattedHTMLbioPic);
	$("#topContacts").append(formattedHTMLemail).append(formattedHTMLmobile).append(formattedHTMLgithub).
					  append(formattedHTMLlocation).append(HTMLskillsStart);
}
bio.display();

