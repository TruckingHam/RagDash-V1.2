// RagChew Dashboard V1.2 by KEVIN - KQ4CCM and other helping Ham's. Source code credit: 
//VA3HDL (Pablos) Dashboard >>>> https://github.com/VA3HDL/hamdashboard?tab=readme-ov-file

const disableSetup = false;
var topBarCenterText = `RagChew Dashboard`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items - 1 to 12 items Left & Right coloerd tabs.
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["2196F3", "AllStar", "http://192.168.1.6/supermon2/link.php?nodes=607180,6487", "1"],

  ["2196F3", "AllScan", "http://192.168.1.6/allscan", "1"],
  
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],

  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],

  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41", "1","R",
  ],
  
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],

  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aURL = [
  ["DVS Dash", "http://167.172.135.185/index.php"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KNQA_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "SATELLITE CAN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],

// Place your own Title and URL below. Note you can arrange any of the 12 URL's as you like. 

  ["YOUR TEXT", "iframe|https://YOUR URL HERE"],

  ["YOUR TEXT", "iframe|https://YOUR URL HERE"],


  ["YOUR TEXT", "iframe|https://YOUR URL HERE"],

  ["YOUR TEXT", "iframe|https://YOUR URL HERE"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];
