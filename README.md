# GeoFS-alerts
GPWS/TCAS/whatever audio alerts for your airplane.

This Tampermonkey userscript provides support for GPWS/TCAS/whatever alerts for your airplane. 

## List of alerts
- stall alert (stick shaker)
- bank angle (when roll is over 40 degrees)
- overspeed (when over 350 kts)
- autopilot (when ap is turned off)
- terrain (when ground is closer than 1000 ft)
- low gear (when flying low without gear down)
- low flaps (when flying low without extended flaps)
- sinkrate (when vertical speed is greater (lower) than -2500)
- altitude callouts (2500, 1000, 500, 400, 300, 200, plus 100, 100, 50, 40, minimums, 30, 20, 10, 5), but only when near
the airport and configured for landing (gear down and flaps extended)
- retard callout (when touching ground)

## A note
I am not a pilot, just someone who likes airplanes and aviation. I might have screwed something up, but please open an
issue here on Github and i'll try to fix it.

# Requirements
- [Tampermonkey](https://www.tampermonkey.net/)

## Installation
[Install GeoFS-alerts](https://github.com/avramovic/geofs-alerts/raw/master/GeoFS-TCAS-GPWS-Alerts.user.js)