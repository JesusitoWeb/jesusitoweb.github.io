const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__menu-icon");
const headerList = document.querySelector(".header__list");

window.addEventListener("scroll", (e) =>
{
    if(window.scrollY == 0 && headerList.classList.contains("header__list--visible"))
    {
        header.classList.add("header--background");
    }
    else
    {
        header.classList.toggle("header--background", window.scrollY > 0);
    } 
})

menuButton.addEventListener("click", () =>
{   
    console.log(window.scrollY)

    if(header.classList.contains("header--background") && window.scrollY == 0)
    {
        header.classList.toggle("header--background");
        headerList.classList.toggle("header__list--visible");
    }
    else if(header.classList.contains("header--background"))
    {
        headerList.classList.toggle("header__list--visible");
    }
    else
    {
        header.classList.toggle("header--background");
        headerList.classList.toggle("header__list--visible");
    } 
})

