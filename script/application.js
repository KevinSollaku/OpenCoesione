window.addEventListener('DOMContentLoaded', function(){
    setHeader();
});
function getCurrentPageName(){
    let path = window.location.pathname;
    let pageName = path.split('/').pop();
    pageName = pageName.replace(/\.[^/.]+$/, "");
    return pageName;
}
function setHeader(){
    const currentPage = getCurrentPageName();
    const links = [
        { href: "home", text: "Home" },
        { href: "services", text: "Services" },
        { href: "about-us", text: "About us" },
        { href: "contact-us", text: "Contact us" },
    ];
    const header = document.querySelector('header');

    const navbar = document.createElement("div");
    navbar.className = "navbar";

    const logo = document.createElement("img");
    logo.src = "./style/ielectro-logo.png";
    logo.className = "logo";
    navbar.appendChild(logo);
    
    const image = document.createElement('div');
    image.classList.add('header-image');

    const title = document.createElement("h1");
    links.forEach(function(linkData) {
        const link = document.createElement("a"); 
        link.href = linkData.href;
        link.textContent = linkData.text;
        if(currentPage === linkData.href){
            image.style.backgroundImage = "url('./style/" + currentPage + ".png')";
            link.className = "active";
            title.textContent = linkData.text;
        }
        navbar.appendChild(link);
    });
    image.appendChild(title);
    header.appendChild(navbar);
    header.appendChild(image);
}