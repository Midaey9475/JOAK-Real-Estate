# JOAK Real Estate

A one-page real estate website built with plain **HTML, CSS and a little JavaScript**.
It shows featured properties, a video tour, the best deal of the moment, a list of properties and a contact form.

> This is a demo project. The properties, prices, phone number and email are sample data.

## How to run

No installation needed. Download the folder and open `index.html` in your browser.

## Folder structure

```
JOAK-Real-Estate/
├── index.html           The whole page
├── css/
│   └── style.css        All the styles
├── js/
│   ├── properties.js    The list of properties (edit this to change the cards)
│   └── main.js          Hamburger menu, video pop-up, form thank you message
└── assets/
    ├── images/
    │   ├── icons/           Small icons (social, phone, mail...)
    │   ├── properties/      Property photos
    │   ├── backgrounds/     Banner and section background pictures
    │   └── unused/          Pictures the page does not use (safe to delete)
    └── video/
        └── tour.mp4         Placeholder video for the pop-up
```

## The JavaScript (kept small on purpose)

- **Hamburger menu:** on small screens the hamburger button opens and closes the menu.
- **Properties:** the six cards are built from the list in `js/properties.js`.
- **Video pop-up:** the play button opens a pop-up. It closes with the X button, the Escape key or a click outside the video.
- **Contact form:** when sent, the form is emptied and a thank you message appears for a few seconds. Nothing is sent anywhere yet because there is no backend.

## Things you can change easily

- **Add or edit a property:** copy one block in `js/properties.js`, change the details and add the picture to `assets/images/properties/`.
- **Use your own video:** replace `assets/video/tour.mp4` with your own file (keep the same name), or change the `src` in the `<video>` tag in `index.html`. The current video is only a short slideshow made from the project pictures.
- **Phone number and email:** search for `555-0142` and `joakcompany.com` in `index.html`.

## What changed from the first version

- The hamburger menu now works (before, the menu links disappeared on phones with no way to get them back)
- Fixed a stray character on the page, `m8` instead of `m²`, and prices written with dots instead of commas
- Form labels are now linked to their inputs, images have proper alt text, and the form shows a thank you message
- One brand name (JOAK) and one location (Florida) everywhere
- Properties come from a list instead of copied HTML, and every card now has its own photo
- Replaced the placeholder (lorem ipsum) text
- Files organised into `css`, `js` and `assets` folders

## Ideas for later

- Make the Apartment / Villa House / Penthouse buttons filter the property list
- A page for each property
- Send the contact form to a real email service

## Tech

HTML5 · CSS3 (with nesting) · Vanilla JavaScript · Google Fonts (Poppins) · Flaticon UIcons
