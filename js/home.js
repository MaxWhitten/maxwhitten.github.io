const github = 'https://github.com/MaxWhitten'

function menuCheck() { toggle = document.getElementById('toggle1'); if (toggle.checked === true) { toggle.checked = false } else { toggle.checked = true }; }; //toggles the mobile menu open or closed

function changeDisplayMode(item) { //changes display mode of projects on home page
    latest = document.getElementById('latest');
    featured = document.getElementById('featured');
    if (item === "latest") {
        render.loadFeaturedProjects('true');
        latest.removeAttribute('class')
        featured.setAttribute("class", 'active')
    } else {
        render.loadLatestProjects('true');
        latest.setAttribute("class", 'active')
        featured.removeAttribute('class')
    };
};
window.addEventListener('load', function () {
    render.loadLatestProjects(true);
    render.loadBlog(true);
});