# snap-gifts-catalog
A simple client for the snap-gifts-catalog example.

---
## Installation

clone this repo, and then -
```
$ npm install
$ npm run dev
```
Server will run on ```localhost:3000```.

---

## Structure and Behavior
The consists of 2 routes - one for list of all products, and another for product details.

Instead of loading the videos for each and every list item,
only the videos for the visible items are loaded, and the page seems to respond faster.

Product media is stored as data urls in memory, to prevent unnecessary calls to a backend.

While no "screen" media queries is used in the CSS (a single media query is used only to detect if hover is available on current device), the app is fully responsive, using modern CSS features.

## Ideas for Improvements
- Use client side caching instead of server side, to prevent unnecessary calls to the backend.
- Use streaming videos, instead of loading entire videos for multiple list items (can reach to a few dozens MB).