window.onload = function() {
    initNavBar();
    document.getElementById("menu-icon").addEventListener("click", handleResponsiveNavBar);
};

function initNavBar() {
    document.getElementById("nav-bar").innerHTML = `
        <a href="/" id="home" >Home</a>
        <a href="/projects.html" id="projects">Projects</a>
        <a href="/contact.html" id="contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" id="menu-icon">
            <div class="menu-bars" data-src="/src/icons/menu_light_64.png"></div>
        </a>
    `;
    handleActiveButton();
}

function handleActiveButton() {
    var pathArray = window.location.pathname.split('/');

    switch (document.title) {
        case "Projects":
            document.getElementById("projects").className = "active"
            break;
            case "Contact":
                document.getElementById("contact").className = "active"
                break;
                case "Home":
                document.getElementById("home").className = "active"
                break;
    
        default:
            break;
    }
}

function handleResponsiveNavBar() {
    var x = document.getElementById("nav-bar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
