// ==UserScript==
// @name         GeoFS GPWS Alerts
// @namespace    https://avramovic.info/
// @version      2025-01-11
// @description  GPWS and other alerts for GeoFS
// @author       Nemanja Avramovic
// @match        https://www.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        GM.getResourceUrl
// @resource     stall https://github.com/avramovic/geofs-alerts/raw/master/audio/airbus-stall-warning.mp3
// @resource     bankangle https://github.com/avramovic/geofs-alerts/raw/master/audio/bank-angle-bank-angle.mp3
// @resource     overspeed https://github.com/avramovic/geofs-alerts/raw/master/audio/md-80-overspeed.mp3
// @resource     autopilot https://github.com/avramovic/geofs-alerts/raw/master/audio/airbus-autopilot-off.mp3
// @resource     terrain https://github.com/avramovic/geofs-alerts/raw/master/audio/terrain-terrain-pull-up.mp3
// @resource     lowgear https://github.com/avramovic/geofs-alerts/raw/master/audio/too-low-gear.mp3
// @resource     lowflaps https://github.com/avramovic/geofs-alerts/raw/master/audio/too-low-flaps.mp3
// @resource     sinkrate https://github.com/avramovic/geofs-alerts/raw/master/audio/sink-rate.mp3
// @resource     minimums https://github.com/avramovic/geofs-alerts/raw/master/audio/minimums.mp3
// @resource     plus100 https://github.com/avramovic/geofs-alerts/raw/master/audio/plus-100.mp3
// @resource     retard https://github.com/avramovic/geofs-alerts/raw/master/audio/airbus-retard.mp3
// @resource     h2500 https://github.com/avramovic/geofs-alerts/raw/master/audio/2500.mp3
// @resource     h1000 https://github.com/avramovic/geofs-alerts/raw/master/audio/1000.mp3
// @resource     h500 https://github.com/avramovic/geofs-alerts/raw/master/audio/500.mp3
// @resource     h400 https://github.com/avramovic/geofs-alerts/raw/master/audio/400.mp3
// @resource     h300 https://github.com/avramovic/geofs-alerts/raw/master/audio/300.mp3
// @resource     h200 https://github.com/avramovic/geofs-alerts/raw/master/audio/200.mp3
// @resource     h100 https://github.com/avramovic/geofs-alerts/raw/master/audio/100.mp3
// @resource     h50 https://github.com/avramovic/geofs-alerts/raw/master/audio/50.mp3
// @resource     h40 https://github.com/avramovic/geofs-alerts/raw/master/audio/40.mp3
// @resource     h30 https://github.com/avramovic/geofs-alerts/raw/master/audio/30.mp3
// @resource     h20 https://github.com/avramovic/geofs-alerts/raw/master/audio/20.mp3
// @resource     h10 https://github.com/avramovic/geofs-alerts/raw/master/audio/10.mp3
// @resource     h5 https://github.com/avramovic/geofs-alerts/raw/master/audio/5.mp3
// ==/UserScript==

