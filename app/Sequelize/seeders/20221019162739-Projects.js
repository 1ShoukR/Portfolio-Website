'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Projects', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Star Wars: Escape from Cad Bane',
        description:
          'This is a terminal, text adventure based game created using Python! You are a captured rebel soldier. You wake up in a holding cell inside an Empire military complex. You must use your quick wits to escape the base, while simultaneously fighting and hiding from Stormtroopers. You must face Cad Bane and defeat him in order to escape.',
        githubLink: 'https://bit.ly/3Dksr5T',
        readmeArticle: 'https://bit.ly/3yTbM6L',
        techUsed: 'Python',
        projectPic: 'https://bit.ly/3gkE6bM',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "How's The Weather?",
        description:
          'This application utilizes the Open Weather Map API to display weather information based on the location that you enter into the search field! The app displays the current temperature, weather conditions, feels like weather, humidity, low temperatures, and high temperatures of the location you search for!',
        githubLink: 'https://bit.ly/3eLRQvE',
        readmeArticle: 'N/A',
        techUsed: 'JavaScript, CSS, and HTML',
        projectPic: 'https://bit.ly/3eHcahQ',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Get Your Valorant News Here!',
        description:
          'This project was created so that anyone who goes on this website can view all things Valorant related! Whether its news, team rankings, player ranking, or current streams, this project contains HTML pages that link you to the specific area you want to view!',
        githubLink: 'https://bit.ly/3CJjMbv',
        readmeArticle: 'https://bit.ly/3SkdCnU',
        techUsed: 'HTML, JavaScript, and CSS',
        projectPic: 'https://bit.ly/3s4SveN',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Welcome To Joeva!',
        description:
          "Joeva is an e-commerce website created with our cohort instructor, Joe, as the theme for this project. The frontend can take the data of whatever item you selected, send the data to a backend and store it in a database that links the specific product IDs to the respective ID of a user who creates an account on our website! There is also an option to sign in as a guest if you wish to not create an account with us. Each route is protected with a 'CheckLogin' function that prevents unauthorized users from reaching certain links without the right authentication.",
        githubLink: 'https://bit.ly/3CKremz',
        readmeArticle: 'https://bit.ly/3yVnXQh',
        techUsed: 'JavaScript, HTML, and CSS',
        projectPic: 'https://bit.ly/3yVnZrn',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Blackjack',
        description:
          'This is a project I created to simulate a real Blackjack game! I am very pleased with this project, as it is one of the first projects I created using JavaScript. I used DOM manipulation in order to render out each card, which is randomized, onto the HTML page',
        githubLink: 'https://bit.ly/3SewO6z',
        readmeArticle: 'N/A',
        techUsed: 'CSS, HTML, and JavaScript',
        projectPic: 'https://bit.ly/3ERzi7J',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "The Smuggler's Den",
        description:
          'This whole project is created using React and Redux, with React-Router handling all different pages and links.  Each page has a favorites button that allows a user to select a card, and add it to their respective favorites page. There is an easter egg on the favorites page as well.',
        githubLink: 'https://bit.ly/3MLZ5jz',
        readmeArticle: 'https://bit.ly/3TbIhoG',
        techUsed: 'Javascript, React.js/Redux, Vanilla CSS, and MaterialUI',
        projectPic: 'https://bit.ly/3TwOdsa',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'GAINZZZ',
        description:
          "This project was created with the idea that anyone can start their fitness journey and track their progress throughout the project. This app will allow users to create and account, enter in their body information, and track how much weight they have lost and/or gained while using the app. A user can also search through a database of over 3,200 workouts available at their disposal, with an option to have a workout created for them, based on the user's needs.",
        githubLink: 'https://bit.ly/3VF0rAT',
        readmeArticle: 'https://bit.ly/3VI4IDy',
        techUsed:
          'Javascript, React.js/Redux, MaterialUI, Vanilla CSS, NodeJS, Supabase, axios, framer-motion, react-horizontal-scrolling-menu, redux-logger, styled-components, dotenv',
        projectPic: 'https://bit.ly/3MMnplm',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {})
  }
};
