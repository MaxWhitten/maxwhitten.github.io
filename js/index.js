const body = document.body
const srcs = document.getElementById('jsload').getAttribute('files').split(' ');

//constants
function redirect(url) { window.location.href = url }; //redirect to differend page
function percentage(num, per) { return (per * num) / 100; }; //finds a certain percentage of a number

//load other js
for (const src of srcs) {
    console.log(src);
    let script = document.createElement('script');
    script.setAttribute('src', src)
    script.setAttribute('type', 'text/javascript')
    body.appendChild(script)
}