/* 
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

/*This selects the main container so it may be used by JS*/
let main = document.querySelector(".container")

/*Converts JS object into JSON string*/
const JSONstringify = JSON.stringify(courseInfo)

/*Converts JSON into JS object*/
const obj = JSON.parse(JSONstringify)

/*A for loop thar loops through all the attributes 
or list elements present in the course data constant.*/
for(const attribute in obj){
    /**
     * Creates semantic elements to store the list data in.
     */
    let section = document.createElement("section")
    
    let heading = document.createElement("h3")
    /**
     * A class name is given in order to make selecting it easier.
     */
    heading.className = "courseInfo"
    
    let prof = document.createElement("h4")
    
    let enroll = document.createElement("p")
    
    let button = document.createElement("button")
    
    button.innerHTML = "<button id='course-btn'>Sign-up for course</button>"
    
    enroll.className = "enroll"
    
    let location = document.createElement("p")
    
    location.className = "location"
    
    let info = document.createElement("p")
    
    /**
     * zyBooks, Referenced JSON and how to access list elements within JS objects, https://learn.zybooks.com/zybook/DALCSCI1170SampangiWinter2022, 27 03 2022
     */
    
    /**
     * Retrieves the list item from JS object and requests certain values using key names.
     */
    heading.innerText = obj[attribute].code +": "+ obj[attribute].name
    
    prof.innerText = obj[attribute].prof
    
    enroll.innerText = "Current enrollment: " + obj[attribute].currEnroll + " (max: " + obj[attribute].maxEnroll + ")"
    
    location.innerText = "Location: " + obj[attribute].location + " (schedule: " + obj[attribute].schedule + ")"
    
    info.innerText = obj[attribute].info
    
    
    /**
     * Appends objects into appropriate elements and finally into the main container
     * where it can be displayed.
     */
    section.appendChild(heading)
    
    section.appendChild(prof)
    
    section.appendChild(enroll)
    
    section.appendChild(location)
    
    section.appendChild(info)
    
    section.appendChild(button)
    
    main.appendChild(section)
    
    
    /**
     * Function that creates a p element to remove the h3 styling
     * and then append to course bag.
     */
    function courseDisplay(){
        let p = document.createElement("p")
        
        p.innerText = heading.innerText
        
        document.querySelector(".course-selection-bag").appendChild(p)
    }  
    
    
    /**
     * Event listener that activates when a button is clicked. 
     * This displays the course code and name in the course-bag side of the homepage after being styled.
     */
    button.addEventListener("click",courseDisplay,false)
} 

