//Project type
export type ProjectType = {
  id: string;
  title: string;
  description: string[];
  whatILearned: string[];
  image: string;
  detailLink: string;
  link: string;
  github: string;
};

//Project data
export const ProjectContent: ProjectType[] = [
  {
    id: "simpleshop",
    title: "Simple Shop - Clothing Ecommerce Store",
    description: [
      "A clothing store👚 build with JSP, Ajax, Servlet, JSTL, Bootstrap, Firebase",
      "This store has full function from user to admin",
      "As user, you can add product to cart, checkout, view order history, and more",
      "As admin, you can manage product, user account and track order",
    ],
    whatILearned: [
      "How to build a full function ecommerce store",
      "How to use Ajax to send request to server",
      "How to use Firebase to store image",
      "How to use JSTL to display data from server",
      "How to use Bootstrap to make responsive website",
    ],
    image: "/images/shop.jpeg",
    detailLink: "/projects/simpleshop",
    link: "",
    github: "",
  },
  {
    id: "portfolio",
    title: "A designer portfolio",
    description: [
      "A portfolio website for a designer👩‍🎨",
      "This website is build with React, NextJS, TailwindCSS, Framer Motion",
      "This website has headless CMS to manage content, showcase",
    ],
    whatILearned: [
      "How to use NextJS to build a website",
      "How to use headless CMS to manage content",
      "How to use Framer Motion to animate website",
    ],
    image: "/images/portfolio.png",
    detailLink: "/projects/portfolio",
    link: "https://hoanganhportfolio.vercel.app/",
    github: "https://github.com/blackmouse572/hoanganhportfolio/",
  },
];
