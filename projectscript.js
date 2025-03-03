//https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/
//https://www.geeksforgeeks.org/javascript-array-of-arrays/

let projects = [
    { name: 'Hangman', date: "1/28/25", img:"/images/hangmanImg.PNG", link: "/projects/hangman/hangman.html", desc: "The classic hangman game done in JavaScript. Its also my first project in JS that I did myself instead of utilizing some other tutorial or source to assist."},
    { name: 'Hangman', date: "1/28/25", img:"/images/hangmanImg.PNG", link: "/projects/hangman/hangman.html", desc: "The classic hangman game done in JavaScript. Its also my first project in JS that I did myself instead of utilizing some other tutorial or source to assist."},
    { name: 'Hangman', date: "1/28/25", img:"/images/hangmanImg.PNG", link: "/projects/hangman/hangman.html", desc: "The classic hangman game done in JavaScript. Its also my first project in JS that I did myself instead of utilizing some other tutorial or source to assist."},
    { name: 'Hangman', date: "1/28/25", img:"/images/hangmanImg.PNG", link: "/projects/hangman/hangman.html", desc: "The classic hangman game done in JavaScript. Its also my first project in JS that I did myself instead of utilizing some other tutorial or source to assist."}
]

// Function to build the project table from the array projects
function buildProjectTable() {
    if (projects.length > 0) {
        for (var i = 0; i < projects.length; i++)
        {
            // Create the surronding div element
            var projectInnerBox = document.createElement("div");
            projectInnerBox.setAttribute("class", "projectInnerData");
            document.getElementById("projectOuter").appendChild(projectInnerBox)

            //Create the name, date and desc box
            var nameInnerBox = document.createElement("div");
            nameInnerBox.setAttribute("class", "projectInnerFlexLeft");
            projectInnerBox.appendChild(nameInnerBox);

            // Create the variables for the name box
            var nameData = document.createElement("h3");
            var descData = document.createElement("p");
            var dateData = document.createElement("p");
            nameData.innerText = projects[i].name;
            descData.innerText = projects[i].desc;
            dateData.innerText = 'Date: ' + projects[i].date;
            nameInnerBox.appendChild(nameData);
            nameInnerBox.appendChild(descData);
            nameInnerBox.appendChild(dateData);

            // Create the image box
            var imgInnerBox = document.createElement("div");
            imgInnerBox.setAttribute("class", "projectInnerFlexCenter");
            projectInnerBox.appendChild(imgInnerBox);
            //Create the image box variables
            var imgData = document.createElement("img");
            imgData.setAttribute("class", "innerImg")
            imgData.src = projects[i].img;
            imgInnerBox.appendChild(imgData);

            // Create the link box
            var linkInnerBox = document.createElement("div");
            linkInnerBox.setAttribute("class", "projectInnerFlexRight");
            projectInnerBox.appendChild(linkInnerBox);
            // Create the link variables
            var linkData = document.createElement("a");
            var linkDataButton = document.createElement("button");
            linkDataButton.innerText = "View Project";
            linkData.href = projects[i].link;
            linkInnerBox.appendChild(linkData);
            linkData.appendChild(linkDataButton);
        }
    }
}
// Calling the project table
buildProjectTable();

