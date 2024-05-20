//prereqs
const key = 'RFHSMRSC53QJED693QXVW9LQ9'
const github = 'https://github.com/MaxWhitten'

function redirect(url) {window.location.href = url}
function percentage(num, per) { return (per * num) / 100; }; //find percentage for canvas
function bannerFetch(location, date, key) { fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/' + date + '/?key=' + key).then(response => { if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); }).then(data => { console.log(data); }).catch(error => { console.error('Error:', error); }); };
window.addEventListener('load', function () {
//     foot = this.document.getElementsByTagName('footer')[0];
//     console.log(foot)
//     footTop = doc
//     foot.setAttribute(style, "margin-top")
})