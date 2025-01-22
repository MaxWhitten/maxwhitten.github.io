//
//                        Created by Max Whitten
//
//       ▓█████  ▄████▄   ██▓    ▓██   ██▓ ██▓███    ██████ ▓█████
//       ▓█   ▀ ▒██▀ ▀█  ▓██▒     ▒██  ██▒▓██░  ██▒▒██    ▒ ▓█   ▀
//       ▒███   ▒▓█    ▄ ▒██░      ▒██ ██░▓██░ ██▓▒░ ▓██▄   ▒███
//       ▒▓█  ▄ ▒▓▓▄ ▄██▒▒██░      ░ ▐██▓░▒██▄█▓▒ ▒  ▒   ██▒▒▓█  ▄
//       ░▒████▒▒ ▓███▀ ░░██████▒  ░ ██▒▓░▒██▒ ░  ░▒██████▒▒░▒████▒
//       ░░ ▒░ ░░ ░▒ ▒  ░░ ▒░▓  ░   ██▒▒▒ ▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░░░ ▒░ ░
//        ░ ░  ░  ░  ▒   ░ ░ ▒  ░ ▓██ ░▒░ ░▒ ░     ░ ░▒  ░ ░ ░ ░  ░
//          ░   ░          ░ ░    ▒ ▒ ░░  ░░       ░  ░  ░     ░
//          ░  ░░ ░          ░  ░ ░ ░                    ░     ░  ░
//              ░                 ░ ░
//
//                                ECLYPSE
//

let map;

async function init() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: points[1].lat, lng: points[1].lng },
    zoom: points[1].zoom,
  });

  document.getElementById('blurbText').innerHTML = points[1].desc;
  document.getElementById('location').innerHTML = points[1].town;

  for (pointStr in points) {
    const point = points[pointStr]
    marker = new google.maps.Marker({
      position: { lat: point.lat, lng: point.lng },
      map: map,
      title: point.name
    });
  }
}
init();

function moveTo(target, zoom) {
  map.setZoom(5);
  setTimeout(() => {
    map.panTo(target);
    setTimeout(() => {
      map.setZoom(zoom);
    }, 1000);
  }, 1000);
}

setTimeout(() => {
  document.getElementById('startWrapper').setAttribute('style', 'display:none;');
  console.log(
    `%c\n\n                                                Created by Max Whitten\n              ▓█████    ▄████▄      ██▓        ▓██      ██▓  ██▓███        ██████  ▓█████\n              ▓█      ▀  ▒██▀  ▀█    ▓██▒          ▒██    ██▒▓██░    ██▒▒██        ▒  ▓█      ▀\n              ▒███      ▒▓█        ▄  ▒██░            ▒██  ██░▓██░  ██▓▒░  ▓██▄      ▒███\n              ▒▓█    ▄  ▒▓▓▄  ▄██▒▒██░            ░  ▐██▓░▒██▄█▓▒  ▒    ▒      ██▒▒▓█    ▄\n              ░▒████▒▒  ▓███▀  ░░██████▒    ░  ██▒▓░▒██▒  ░    ░▒██████▒▒░▒████▒\n              ░░  ▒░  ░░  ░▒  ▒    ░░  ▒░▓    ░      ██▒▒▒  ▒▓▒░  ░    ░▒  ▒▓▒  ▒  ░░░  ▒░  ░\n                ░  ░    ░    ░    ▒      ░  ░  ▒    ░  ▓██  ░▒░  ░▒  ░          ░  ░▒    ░  ░  ░  ░    ░\n                    ░      ░                    ░  ░        ▒  ▒  ░░    ░░              ░    ░    ░          ░\n                    ░    ░░  ░                    ░    ░  ░  ░                                        ░          ░    ░\n                            ░                                  ░  ░\n\n                                                               ECLYPSE\n`,
    `@font-face {font-family: "Univers Next Typewriter";font-weight: 400;font-style: normal;font-display: swap;src: url("./media/typewriter.woff2") format("woff2"); }color: #13c4fa;font-family: "Univers Next Typewriter", sans-serif;font-size:1.5rem;font-weight:800;`
  );
}, "9500");

