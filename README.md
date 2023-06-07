# Meetups Network

This is a mini-project of a website where the user can add new meetup items to the application, add some to their favorites and see them displayed at the main page of the application.  
Meetup items are shown in the shapes of cards at the main page of the applicaion, which is the All Meetups page. These items are fetched from the custom API we built with the help of [Google's Firebase service](https://firebase.google.com/).  
Each item has an 'Add to Favorites' button that is clicked in order to add the item to the favorites panel, which is the Favorites page. All items which are added to the favorites list are displayed at this page. The button then changes to 'Remove from Favorites' and is clicked in order to remove the item from favorites. A number badge is placed next to the button which directs us to the Favorites page, indicating the number of items which are added to favorites.  
We have a Favorites page which - as we discussed - displays all the items that are added to favorites.  
Then there is the New Meetup page. In this page we have a form which takes some information about a meetup item such as title and image url, and posts the information to the database in [Google's Firebase service](https://firebase.google.com/). This way we can beautifully add new meetups, then they are shown at the All Meetups page.

## Initialization

It was initialized using **Vite**, rather than **create-react-app**.  
`npm create vite@latest`

## Dependecies

The only additional dependency besides the fundamental dependencies, `react` and `react-dom`, which are installed automatically via **Vite**, is the `react-router-dom` package that can easily be installed by `npm` as follows:  
`npm install react-router-dom`

## Acknowledgments

This project is a tutorial project in the Udemy React mastery course [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by [Maximilian Schwarzmüller](https://github.com/maxschwarzmueller). Therefore credits go to him. Thank you for your great course Mr. Schwarzmüller!
