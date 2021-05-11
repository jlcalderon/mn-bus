# MN-Bus

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Demo

![Demo](./client/public/mn-bus.gif)

## Contents

- [Overview](#Overview)
- [License](#License)
- [User Stories](#User_Stories)
- [Tech Specs](#Tech_Specs)
- [Assumptions Made During Development](#Assumptions_Made_in_Development)
- [How to Build and Run the App](#Build_and_Run)
- [Test](#Test)
- [Contributing](#Contributing)
- [Future Development](#Future_Development)
- [Questions](#Questions)

## Overview

Contains an application that tells you the bus stops for a given route and direction of the Minnesota Metro Transit Transportation.

## License

This app is using the **MIT** license. Is open source and free. For more information about the **MIT** license terms of use [_Licence_](https://opensource.org/licenses/MIT)

## User_Stories

## Tech_Specs

This app was developed with React JS functional components with the hooks aproach and is using the [react-router-dom] package to handle application routing and to handle state in components context this app rely on `useState` and `useEffect` hooks.

This app is composed by 4 key components:

| Name          | Location in project direcotry     | Type      |
| :------------ | :-------------------------------- | :-------- |
| Home.js       | **/client/src/pages/home**        | Page      |
| Directions.js | **/client/src/pages/directions**  | Page      |
| Bustops.js    | **/client/src/pages/bustops**     | Page      |
| Header.js     | **/client/src/components/header** | Component |

To retreive data of the Minneapolis Metro Transit bus line database, this app is using the API and services provided by the [Metro Transit Next Trip API](https://svc.metrotransit.org/nextrip).

This app has a local server runnig in the background. On development enverironment API routes are proxy to `http://localhost:3001`, to let you hit the endpoints of the Metro Transit API and avoid `CORS`. Front-end use `http://localhost:3000/` wich is running the React client.

To handle all node js server related functionalities such as api routes this app rely on `express` , `axios`, `dotenv` and `cors` to switch from Production to Development or viceversa, this app use `if-env`. To update while you develop this app rely on `concurrently` and `nodemon` devDependencies to stop and re run the server and client after any change made in the code base.

For styling purposes I use plain CSS and I guide myself to make a decent and uniform UI by drawing a low fidelity wireframe and following this pattern in the main 4 components.

## Assumptions_Made_in_Development

- I knew I was going to use React for this app
- I assumed that I need to guide myself to build my app following the functionalities of the actual [metro transit app](https://www.metrotransit.org/nextripbadge.aspx)
- I assumed that I needed to understand and figure out the endpoints of the Metro Transit API
- At the very beginning I misunderstood the API base url with the service descriptions explained [here](https://svc.metrotransit.org/nextrip/help)
- I thougth that I could use `react-router` and `react-router-dom` to make the application routing
- I assumed I would need to setup a server for the app
- Because of the mojority of server-side APIs that I had use in the past deliver JSON responses I thought that this was going to be the case here with the Metro Transit API, turns out that the default format is XML so I need it to switched reponses to JSON format
- I assumed that because the Metro Transit API is public, I would not have any problem to hit the endpoints wich was false because I ran into `CORS` issues

## Build_and_Run

To run this project on localhost follow these steps in order:

1. Open your terminal and change directory into a folder where you want to clone this app.
2. Open the [repsitory](https://github.com/jlcalderon/mn-bus) in your web browser and click the `Code` button and **copy** the **https git clone link**.
3. Go back to your terminal and run the command: `git clone <paste the copied here>`
4. Once you finish cloning, in your terminal type: `cd mn-bus`
5. Type the command: `npm install` to install all dependencies including server and client
6. Type the command: `npm start` to run both the server and client

**Note:** To succed runnig the app on your local machine you must have [node.js](https://nodejs.org/en/) installed and configured.

## Test

Coming up...

## Contributing

Please feel free to add contributions that may be beneficial to this app. To be a contributer send an email to <jlcalderonfuentes@gmail.com> requesting access to this repository.Please know that if you fork this repository it will be easy to approve your changes and merge to the main branch.

## Future_Development

- [ ] Add unit testing for key functionalities and components
- [ ] Add a server-side Maps API with geolocation services to open the stops locations in Map canvas
- [ ] Measure distance in Map from user current location to the stop location

## Questions

Any further questions about this project can be emailed directly to: <jlcalderonfuentes@gmail.com>.
