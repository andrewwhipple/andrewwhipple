$("html, body").animate {scrollTop: 0}, 10

preload = (arrayOfImages) ->
	$(arrayOfImages).each( () ->
		$('<img />').attr('src',this).appendTo('body').css('display', 'none')
)


images = [
	"./images/background.png",
	"./images/contactlink.png",
	"./images/logo.png",
	"./images/project1.png",
	"./images/project2.png",
	"./images/project2hover.png",
	"./images/project3.png",
	"./images/project3hover.png",
	"./images/project4.png",
	"./images/project4hover.png",
	"./images/prize.png",
	"./images/cookie.png",
	"./images/projectlink.png",
	"./images/projectlinkhover.png",
	"./images/contactlinkhover.png",
	"./images/homebutton.png",
	"./images/homebuttonhover.png"
]

preload(images)


projectPage = false;
contactPage = false;


#Control Functions
returnLogo = () ->
	$("#logo").css "margin-left", "0%"
	$("#logo").css "height", "100%"
	$("#logo").css "width", "100%"
	$("#logoBackground").css "opacity", "0"
	$("#prize").css "height", "50%"
	$("#prize").css "width", "50%"

shrinkLogoLeft = () ->
	$("#logo").css "margin-left", "0%"
	#$("#logo").css "float", "left"
	$("#logo").css "height", "60%"
	$("#logo").css "width", "60%"
	
	$("#logoBackground").css "float", "left"
	$("#logoBackground").css "margin-left", "-3%"
	$("#logoBackground").css "height", "93%"
	$("#logoBackground").css "width", "65%"
	$("#logoBackground").css "opacity", "1"	

shrinkLogoRight = () ->
	$("#logo").css "margin-left", "40%"
	$("#logo").css "height", "60%"
	$("#logo").css "width", "60%"

	$("#logoBackground").css "margin-left", "35%"
	$("#logoBackground").css "height", "93%"
	$("#logoBackground").css "width", "65%"
	$("#logoBackground").css "opacity", "1"		
		
returnProjectLink = () ->
	$("#projectLink").css "height", "100%"
	$("#projectLink").css "width", "100%"
	$("#projectLink").css "margin-top", "0"
	$("#projectLink").css "margin-left", "0"
		
hideProjectLink = () ->
	$("#projectLink").css "height", "0%"
	$("#projectLink").css "width", "0%"
	$("#projectLink").css "margin-top", "0%"
	$("#projectLink").css "margin-left", "0%"

shrinkProjectLink = () ->
	$("#projectLink").css "height", "60%"
	$("#projectLink").css "width", "60%"
	$("#projectLink").css "margin-top", "-43%"
	
returnContactLink = () ->
	$("#contactLink").css "height", "100%"
	$("#contactLink").css "width", "100%"
	$("#contactLink").css "margin-top", "0%"
	$("#contactLink").css "margin-right", "0%"
	
hideContactLink = () ->
	$("#contactLink").css "height", "0%"
	$("#contactLink").css "width", "0%"
	$("#contactLink").css "margin-top", "0%"
	$("#contactLink").css "margin-right", "0%"

shrinkContactLink = () ->
	$("#contactLink").css "height", "60%"
	$("#contactLink").css "width", "60%"
	$("#contactLink").css "margin-top", "-43%"
	$("#contactLink").css "margin-right", "10%"
	
	
showProjectPage = () ->
	$(".projectPage").css "opacity", "1"
	$(".projectPage").css "height", "100%"
	$(".projectPage").css "width", "100%"
		
hideProjectPage = () ->
	$(".projectPage").css "opacity", "0"
	$(".projectPage").css "height", "50%"
	$(".projectPage").css "width", "50%"
	
hideContactPage = () ->
	$("#contactPage").css "margin-top", "0"
	$("#contactPage").css "opacity", "0"
	$("#contactPage").css "height", "0"
	$("#contactPage").css "width", "0"

showContactPage = () ->
	$("#contactPage").css "opacity", "1"
	$("#contactPage").css "height", "100%"
	$("#contactPage").css "width", "100%"
	$("#contactPage").css "margin-top", "-250%"	
				

returnHomeScreen = () ->
	returnProjectLink()
	returnContactLink()
	returnLogo()
	hideProjectPage()
	hideContactPage()
	projectPage = contactPage = false



#Click/Hover Listeners
$("#logo").on "click", ->
	console.log "MEOW"
	returnHomeScreen()
		

$('#projectLink').hover( 
    -> $(this).attr "src", './images/projectlinkhover.png',
    -> $(this).attr "src", './images/projectlink.png'
)


$('#contactLink').hover( 
    -> $(this).attr "src", './images/contactlinkhover.png',
    -> $(this).attr "src", './images/contactlink.png'
)

$('#bottonHomeButton').hover( 
    -> $(this).attr "src", './images/homebuttonhover.png',
    -> $(this).attr "src", './images/homebutton.png'
)

cookieClicked = false

$("#prize").on "click", ->
	if cookieClicked 
		resetCookie()
		$("#prize").css "height", "50%"
		$("#prize").css "width", "50%"
		cookieClicked = false
	else
		$("#prize").attr "src", "./images/cookie.png"
		$("#prize").css "height", "20%"
		$("#prize").css "width", "20%"
		$("#prize").css "margin-top", "-20%"
		cookieClicked = true

resetCookie = () ->
	$("#prize").attr "src", "./images/prize.png"
	$("#prize").css "margin-top", "0%"

$("#project2").hover(
	-> 
		if projectPage
			$(this).attr "src", "./images/project2hover.png"
			$("#timebuddyLink").attr "href", "http://timebuddy.herokuapp.com",
	-> 
		$(this).attr "src", "./images/project2.png"
		$("#timebuddyLink").attr "href", "#",
)

$("#project3").hover(
	-> 
		if projectPage
			$(this).attr "src", "./images/project3hover.png"
			$("#nightValeLink").attr "href", "http://nightvale2048.herokuapp.com",
	-> 
		$(this).attr "src", "./images/project3.png"
		$("#nightValeLink").attr "href", "#",
)

$("#project4").hover(
	-> 
		if projectPage
			$(this).attr "src", "./images/project4hover.png"
			$("#theCatLink").attr "href", "http://andrewwhipple.com/thecat"

	-> 
		$(this).attr "src", "./images/project4.png"
		$("#theCatLink").attr "href", "#",
)

$("#bottonHomeButton").on "click", ->
	if projectPage or contactPage
		returnHomeScreen()
		#$("#contactLink").css "opacity", "1"
		#$("#projectLink").css "opacity", "1"
		$("html, body").animate {scrollTop: 0}, 1400
		
$("#projectLink").on "click", ->
	$(this).attr "src", './images/projectlink.png'
	
	hideProjectLink()
	shrinkContactLink()
	showProjectPage()
	
	$("#prize").css "height", "0%"
	$("#prize").css "width", "0%"
	resetCookie()
	
	shrinkLogoLeft()
	hideContactPage()
	
	
	console.log ("DOWN HERE")
	projectPage = true;
	
$("#contactLink").on "click", ->
	$(this).attr "src", './images/contactlink.png'
	
	shrinkProjectLink()
	hideContactLink()
	
	$("#prize").css "height", "0%"
	$("#prize").css "width", "0%"
	resetCookie()
	shrinkLogoRight()
	showContactPage()
	if projectPage
		hideProjectPage()
	contactPage = true;
	console.log ("SWAGENDAZ")
