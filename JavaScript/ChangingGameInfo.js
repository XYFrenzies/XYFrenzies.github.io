
var slideIndex = 1;
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

function ChangeSlides(n)
{
    var i;
    var x = document.getElementsByClassName("GameImages");
    var dots = document.getElementsByClassName("SlideCurrent");
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
        
    }
}
function main()
{
    ChangeSlides(slideIndex);
}