const points = {
  1: {
    lat: 42.3049,
    lng: -83.2294,
    zoom: 16,
    name: "Henry Ford's childhood home",
    town: "Springwells, MI",
    desc: "SOCIETY<br><br>Henry Ford was born in Springwells Township, Michigan on July 30th 1863. He revolutionized the assembly line for factory production. Also made Ford Motors which is one of the most successful car companies in the world today.",
    pic: './media/images/springwells.webp',
    cite: '"Henry Ford." Britannica School, Encyclopædia Britannica, 22 Apr. 2024. school.eb.com/levels/high/article/Henry-Ford/109415. Accessed 15 Jan. 2025.'
  },
  2: {
    lat: 42.40886890015017,
    lng: -83.09541733219214 ,
    zoom: 14,
    name: "Highland Park Ford Factory",
    town: "Highland Park, MI",
    desc: "In September of 1907 Henry Ford bought 130 acre",
    pic: '',
    cite: 'Corporate, Ford. “Highland Park.” Ford Corporate, 2025, corporate.ford.com/articles/history/highland-park.html.'
  }
}

var currentPoint = 1;

//let targetLocation = { lat: 37.7749, lng: -122.4194 }; // San Francisco, for example

function prev() {
  if (currentPoint == 1) {
    return;
  }
  if (currentPoint - 1 == 1) {
    document.getElementById('prev').setAttribute('style', 'fill: var(--text-2);')
    document.getElementById('prev').parentNode.setAttribute('style', 'cursor: not-allowed;')
  } if (currentPoint == Object.keys(points).length) {
    document.getElementById('next').setAttribute('style', '')
    document.getElementById('next').parentNode.setAttribute('style', '')
  }
  currentPoint--;
  const point = points[currentPoint];
  document.getElementById('blurbText').innerHTML = point.desc;
  document.getElementById('location').innerHTML = point.town;
  moveTo({ lat: point.lat, lng: point.lng }, point.zoom);
}

function next() {
  if (currentPoint == Object.keys(points).length) {
    return
  }
  if (currentPoint + 1 == Object.keys(points).length) {
    document.getElementById('next').setAttribute('style', 'fill: var(--text-2);')
    document.getElementById('next').parentNode.setAttribute('style', 'cursor: not-allowed;')
  } if (currentPoint == 1) {
    document.getElementById('prev').setAttribute('style', '')
    document.getElementById('prev').parentNode.setAttribute('style', '')
  }
  currentPoint++;
  const point = points[currentPoint];
  document.getElementById('blurbText').innerHTML = point.desc;
  document.getElementById('location').innerHTML = point.town;
  moveTo({ lat: point.lat, lng: point.lng }, point.zoom);
}

//background-color: var(--background-color);
let picCurrent = 0
function togglePic() {
  if (picCurrent == 0) {
    document.getElementById('sideWrapper').setAttribute('style', `background-image: url(${points[currentPoint].pic})`);
    document.getElementById('blurb').setAttribute('style', 'display: none;');
    document.getElementById('sideLeft').setAttribute('style', 'opacity: 1;');
    document.getElementById('sideRight').setAttribute('style', 'opacity: 0;');
    document.getElementById('sideLeft').children[0].setAttribute('style', 'pointer-events: all;');
    document.getElementById('sideRight').children[0].setAttribute('style', 'pointer-events: none;');
    document.getElementById('sideLeft').setAttribute('onclick', 'togglePic()');
    document.getElementById('sideRight').setAttribute('onclick', '');
    picCurrent++;
  } else {
    document.getElementById('sideWrapper').setAttribute('style', `background-color: var(--background-color);`);
    document.getElementById('blurb').setAttribute('style', '');
    document.getElementById('sideRight').setAttribute('style', 'opacity: 1;');
    document.getElementById('sideLeft').setAttribute('style', 'opacity: 0;');
    document.getElementById('sideRight').children[0].setAttribute('style', 'pointer-events: all;');
    document.getElementById('sideLeft').children[0].setAttribute('style', 'pointer-events: none;');
    document.getElementById('sideRight').setAttribute('onclick', 'togglePic()');
    document.getElementById('sideLeft').setAttribute('onclick', '');
    picCurrent--;
  }
}

let cite = 0

function toggleCite() {
  const point = points[currentPoint]
  if (cite == 0) {
    document.getElementById('blurb').innerHTML = point.cite;
    cite++;
  } else {
    document.getElementById('blurb').innerHTML = point.desc;
    cite--;
  }
}