# Auralfy

_By [Andrew Moss](https://github.com/aMoss5150)

Enjoy the player at... [Auralfy](https://auralfy.herokuapp.com/)

Auralfy is a Spotify inspired player and visualizer. With a retro-futuristic jukebox theme and an aim to explore the “color” of music, and how one might translate/quantify feelings and emotions evoked by music into the visual realm.



## Index

- [API Documentation](https://github.com/ZaviarBrown/spaceXchange/wiki/API-Routes)
- [Database Schema](https://github.com/ZaviarBrown/spaceXchange/wiki/Database-Schema)
- [Frontend Routes](https://github.com/ZaviarBrown/spaceXchange/wiki/Frontend-Routes)
- [MVP Feature List](https://github.com/ZaviarBrown/spaceXchange/wiki/MVP-List)
- [User Stories](https://github.com/ZaviarBrown/spaceXchange/wiki/User-Stories)

## Technologies Used

- JavaScript
- React/Redux
- HTML
- Python
- WebAudio API
- Canvas API
- CSS
- Flask
- SQLAlchemy
- Tailwind CSS
- react-hifi
- react-particles-webgl



## Overview

The splash page is where users will be directed if not logged in. The theme is meant to simulate an older computer with a minimal and clean interface, it also imparts a feel as if you are booting up a jukebox or arcade game to the user. It will hold simple forms for login and sign-up that will be rendered based on state as well as a demo login button for easy access.

![](assets/sXc1.jpg)

## Unique (for me) Approach

At the start of this project I wanted to take a unique approach as my previous projects have a standard web page feel. I wanted to utilize more context to create an app/jukebox feel that renders components based off contexts that act like switches, rather than existing on a seperate route. This lead to having to plan a little bit more about how everything is going to work together due to mutual exclusivity of many separate conditions. It was an overall enjoyable experience and gives a really clean and pure feel to the user experience simulating the user is interacting with a jukebox screen and all the action so to speak, happens in one place. However, it did take me more time due to unfamiliarity of this approach and required me to think a few steps ahead and to be dynamic in my implementation. Through this project, the most important thing I learned was that planning is very important, but having an understanding of the fundamentals/system that you are using allows you the leniency required to be dynamic and approach new problems without worrying about hitting a brick wall.

## Home Page and Navigation

Upon login you are presented with the main/index page of the app, on the left-hand side exists the navigation for the user created vibes/playlists, here you can select a vibe. On the right/display side, if there is no currently selected vibe, the user is shown the artist preview page. There are artist "cards" designed to look like touch screen buttons within the app to add to user immersion. Upon selection of an artist you will set the open artist context to the artist's id and an artist page is built and rendered. There cannot be an artist context and vibe context open at the same time as they are mutually exclusive, this gives the behavior of menus that are opened and closed dynamically based off context and state, rather than having a separate "page" that each component exists at. All menus exists at the "/" user facing route.

![](assets/sXc2.jpg)

## Standard Player

Building a rock solid audio player was probably the most time consuming part of the process, going into the project with a goal of achieving an understanding of how the web audio API functions, communicates with the canvas API and to build from scratch when possible, made it the most intensive. This player is a result of probably 10 or so iterations to achieve the level of function that I desired. The player is only mounted when there is a play context. The controls are all functions that control the state of the audio's props within the component.

![](assets/sXc3.jpg)

## Play Context

A song is selected by a user from a user's vibe by clicking on the CD-ROM icon, this passes a song object to the play context. The play context holds the song object from the database, the status of whether the song is playing, paused, or stopped and the position of where the song is at in time in seconds. These are useful values that will enable me to pass values between the standard audio player and the visualizer player during transition, these are also going to be used and called to control a song's playback for the standard audio player.  

![](assets/sXc4.jpg)

## Mini Visualizer

The mini visualizer is in the style of an oscilloscope and during playback is displayed directly above the player controls section. There is an XL option which will smoothly transition to filling the whole display section of the page rather than just a small slice. This was built off the Osciloscope component in the react-hifi package. It was as a great intro into beginning to understand how the requestAnimationFrame function can be utilized to draw onto a canvas element, this layed the foundation for me to tackle the full screen visualizer/VIBE player to create a more bespoke audio visualizer.

![](assets/sXc5.jpg)

## React-hifi npm package
The react-hifi package is, "A composable Abstraction for AudioContext API with a easy to use react API." This allowed for me to manage and control the audio context with the included props and methods. The Sound component and Osciloscope are heavily utilized. The Sound component was helpful in aiding with creating an audio graph based off a simple URL for the audio source. The Sound component is then routed into the Osciloscope component, hence, the composability. All that was necessary for the Osciloscope was a useRef hook to target the created canvas element and a function that will be called by the Osciloscope component, "onVisualizationData" which is really an abstraction of a web audio analyser node and an animation looper to draw the lines on the canvas based off data gathered from the audio source. The decision to use react-hifi was vital in increasing my understanding of the WebAudio API as it was my first implmentation.

## Particle effects

The particles utilized for background mood setting are from react-particles-webgl npm package. The package is, "A 2D/3D particle library built with React, Three.js and WebGL." The abstraction afforded by this package was incredibly helpful in adding another level of immersion to the app, without having to go too far down the Three.js/WebGL rabbit hole. The controls are also what allowed me to be able to create custom built particle "scenes" for the app. For the full screen visualizer, particle controls are tied to the "audio features" of the song in the play context. Color, size, shape, line connectivity, rotation, movement are all parameters that are adjusted dynamically by the audio features values to create a unique landscape for each song.

![](assets/sXc6.jpg)

## VIBE player/Full Screen Visualizer page

The VIBE player is a full screen visualizer that is built based off the selected song. The user is taken to another route that consists of a particles background that is modulated based off a song's audio features. The size, shape, color, connectivity, speed and camera rotation are all variables that are dynamically adjusted and will be unique to each song. In the background, the artist's image is barely visible along with minimalistic controls, including two visualizer modes, one being more similar to a "Fountain" as it blooms upwards, and another to a "Projector", as it projects towards you as if it is coming from a distance. 


## VIBE Visualizer

A cooperation of the WebAudio API and the Canvas API is utilized to draw the lines of the visualizer in real time. Lines are drawn based on data taken from the source audio's analyser node, this data is then fed to the Canvas and the requestAnimationFrame is called and the lines are updated, this all happens up to 60 times a second, creating the illusion of a moving picture. I decided to use the frequency domain data as each line is actually representative of a specific frequency, the line height is controlled by the amplitude of each frequency and certain parameters will change based off that amplitude. The colors and line width are controlled by the audio features of the song and they work in conjunction with the overall color scheme including the particles. The shadow and highlighting of lines is controlled by the amplitude, shadows become more prevalent as amplitude is increased and lines are highlighted when a certain amplitude threshold is hit, acting to add a bit of emphasis that correlates with frequency. 

## HODL Through The Bad Times

Dealing with asynchronous JS proved to be the most difficult part of this project. We found that when chaining .then()'s, if we didn't pass in a callback we were running into occasional errors where the next function to be run in .then() would be undefined. This was happening at random on virtually every .then() chain, so when we finally figured this out it took our site from mostly functioning correctly to always functioning perfectly.

![](assets/sXc7.jpg)

An interesting problem we had to solve was giving our user historical data to render their portfolio stock chart. The issue is the chart is drawn using the data that the simulated stock market generates. However on initial load, the user shouldn't have any data ready to be displayed. To get around this we've given the user fake historical data and saved that to localStorage. This localStorage was built as a queue, so that when the stock market creates a new portfolio value, we can remove the oldest local value and append the new market-provided value.

![](assets/sXc8.jpg)

The only other issue we run into is when either the CoinGecko API or our very own Raspberry Pi API (more on that later) will fail on us. This usually occurs during brute force error testing, spamming the API's and hitting every route we can as fast as possible.

## The Future Is Now

We started off this project with mile-high aspirations, and a week-long build time made us question whether or not we'd be able to implement all of the features we wanted. Which is why we're so happy to have been able to implement everything we had originally planned for.

### Raspberry Pi API

Although a Robinhood clone could be made with one, our entire project hinges on the existence of our Raspberry Pi API. We wanted a way to simulate live fluctuation of stock prices in real time for the user to be able to see, and we also had a Raspberry Pi laying around, so naturally we dedicated a large chunk of the first five days getting it to work. The strange part for us was that every time we've work with an API thus far, it's been with static values. But since we wanted these values to constantly change, we had a lot of new ground to cover.
The API is viewable at 71.172.19.94, and will display the updated prices on every refresh.

![](assets/sXc9.jpg)

### Stock Algorithm

Although the logic in the algorithm is fairly simple, it allowed us to add great complexity to our site's data. Using CoinGecko's API, we tied the price of every planet to an actual real-life cryptocurrency. We multiplied the crypto's average daily volatility by a random number and had our algorithm flip a coin to determine if the planet's price would increase or decrease based on the value output by the algorithm.

![](assets/sXc10.jpg)

### Search Bar

We touched on search bar earlier, but this was a feature we weren't convinced we were going to have time to implement and it ended up working out really well.

### Beautiful Soup Web Scraping

This feature proved to be more arduous than we had initially realized. Beautiful Soup was a great piece of tech and allowed us to get setup scraping the web fairly quickly. However navigating a news site's HMTL in order to find all of the necessary information to display to our site ended up being quite tricky. An issue we commonly ran into was that you couldn't trust that every page would be built in exactly the same way, even from within the same news outlet. For example, if there was a top level div that held the time at which the article was published, there was no guarantee that the data would be in the same spot and in the same format for a difficult article that was published a few days ago.

![](assets/sXc11.jpg)

### Recharts and Handling API Data

The data we received from the CoinGecko API needed to be fed into our Recharts, however the data was formatted incredibly differently than was Recharts required, so a lot of work had to be done to ensure the data would be passed to Recharts without any issues. There's a lot more to the data handling than just this code block, but the gist of it is covered here. timeInterval is tied to the buttons on the graph's legend and will determine how much data is displayed. Then, we just format the data into an object that Rechart can accept.

![](assets/sXc12.jpg)

Working with Recharts itself is relatively intuitive and we ended up being able to implement our Raspberry Pi API data seamlessly alongside the CoinGecko API data.

![](assets/sXc13.jpg)

## What now? More bonuses!

- Dark Mode Toggle
- Filter options for the transaction page.
- Real payment processor integration