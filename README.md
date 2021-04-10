# next.js + Material-UI Example 

This creates a dashboard that displays the weather conditions at Ohio State University Airport

## Usage
    npm install
    npm run dev
navigate to http://localhost:3001

## How it works

### Application Organization

```
.
├── README.md
├── components
│   ├── atoms
│   ├── flipclock
│   ├── instruments
│   ├── leddisplay
│   ├── panels
│   └── segdisplay
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── api
│   ├── demo.js
│   └── index.js
├── public
│   ├── favicon.ico
│   ├── font-style.css
│   ├── fonts
│   ├── images
│   └── vercel.svg
├── theme-default.json
└── theme.js
```

### _app.js

The app component initializes each page. Including _app.js allows you to override and customize it.

### _document.js

Pages in Next.js skip the definition of the surrounding document's markup. For example, you never include <html>, <body>, etc.

The _document.js file overrides the default behavior. This is where you can put your headers and footers for example.

### index.js

This is the starter page. Here's where you would place your top level component to display your content.

### The api folder

The code for the API's is placed here. All code in the API folder runs server side, so "console.log" will output to the terminal that ran "npm run dev". Code for components, on the other hand, executes in the client and "console.log" will output to the browser console.

Each API has a unique endpoint in the app. For example, we fetch the weather data for the OSU Airport from the the National Weather Service. You can see the endpoint there:

http://localhost:3001/api/weather

You will see server side next.js API's referred to as "BFF" - Back End For Front End.

See ```/pages/api/weather.js``` for the server side API implementation, and ```components/instruments/Temperature.js``` for how it is used:

Stale While Refresh allows next.js to be updated with the current data while waiting for the API call to complete:

```const { data, error } = useSWR('/api/weather', { refreshInterval: 1000 * 60 * 20 })```

### public

This folder holds static data.

Items in the public folder are exposed at the root level. For example:

http://localhost:3001/font-style.css

You can change this of course.

### components

This folder holds the components for the various weather instruments displayed in the app. It is up to the developer to come up with hierarchy of nested components.
          
### tests

https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d

## Reference

* next.js documentation - https://nextjs.org/docs
* material-ui documentation - https://material-ui.com/
* next.js with material-ui - https://itnext.io/next-js-with-material-ui-7a7f6485f671


