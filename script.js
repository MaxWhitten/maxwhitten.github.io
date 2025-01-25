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
    desc: "SOCIETY<br>Henry Ford, a person, was born here<br><br>Henry Ford was born in Springwells Township, Michigan on July 30th 1863. He revolutionized the assembly line for factory production. Also made Ford Motors which is one of the most successful car companies in the world today.",
    pic: './media/images/springwells.webp',
    cite: '"Henry Ford." Britannica School, Encyclopædia Britannica, 22 Apr. 2024. school.eb.com/levels/high/article/Henry-Ford/109415. Accessed 15 Jan. 2025.'
  },
  2: {
    lat: 42.40886890015017,
    lng: -83.09541733219214 ,
    zoom: 14,
    name: "Highland Park Ford Factory",
    town: "Highland Park, MI",
    desc: "ECONOMICS<br>Ford purchased land and money changed hands<br><br>In September of 1907 Henry Ford bought 130 acres of land. The assembly line for vehicles would be first used in 1913 in Highland Park. Which caused a change in the automotive industry forever as it forced General Motors and Chrysler to follow suit.",
    pic: './media/images/highland.webp',
    cite: 'Corporate, Ford. “Highland Park.” Ford Corporate, 2025, corporate.ford.com/articles/history/highland-park.html.'
  },
  3: {
    lat: 42.3314,
    lng: -83.0458 ,
    zoom: 14,
    name: "Detroit - Motor City",
    town: "Detroit, MI",
    desc: "SOCIETY<br>The people changed the nick name of the city<br><br>Detroit became Motor City by Henry Ford bringing the assembly line to the city. And after Henry Ford brought the assembly line many other companies followed suit making factories in the City and made automobiles.",
    pic: './media/images/detroit.webp',
    cite: 'Government, Detroit. “Detroit History.” City of Detroit, 2025, detroitmi.gov/departments/detroit-history#:~:text=So%20why%20did%20Detroit%20become,been%20around%20for%20a%20while. '
  },
  4: {
    lat: 41.88335772257865,
    lng: -87.64405117430562,
    zoom: 14,
    name: "Henry Ford's inspiration for assembly line",
    town: "Detroit, MI",
    desc: "SOCIETY<br>Ford was inspired by other people to create the assembly line<br><br>Henry Ford was inspired by the meatpacking factories in Chicago and a grain belt conveyor. So he then broke down the process to assemble the Model T into 84 different steps. Then each worker was trained to do just one of the steps. And in 1913 the first assembly line was created meaning Ford was able to produce cars at a record breaking rate. ",
    pic: './media/images/chicago.webp',
    cite: 'S, P B. “A Science Odyssey: People and Discoveries: Ford Installs First Moving Assembly Line.” PBS, Public Broadcasting Service, 2025, www.pbs.org/wgbh/aso/databank/entries/dt13as.html#:~:text=Ford%20was%20inspired%20by%20the,T%20into%2084%20distinct%20steps.'
  },
  5: {
    lat: 39.20592178078567,
    lng: -94.48257974669326,
    zoom: 14,
    name: "How Henry Ford helped the middle class.",
    town: "Kansas City, MO",
    desc: "ECONOMICS<br>The lower prices helped more people to be able to afford cars<br><br>Henry Ford was inspired by the meatpacking factories in Chicago and a grain belt conveyor. So he then broke down the process to assemble the Model T into 84 different steps. Then each worker was trained to do just one of the steps. And in 1913 the first assembly line was created meaning Ford was able to produce cars at a record breaking rate. ",
    pic: './media/images/kansas.webp',
    cite: 'Corporate, Ford. “The Moving Assembly Line and the Five-Dollar Workday.” Ford Corporate, 2025, corporate.ford.com/articles/history/moving-assembly-line.html#:~:text=What%20made%20this%20assembly%20line,built%20step%2Dby%2Dstep.'
  },
  6: {
    lat: 42.31465204044832,
    lng: -83.16215303219698,
    zoom: 14,
    name: "UAW (United Auto Workers)",
    town: "Dearborn, MI",
    desc: "SOCIETY<br>The UAW was able to raise wages and lower hours for the people<br><br>In 1937 Walter Reuther and his United Auto Workers Union brought both Chrysler and General Motors to sign a contract in pursuit of higher pay, lower hours, and more improvements in the workers life by staging massive sit down strikes. He intended to do the same to Ford but Henry Ford showed he had no intent of doing the same. On May 26 1937 Walter came to the Ford's River Rouge complex with clergymen, representatives from the Senate Commitee of Civil Liberties, and dozens of women from the UAW. Ford’s “fixer” Harry Bennet was dispatched along with many men to “disperse” the crowd. They ended up injuring 14 in a bad fight. Ford, following the bad publicity from this event and also having just been summoned to a hearing before the National Labor Relations Board, Henry Ford was forced to sign the unions contract to improve both the hours and pay of their workers.",
    pic: './media/images/overpass.webp',
    cite: 'King, Gilbert. “How the Ford Motor Company Won a Battle and Lost Ground.” Smithsonian.Com, Smithsonian Institution, 30 Apr. 2013, www.smithsonianmag.com/history/how-the-ford-motor-company-won-a-battle-and-lost-ground-45814533/.'
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
  document.getElementById('blurbText').scrollTo(0,0);
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
  document.getElementById('blurbText').scrollTo(0,0);
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
