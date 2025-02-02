window.onload = function() {
    document.getElementById("menu-icon").addEventListener("click", handleResponsiveNavBar);

    document.querySelectorAll('#nav-bar a:not(.icon)').forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById("nav-bar").className = "topnav";
        });
    });

    document.addEventListener('click', function(e) {
        const navBar = document.getElementById("nav-bar");
        if (!navBar.contains(e.target)) {
            navBar.className = "topnav";
        }
    });
};

function handleResponsiveNavBar(e) {
    var navBar = document.getElementById("nav-bar");
    if (navBar.className === "topnav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "topnav";
    }
}
