
var slideIndex = 1;
var i;
function ChangeSlides(n)
{
    var x = document.getElementsByClassName("GameImages");
    var dots = document.getElementsByClassName("SlideCurrent");
    n++;
    if(n > x.length)
    {
        slideIndex = 1;
    }
    else if(n < 1)
    {
        slideIndex = x.length;
    }
    for(i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("white", "");
    }

    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += "white";
    setTimeout(ChangeSlides, 2500); 
}

function IncrementSlides(n)
{
    ChangeSlides(slideIndex += n);
}

function DecrementSlides(n)
{
    ChangeSlides(slideIndex -= n);
}

function CurrentSlide(n)
{
    ChangeSlides(slideIndex = n)
}
function main()
{
    ChangeSlides(slideIndex);
}