(function () {
    'use strict';
    // load the audio clips
    let stickShake;
    GM.getResourceUrl("stall").then((url) => {
        stickShake = new Audio('data:audio/mp3;'+url);
        stickShake.loop = true;
    });

    let bankangle;
    GM.getResourceUrl("bankangle").then((url) => {
        bankangle = new Audio('data:audio/mp3;'+url);
        bankangle.loop = true;
    });

    let overspeed;
    GM.getResourceUrl("overspeed").then((url) => {
        overspeed = new Audio('data:audio/mp3;'+url);
        overspeed.loop = true;
    });

    let autopilot;
    GM.getResourceUrl("autopilot").then((url) => {
        autopilot = new Audio('data:audio/mp3;'+url);
        autopilot.loop = false;
    });

    let terrain;
    GM.getResourceUrl("terrain").then((url) => {
        terrain = new Audio('data:audio/mp3;'+url);
        terrain.loop = true;
    });

    let lowgear;
    GM.getResourceUrl("lowgear").then((url) => {
        lowgear = new Audio('data:audio/mp3;'+url);
        lowgear.loop = true;
    });

    let lowflaps;
    GM.getResourceUrl("lowflaps").then((url) => {
        lowflaps = new Audio('data:audio/mp3;'+url);
        lowflaps.loop = true;
    });

    let sinkrate;
    GM.getResourceUrl("sinkrate").then((url) => {
        sinkrate = new Audio('data:audio/mp3;'+url);
        sinkrate.loop = true;
    });

    let plus100;
    GM.getResourceUrl("plus100").then((url) => {
        plus100 = new Audio('data:audio/mp3;'+url);
        plus100.loop = false;
    });

    let h2500;
    GM.getResourceUrl("h2500").then((url) => {
        h2500 = new Audio('data:audio/mp3;'+url);
        h2500.loop = false;
    });

    let h1000;
    GM.getResourceUrl("h1000").then((url) => {
        h1000 = new Audio('data:audio/mp3;'+url);
        h1000.loop = false;
    });

    let h500;
    GM.getResourceUrl("h500").then((url) => {
        h500 = new Audio('data:audio/mp3;'+url);
        h500.loop = false;
    });

    let h400;
    GM.getResourceUrl("h400").then((url) => {
        h400 = new Audio('data:audio/mp3;'+url);
        h400.loop = false;
    });

    let h300;
    GM.getResourceUrl("h300").then((url) => {
        h300 = new Audio('data:audio/mp3;'+url);
        h300.loop = false;
    });

    let h200;
    GM.getResourceUrl("h200").then((url) => {
        h200 = new Audio('data:audio/mp3;'+url);
        h200.loop = false;
    });

    let h100;
    GM.getResourceUrl("h100").then((url) => {
        h100 = new Audio('data:audio/mp3;'+url);
        h100.loop = false;
    });

    let h50;
    GM.getResourceUrl("h50").then((url) => {
        h50 = new Audio('data:audio/mp3;'+url);
        h50.loop = false;
    });

    let h40;
    GM.getResourceUrl("h40").then((url) => {
        h40 = new Audio('data:audio/mp3;'+url);
        h40.loop = false;
    });

    let h30;
    GM.getResourceUrl("h30").then((url) => {
        h30 = new Audio('data:audio/mp3;'+url);
        h30.loop = false;
    });

    let h20;
    GM.getResourceUrl("h20").then((url) => {
        h20 = new Audio('data:audio/mp3;'+url);
        h20.loop = false;
    });

    let h10;
    GM.getResourceUrl("h10").then((url) => {
        h10 = new Audio('data:audio/mp3;'+url);
        h10.loop = false;
    });

    let h5;
    GM.getResourceUrl("h5").then((url) => {
        h5 = new Audio('data:audio/mp3;'+url);
        h5.loop = false;
    });

    let minimums;
    GM.getResourceUrl("minimums").then((url) => {
        minimums = new Audio('data:audio/mp3;'+url);
        minimums.loop = false;
    });

    let retard;
    GM.getResourceUrl("retard").then((url) => {
        retard = new Audio('data:audio/mp3;'+url);
        retard.loop = false;
    });


    let apWasOn = false;
    let apIsOn = false;
    let oldAltitude = 0;
    let altitude = 0;
    let wasOnGround = true;


    // wait until flight sim is fully loaded
    let itv = setInterval(
      function(){
          if(unsafeWindow.ui && unsafeWindow.flight && unsafeWindow.geofs){
              setInterval(function() { mainLoop(); }, 500);
              clearInterval(itv);
          }
      }
      ,500);

    function isGearUp() {
        return unsafeWindow.geofs.animation.values.gearPosition == 1;
    }

    function isGearDown() {
        return unsafeWindow.geofs.animation.values.gearPosition == 0;
    }

    function seaAltitude() {
        return unsafeWindow.geofs.animation.values.altitude;
    }

    function groundAltitude() {
        return seaAltitude() - unsafeWindow.geofs.animation.values.groundElevationFeet - 50;
    }

    function isDescending() {
        return unsafeWindow.geofs.animation.values.verticalSpeed < -50;
    }

    function isSinking() {
        return unsafeWindow.geofs.animation.values.verticalSpeed < -2500;
    }

    function isAscending() {
        return unsafeWindow.geofs.animation.values.verticalSpeed > 50;
    }

    function flapsRetracted() {
        return unsafeWindow.geofs.animation.values.flapsValue == 0;
    }

    function flapsExtended() {
        return unsafeWindow.geofs.animation.values.flapsValue > 0;
    }

    function getLatitude() {
        return unsafeWindow.geofs.aircraft.instance.lastLlaLocation[0];
    }

    function getLongitude() {
        return unsafeWindow.geofs.aircraft.instance.lastLlaLocation[1];
    }

    function isOnGround() {
        return unsafeWindow.geofs.animation.values.groundContact == 1 ? true : false;
    }

    function isStalling() {
        return unsafeWindow.geofs.aircraft.instance.stalling;
    }

    function isCrashed() {
        return unsafeWindow.geofs.aircraft.instance.crashed;
    }

    function isEngineOn() {
        return unsafeWindow.geofs.aircraft.instance.engine.on;
    }

    function haversine(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometers
        const toRad = (deg) => deg * (Math.PI / 180);

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    }

    function findNearestAirport() {
        let aircraftPosition = {
            lat: getLatitude(),
            lon: getLongitude(),
        };

        let nearestAirport = null;
        let minDistance = Infinity;

        for (let i in unsafeWindow.geofs.mainAirportList) {
            let ap = unsafeWindow.geofs.mainAirportList[i];
            let airportPosition = {
                lat: ap[0],
                lon: ap[1]
            };

            let distance = haversine(
              aircraftPosition.lat,
              aircraftPosition.lon,
              airportPosition.lat,
              airportPosition.lon
            );

            if (distance < minDistance) {
                minDistance = distance;
                nearestAirport = {
                    airport: i,
                    distanceInKm: distance
                };
            }

        }

        return nearestAirport;
    }


    function mainLoop(){

        if (unsafeWindow.geofs.isPaused()) {
            //paused, do not run the loop
            return;
        }

        // stall alert
        !isOnGround() && isStalling() ? stickShake.play() : stickShake.pause();

        // bank angle alert
        Math.abs(unsafeWindow.geofs.animation.values.aroll) > 40 ? bankangle.play() : bankangle.pause();

        // indicated airspeed overspeed alert
        const noAirspeedWarning = ["F-16 Fighting Falcon", "Concorde", "Sukhoi Su-35", "Boeing F/A-18F Super Hornet", "Wingsuit"];
        if (!noAirspeedWarning.includes(unsafeWindow.geofs.aircraft.instance.aircraftRecord.name)) {
            unsafeWindow.geofs.animation.values.kias > 350 ? overspeed.play() : overspeed.pause();
        }

        // autopilot disconnect alert
        apIsOn = unsafeWindow.geofs.autopilot.on;
        if (apWasOn && !apIsOn) {
            autopilot.play();
        } else if (!apWasOn && apIsOn) {
            autopilot.pause();
            autopilot.currentTime = 0;

        }
        apWasOn = apIsOn;

        // terrain alert
        if (isGearUp() && groundAltitude() <= 1000) {
            terrain.play();
        } else {
            terrain.pause();
            terrain.currentTime = 0;
        }


        let nearestAp = findNearestAirport();
        if (isDescending() && groundAltitude() <= 1500 && typeof nearestAp == "object" && nearestAp.distanceInKm < 20) {
            if (isGearUp()) {
                lowgear.play();
            } else {
                lowgear.pause();
                lowgear.currentTime = 0;

                if (flapsRetracted()) {
                    lowflaps.play();
                } else {
                    lowflaps.pause();
                    lowflaps.currentTime = 0;
                }
            }

        } else {
            lowgear.pause();
            lowgear.currentTime = 0;
            lowflaps.pause();
            lowflaps.currentTime = 0;
        }


        // sink rate
        isSinking() ? sinkrate.play() : sinkrate.pause();

        // height callouts when fully configured for landing and near airport
        altitude = groundAltitude();

        if (isDescending() && isGearDown() && flapsExtended() && typeof nearestAp == "object" && nearestAp.distanceInKm < 20) {
            if (oldAltitude > 2500 && altitude <= 2500) {
                h2500.play();
            } else if (oldAltitude > 1000 && altitude <= 1000) {
                h1000.play();
            } else if (oldAltitude > 500 && altitude <= 500) {
                h500.play();
            } else if (oldAltitude > 400 && altitude <= 400) {
                h400.play();
            } else if (oldAltitude > 300 && altitude <= 300) {
                h300.play();
            } else if (oldAltitude > 200 && altitude <= 200) {
                h200.play();
            } else if (oldAltitude > 150 && altitude <= 150) {
                plus100.play();
            } else if (oldAltitude > 100 && altitude <= 100) {
                h100.play();
            } else if (oldAltitude > 50 && altitude <= 50) {
                h50.play();
            } else if (oldAltitude > 40 && altitude <= 40) {
                h40.play();
            } else if (oldAltitude > 45 && altitude <= 45) {
                minimums.play();
            } else if (oldAltitude > 30 && altitude <= 30) {
                h30.play();
            } else if (oldAltitude > 20 && altitude <= 20) {
                h20.play();
            } else if (oldAltitude > 10 && altitude <= 10) {
                h10.play();
            } else if (oldAltitude > 5 && altitude <= 5) {
                h5.play();
            }
        }

        oldAltitude = altitude;

        // retard alert
        if (!wasOnGround && isOnGround() && !isCrashed() && isEngineOn()) {
            retard.play();
        }
        wasOnGround = isOnGround();
    }
})();