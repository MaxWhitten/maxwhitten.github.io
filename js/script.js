const key = 'RFHSMRSC53QJED693QXVW9LQ9'
const github = 'https://github.com/MaxWhitten'
const main = '/index.html'

function redirect(url) { window.location.href = url };
function percentage(num, per) {
    return (per * num) / 100;
};
function bannerFetch(location, date, key) {
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/' + date + '/?key=' + key)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
function getMenuSvg() {
    fetch('/media/svg/moon.svg')
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            parser = new DOMParser();
            doc = parser.parseFromString(html, "text/html");
            const svg = doc.querySelector('svg');
            // svg.setAttribute('onclick', 'menuCheck()');
            svg.setAttribute('id', 'moonMenu');
            button = document.getElementById('moonContainer');
            button.append(svg)
            
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
        });
}
getMenuSvg()
function menuCheck() {
    toggle = document.getElementById('toggle1');
    if (toggle.checked === true) { toggle.checked = false } else { toggle.checked = true };
};
window.addEventListener('load', function () {
});