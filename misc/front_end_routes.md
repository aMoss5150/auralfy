User facing routes

## "/" 

* If not logged in, user is redirected to "/landing"
* If auth, user will be presented with home page
* Will have a Vibes list component(possibly expandable)
* Possibly a couple of pre-built vibes

## "/play/song_id:INT"

* auth required
* Will be the component that will build the VIBE PLAYER page
* This is where particles will be used and visualizer will 
    be created to create a listening/visual experience

## "/landing"

* auth required
* This will be the splash/landing page
* Will have Sign-Up and Login buttons that redirect

## "/login"

* Clean simple page with login
* Possible particles use

## "/sign-up"

* Clean simple page with login
* Possible particles

## "/song_id:INT/"

* auth required
* Will display more detailed information about song


