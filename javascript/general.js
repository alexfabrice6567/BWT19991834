var opened = false;

function showMenu() {
    var hiddenMenu = document.getElementById('hidden-header');

    if (!opened) {
        hiddenMenu.style.display = "flex";
    }
    else {
        hiddenMenu.style.display = "none";
    }

    opened = !opened;
}

function hideMenu() {
    var hiddenMenu = document.getElementById('hidden-header');
    opened = false;
    hiddenMenu.style.display = "none";
}