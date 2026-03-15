# Ex.07 Design of Interactive Image Gallery
## Date:15.03.2026

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
Imggallery.html

<html>
    <head>
        <title>Interactive Image Gallery</title>
        <link href="imggallery.css" rel="stylesheet">
        <script src="imggallery.js"></script>
    </head>
    <body>
        <h1 text align="center" text color="white">TRAVEL DESTINATIONS GALLERY</h1>
        <div class="container">

            <div class="image-box">
                <img src="1.png" id="image">
                <p class="about" id="about">
                    <b>SWITZERLAND</b>
                </p>
            </div>

            <div class="buttons">
                <button onclick="prev()">Previous</input>
                <button onclick="next()">Next</input>
            </div>

        </div>
        <div class="footer">
            <p>&copy; KAVIDHARSHINI RAMESH(25012397)</p>
        </div>
    </body>

</html>

Imggallery.css

body
{
    background: url("igbg.jpg")no-repeat bottom / cover;
}
.container
{
    display:flex;
    justify-content: center;
    align-items: center;    
    background-color: rgb(250, 246, 248);
    width: fit-content;
    padding:20px;
    margin: 70px auto; 
    flex-direction: column;
    border-radius: 10px;
    border-right:#483e96 solid 7px;
    border-bottom:#7bb0d6 solid 7px;
}
.image-box img
{
    width:450px;
    height:330px;
    object-fit: cover;
    border-radius: 10px;
    border: outset rgb(80, 153, 199) 5px;
}
.image-box, .about
{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: rgb(242, 244, 245) 5px;
    
}
.buttons
{
    display: flex;
    gap: 10px;             
    margin-top: 15px;
    background-color: #74cff9; 
    padding: 8px;
    border-radius: 8px;
   
}
button
{
    width: 120px;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: #e1dce2;
    color: rgb(61, 68, 69);
    border: none;
    border-radius: 20px 20px 20px 20px;
    cursor: pointer;
    border: outset rgb(31, 92, 131) 5px;
}

.footer p
{
    position:fixed;
    background-color: rgb(31, 92, 131);
    left:0;
    bottom:0;
    width:100%;
    color:rgb(247, 241, 241);
    text-align: center;
    font-size: 18px;
    padding: 3px;
    margin-bottom: 0px;
}

Imggallery.js

var img = [
    {image:"SWISS.jpeg", about:"SWITZERLAND"},
    {image:"USA.jpeg", about:"USA"},
    {image:"PARIS.jpeg", about:"PARIS"},
    {image:"DUBAI.jpeg", about:"DUBAI"},
    {image:"LONDON.jpeg", about:"LONDON"},
   
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML = img[index].about;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML= img[index].about;
}
```
## OUTPUT:
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
