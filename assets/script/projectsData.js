projectsData = [
  {
    name: "Image Editor",
    description:
      "This Image editor lets you edit photos in just a few clicks. It covers various free online photo editing tools, so you can crop images, resize images, make them grayscale, invert colors, and more.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462",
    link: "./projects/Image-Editor/index.html",
    authorImage:
      "https://avatars.githubusercontent.com/u/55796944?s=400&u=0985bc8010be37c3587a422bb9fb08756c8eeafd&v=4",
    authorName: "Avinash Ranjan",
    authorLink: "https://github.com/avinashkranjan",
    addedOn: "2021-01-01",
  },
  {
    name: "Alarm Clock",
    description:
      "This Image editor lets you edit photos in just a few clicks. It covers various free online photo editing tools, so you can crop images, resize images, make them grayscale, invert colors, and more.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462",
    link: "./projects/Alarm-Clock/index.html",
    authorImage:
      "https://avatars.githubusercontent.com/u/55796944?s=400&u=0985bc8010be37c3587a422bb9fb08756c8eeafd&v=4",
    authorName: "Avinash Ranjan",
    authorLink: "https://github.com/avinashkranjan",
    addedOn: "2021-01-01",
  },
  {
    name: "QR-Code-Generator",
    description:
      "This Image editor lets you edit photos in just a few clicks. It covers various free online photo editing tools, so you can crop images, resize images, make them grayscale, invert colors, and more.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462",
    link: "./projects/QR-Code-Generator/index.html",
    authorImage:
      "https://avatars.githubusercontent.com/u/55796944?s=400&u=0985bc8010be37c3587a422bb9fb08756c8eeafd&v=4",
    authorName: "Avinash Ranjan",
    authorLink: "https://github.com/avinashkranjan",
    addedOn: "2021-01-01",
  },
  {
    name: "Todo-List",
    description:
      "This Image editor lets you edit photos in just a few clicks. It covers various free online photo editing tools, so you can crop images, resize images, make them grayscale, invert colors, and more.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462",
    link: "./projects/Todo-List/index.html",
    authorImage:
      "https://avatars.githubusercontent.com/u/55796944?s=400&u=0985bc8010be37c3587a422bb9fb08756c8eeafd&v=4",
    authorName: "Avinash Ranjan",
    authorLink: "https://github.com/avinashkranjan",
    addedOn: "2021-01-01",
  },
  {
    name: "Typing-Speed-Test-Game",
    description:
      "This Image editor lets you edit photos in just a few clicks. It covers various free online photo editing tools, so you can crop images, resize images, make them grayscale, invert colors, and more.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462",
    link: "./projects/Typing-Speed-Test-Game/index.html",
    authorImage:
      "https://avatars.githubusercontent.com/u/55796944?s=400&u=0985bc8010be37c3587a422bb9fb08756c8eeafd&v=4",
    authorName: "Avinash Ranjan",
    authorLink: "https://github.com/avinashkranjan",
    addedOn: "2021-01-01",
  },
];

const projectsContainer = document.querySelector(".projects-container");

projectsData.map((project) => {
  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  //   projectLink.textContent = "View Project";
  const projectImage = document.createElement("img");
  projectImage.classList.add("project-image");
  projectImage.src = project.image;
  projectImage.alt = project.name;

  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const projectTitle = document.createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.name;

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.description;

  const projectAuthor = document.createElement("div");
  projectAuthor.classList.add("project-author");

  const projectAuthorImage = document.createElement("img");
  projectAuthorImage.classList.add("project-author-img");
  projectAuthorImage.src = project.authorImage;
  projectAuthorImage.alt = project.authorName;

  const projectAuthorName = document.createElement("p");
  projectAuthorName.classList.add("project-author-name");
  projectAuthorName.textContent = project.authorName;

  const projectAuthorLink = document.createElement("a");
  projectAuthorLink.classList.add("project-author-link");
  projectAuthorLink.href = project.link;
  projectAuthorLink.textContent = "View Project";

  projectCard.append(
    projectLink,
    projectImage,
    projectTitle,
    projectDescription,
    projectAuthor,
    projectAuthorImage,
    projectAuthorName,
    projectAuthorLink
  );
  projectsContainer.append(projectCard);
});
