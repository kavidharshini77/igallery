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
