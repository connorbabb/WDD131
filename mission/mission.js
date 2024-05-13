const themeSelector = document.getElementById('theme');
function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('blue_logo').style.display = 'none';
        document.getElementById('white_logo').style.display = 'block';
    } 
    else {
        document.body.classList.remove('dark');
        document.getElementById('blue_logo').style.display = 'block';
        document.getElementById('white_logo').style.display = 'none';
    }
}

themeSelector.addEventListener('click', changeTheme);
