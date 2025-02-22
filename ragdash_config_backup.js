// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "KQ4CCM RagDash";

// Grid layout desired
var layout_cols = 2;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#e00606",
    "AllStar",
    "http://192.168.1.6/supermon2/link.php?nodes=607180,6487",
    1,
    "L"
  ],
  [
    "#3b066f",
    "AllScan",
    "http://http://192.168.1.6/allscan/",
    1,
    "L"
  ],
  [
    "#0421ae",
    "PISTAR",
    "http://pi-star.local/",
    1,
    "L"
  ],
  [
    "#b1f41f",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#f06c00",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    1,
    "R"
  ],
  [
    "#890101",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    1,
    "R"
  ],
  [
    "#abd2f2",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    1,
    "R"
  ],
  [
    "#f41f91",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    1,
    "R"
  ],
  [
    "#11ff00",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    1,
    "R"
  ],
  [
    "#04ebfb",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    1,
    "R"
  ],
  [
    "#f0190a",
    "QRZ.Com",
    "https://www.qrz.com/db/KQ4CCM",
    1,
    "L"
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "DVS Dash",
    "iframe|http://167.172.135.185 "
  ],
  [
    "YSF DashBoard",
    "iframe|http://ragchewysf.network "
  ],
  [
    "RC Supermon2 ",
    "iframe|http://ragchewnetwork.ddns.net:8080/supermon2/link.php?nodes=60568",
    "6487"
  ],
  [
    "GMRS DashBoard ",
    "iframe|http://ragchewgmrshub.ddns.net/supermon2/link.php?nodes=531048",
    "531049"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  0,
  0,
  0,
  null
];

// CUT END