/*
File Name: app.js
Author Name: Joseph Volpe
Website name: Joseph's Den
functions for website go here
*/

"use strict";

// IIFE -Immediately Ivoked Function Expression
(function(){

    function highlightActiveLink() 
    {
        let title = document.title;

        title = title.toLowerCase();


        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            
            if ((title === "joseph's den") && (anchorString === "index") || (title === anchorString) || (title === "contact me") && (anchorString === "contact")) 
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }


    function addParagraphsToJumbotron() 
    {
        // step 1 hook into the spot (element) on the page
        let jumbotron = document.getElementsByClassName("jumbotron")[0];
        if (jumbotron) 
        {
            // step 2 create a new element
            let newParagraph = document.createElement("p");
            let newImage = document.createElement("block")
            
        

            // step 3 configure the new element
            newParagraph.textContent =
                `
                
                Welcome to my lounge! My name is Joseph Volpe and I am an aspiring programmer/animator.
                
                `;

            // step 4 attach the new element
            jumbotron.appendChild(newParagraph);


            // back to step 2 - create a new element
            let newDiv = document.createElement("div");

            // step 3 - configure
            newDiv.innerHTML =
                `
                <p id="secondParagraph">
                "It's the minor details that matter"
                </p>
                <img src="./Assets/images/unknown.png" width="300" height="300" alt="Photo" class="center">
                `;

            // step 4 attach the new element
            jumbotron.appendChild(newDiv);
            document.body.style.backgroundColor = "whitesmoke";
            return true;

        }

        return false;
    }

    function addParagraphsToProjecttron() 
    {
        // step 1 hook into the spot (element) on the page
        let projecttron = document.getElementsByClassName("projecttron")[0];

        if (projecttron) 
        {
            // step 2 create a new element
            let newParagraph = document.createElement("p");
            

            // step 3 configure the new element
            newParagraph.textContent =
                `
                Not currently working on a specific project.
                Currently interested in: Making a simple adobe animation, creating a web application that interacts with PC backgrounds (lacking knowledge to start this project), and making a unique discord bot that reads data and gives appropriate response to the user.
                `
               ;

            // step 4 attach the new element
            projecttron.appendChild(newParagraph);


            // back to step 2 - create a new element
            let newDiv = document.createElement("div");

            // step 3 - configure
            newDiv.innerHTML =
                `
                <br></br>
                <img src="./Assets/images/Discord.jpg" width="300" height="300" alt="Photo" align="left" style="padding-right: 20px; padding left: 60px;">
                <br></br>
                <h2>Discord Project:</h2>
                <br></br>
                <p id="secondParagraph">
                    I have been interested in working with discord bots for awhile since they provide an excellent template to build off of. This will also allow me to quickly share my work,
                    with others who are interested in using what i make or just easy access for me to use privately.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src="./Assets/images/adobe-animate-logo-png-transparent.png" width="300" height="300" alt="Photo" align="left" style="padding-right: 20px; padding left: 60px;">
                <p id="secondParagraph">
                <h2>Animation Project:</h2>
                <br></br>
                    While i am working towards being  a programmer i still want to expand as a creator. With this project in mind i will be able to do minor animation with adobe and possibly use that animation in something i make in the future.
                <br></br>
                <br></br>
                </p>
                `;
            
                

            // step 4 attach the new element
            projecttron.appendChild(newDiv);
            return true;

        }

        return false;
    }

    function validateForm()
    {
        let contactForm = document.forms[0];

        if(contactForm)
        {
            contactForm.noValidate = true;
            document.body.style.backgroundColor = "black";
            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => 
            {
                if(firstName.value.length < 2)
                {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => 
            {
                if(lastName.value.length < 2)
                {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });



            // creates a "hook" or reference to the button element with an id of "submitButton"
            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                location.href="index.html"
            });
        }
        return false;
    }

    


    // named function
    function Start()
    {

       let title = highlightActiveLink();
    if(true && title == "joseph's den"){

   
       let success = addParagraphsToJumbotron();


       let formValidated = validateForm();


    } 
    if(true && title == "projects"){
        
        let success = addParagraphsToProjecttron();
 
        let formValidated = validateForm();
    
 
     } 

     if(true && title == "about me"){
        
        let success = addParagraphsToAbouttron();
 
        let formValidated = validateForm();
        
 
     } 
}
    



    window.addEventListener("load", Start);

})();




