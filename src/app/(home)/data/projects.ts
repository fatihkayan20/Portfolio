import { ProjectTag } from "@/app/(home)/data/project-tag";

export const projects = [
  {
    id: "pregnancy-pro",
    title: "Luna Pregnancy Pro",
    description:
      "Pregnancy Tracker Luna Mom is a mobile app designed to guide expectant mothers through every stage of their pregnancy. With personalized tracking, weekly updates, and expert advice, the app helps users monitor their baby’s development and stay informed about important milestones. It also offers features like a due date calculator, pregnancy tips, and a community for support, making it a comprehensive tool for a smooth and informed pregnancy journey.",
    image: "/project/pregnancy-pro.webp",
    tags: [ProjectTag.FullStack, ProjectTag.Convex, ProjectTag.Expo],
    demoLink:
      "https://apps.apple.com/tr/app/pregnancy-tracker-luna-mom/id6497953757",
  },

  {
    id: "rps",
    title: "Advanced Rock Paper Scissors Game",
    description:
      "Advanced RPS is an enhanced version of the classic Rock-Paper-Scissors game, featuring both a web interface and real-time multiplayer functionality. Built with modern web technologies, it allows users to challenge friends or random opponents in exciting rounds, offering both classic and two-stage game modes. The app tracks scores, enables multiple rounds like 'best of 3' or 'best of 5,' and provides a dynamic, interactive experience. It’s a fun and engaging way to play Rock-Paper-Scissors with a twist, offering enhanced gameplay and a polished user interface.",
    image: "/project/rps.png",
    tags: [ProjectTag.FullStack, ProjectTag.Convex, ProjectTag.NextJs],
    demoLink:
      "https://apps.apple.com/tr/app/pregnancy-tracker-luna-mom/id6497953757",
  },

  {
    id: "combined-markets",
    title: "Combined Markets",
    description:
      "Combine Markets is a modern web application built with Next.js, designed to help users track and compare market trends efficiently. With an intuitive and responsive interface, it provides tools to analyze and visualize data, enabling users to make informed decisions. This project showcases a seamless user experience and clean, scalable code architecture.",
    image: "/project/combine-markets.png",
    tags: [ProjectTag.FullStack, ProjectTag.NextJs],
    demoLink: "https://combine-markets.fatihkayan.dev/",
  },

  {
    id: "wannart",
    title: "Wannart Mobile",
    description:
      "Wannart is a mobile app designed to help users discover and share their favorite events and activities. With a user-friendly interface, it allows individuals to explore local events, create and manage their own event listings, and connect with others who share similar interests. The app offers a personalized experience, ensuring users never miss out on exciting events happening around them.",
    image: "/project/wannart.jpg",
    tags: [ProjectTag.Mobile, ProjectTag.Expo],
    demoLink:
      "https://www.instagram.com/p/CW_dFTZMJVM/?utm_source=ig_web_copy_link",
    githubLink: "https://github.com",
  },
  {
    id: "car-rent",
    title: "Car Rent",
    description:
      "The Car Rent Full Stack Application is a robust platform designed for renting cars, built with a .NET Core API and Angular. It allows users to browse available cars, make reservations, and manage bookings, while the admin can oversee inventory and user activity. The app features a seamless and responsive interface for both customers and administrators, offering an efficient car rental experience.",
    image:
      "https://github.com/fatihkayan20/CarRent/raw/master/ImagesForGithub/index_page.png",
    tags: [ProjectTag.Web, ProjectTag.NetCore, ProjectTag.Angular],
    demoLink: "https://www.youtube.com/watch?v=kCX8vR0O0YM",
    githubLink: "https://github.com/fatihkayan20/CarRent",
  },
  {
    id: "getir-clone",
    title: "Getir Clone",
    description:
      "ReactGetirClone is a UI-only clone of the Getir mobile app, built using React. It showcases the app's layout and design, featuring a responsive interface that mimics the original Getir app's visual style. While it doesn't include any functionality, it provides a great example of front-end design, focusing on the user interface and user experience.",
    image:
      "https://github.com/fatihkayan20/ReactGetirClone/raw/master/assets/GithubImages/BigDevice.png?raw=true",
    tags: [ProjectTag.Web, ProjectTag.React],
    demoLink: "https://fatihkayan20.github.io/ReactGetirClone/",
    githubLink: "https://github.com/fatihkayan20/ReactGetirClone",
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    description:
      "ReactNative-FoodApp is a mobile application built with React Native that offers a user-friendly interface for exploring and ordering food. The app features a sleek design, allowing users to browse food categories, view menus, and place orders. It's a great example of a responsive and visually appealing food delivery app built for both iOS and Android platforms.",
    image:
      "https://github.com/fatihkayan20/ReactNative-FoodApp/raw/main/assets/GithubImages/4.png",
    tags: [ProjectTag.Mobile, ProjectTag.Expo],
    githubLink: "https://github.com/fatihkayan20/ReactNative-FoodApp",
  },
  {
    id: "champions-league-simulator",
    title: "Champions League Tournament Simulator",
    description:
      "The Champions League Simulator is an interactive web application that allows users to simulate the UEFA Champions League tournament. Built with Nuxt.js, it provides an engaging experience where users can predict match results, track group stages, and view knockout rounds. The app offers a visually appealing and easy-to-navigate interface, bringing the excitement of the Champions League to fans around the world.",
    image:
      "https://raw.githubusercontent.com/fatihkayan20/nuxt-champions-league-simulator/master/assets/githubImages/group-stage.png",
    tags: [ProjectTag.Web, ProjectTag.Nuxt],
    githubLink:
      "https://github.com/fatihkayan20/nuxt-champions-league-simulator",
    demoLink: "https://champions-league-simulator.vercel.app/",
  },
];
