## Overview
This is a simple React application where users can add and remove photos. Users click a button to open a dialog, enter photo details, and see the photos appear in the app. They can also remove photos with another button.

## App Layout
- **Left Column**: Contains a button to open a dialog for photo submission.
- **Right Column**: Displays a list of submitted photos.

## Dialog Functionality
- Opens with a button click.
- Contains fields for a photo URL and caption.
- "Accept" button adds the photo to the right column if fields are filled; otherwise, shows a warning.
- "Cancel" button closes the dialog and clears fields.

## Photo List
- Displays photos in cards with captions.
- Most recent photo appears first.
- No horizontal scrolling required.

## Photo Removal
- Each photo card includes a button to remove that photo.

## Starting the App
1. Run `npm install` to install dependencies.
2. Start the app with `npm start` and open [http://localhost:3000](http://localhost:3000) in your browser.
