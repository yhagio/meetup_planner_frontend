### Meetup Event Planner (Just form)

### DEMO
http://yhagio.github.io/meetup_planner_frontend

![Screenshot](/screenshot.png)

### To Run locally
```
npm i -g http-server
git clone https://github.com/yhagio/meetup_planner_frontend.git mp
cd mp
npm install
gulp
cd build
http-server
```

### Tested browsers
- Google Chrome Version 46.0.2490.86 (64-bit)
- Safari Version 9.0.1 (11601.2.7.2)
- iOS Safari 9

### Notes
- For date/time, I decided to use Bootstrap 3 Datepicker for all instead of using native 'datetime-local' for Chrome browser since the native one's UI is hard for desktop users to select the time (not good user experience)
- Add `ontouchstart` attribute in `<body>` to enable "active" pseudo class on iOS
- Add `-webkit-appearance: none;` for CSS to enable `box-shadow` in iOS Safari

### Extra
- I also created full-stack version Node.js/Expressjs/MongoDB in [this repo](https://github.com/yhagio/meetup_planner)

### References
- [bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker)
- [enabling-active-state-support-on-ios](https://developers.google.com/web/fundamentals/design-and-ui/input/touch/active-states?hl=en#enabling-active-state-support-on-ios)
- [iOS Safari - box-shadow issue `-webkit-appearance: none;`](http://stackoverflow.com/questions/21401766/box-shadow-not-shown-on-safari-mobile-on-ios-7-in-landscape/26687797#26687797)
