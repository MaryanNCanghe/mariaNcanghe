import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Bussines Administration",
      icon: mobile,
    },
    {
      title: "3D Models",
      icon: backend,
    },
    {
      title: "Graphic Designs",
      icon: creator,  
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    { name: "Three JS",
        icon: threejs,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
      {
        name: "docker",
        icon: docker,
      },
    ];

    const experiences = [
        {
          title: "Web Devolper",
          company_name: "Freelancer",
          //icon: ,
          iconBg: "#df256c",
          date: "Since - 2022",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
    
          ],
        },
        {
          title: "Administrative Assistent",
          company_name: "Bonna Ndja",
          //icon: ,
          iconBg: "#000",
          date: "Jun 2022",
          points: [
            "Managed multiple projects simultaneously, ensuring on-time delivery and client satisfaction.",
            "Assisted in organizing company events, meetings, and schedules.",
            "Maintained and updated company records, both electronically and physically.",
            "Identifying the needs, of the company negotiation and accounting",
          ],
        },
        {
          title: "Reatail Sales Associate",
          company_name: "Humanas",
         // icon: ,
          iconBg: "#df256c",
          date: "May 2021 - Dez 2021",
          points: [
            "Assisted customers in selecting products, providing detailed information and personalized recommendations.",
            "Managed inventory, restocking shelves, and ensuring the sales floor was well-organized.",
            "Processed transactions, handled returns, and resolved customer complaints in a professional manner.",
            "Contributed to achieving sales targets and improving store performance.",
          ],
        },

        {
            title: "Waiter",
            company_name: "Sea Me",
            //icon: ,
            iconBg: "#000",
            date: "Jan 2019 - oct 2019",
            points: [
              "Provided excellent customer service in a fast-paced environment.",
              "Took orders, served food and beverages, and handled payments.",
              "Ensured a clean and welcoming dining environment for customers.",
              "Collaborated with kitchen staff to ensure timely and accurate order delivery.",
            ],
          },
          {
            title: "Chef",
            company_name: "DinningSix",
            //icon: ,
            iconBg: "#df256c",
            date: "Oct 2023",
            points: [
              "Prepare high-quality, artfully presented dishes with precision.",
              "Oversee plating and presentation, ensuring every dish meets visual and taste expectations.",
              "Enforce rigorous sanitation and food safety protocols, ensuring compliance with health regulations.",
            ],
          },
        ];
        
        const testimonials = [
          {
            testimonial:
              "Maria's ability to combine web development with creative designs is truly unique. She delivered a complex project with ease, showcasing a deep understanding of both design and technology. I'm were extremely satisfied with my website.",
            name: "Jefynho",
            designation: "Artist",
            company: "MC Jefynho RV",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
          },
          {
            testimonial:
              "During Maria time with us, she demonstrated excellent organizational skills and attention to detail. Handling a wide range of administrative duties and always maintained a positive attitude, even under pressure.",
            name: "Eurizanda",
            designation: "CEO",
            company: "Bonna NDja",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            testimonial:
              "Working with Maria was always a pleasure. She were reliable, hardworking, and always willing to help out wherever needed. Her positive attitude and commitment to customer satisfaction made her a standout member of our team!",
            name: "Pereira",
            designation: "Collegue",
            company: "Humana",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
          },
         
        ];

        const projects = [
            {
              name: "Jefynho RV",
              description:
                "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
              tags: [
                {
                  name: "NextJS",
                  color: "blue-text-gradient",
                },
                {
                  name: "API",
                  color: "green-text-gradient",
                },
                {
                  name: "CSS3",
                  color: "pink-text-gradient",
                },
              ],
              image: carrent,
              source_code_link: "https://github.com/",
            },
            {
              name: "Macro-lab",
              description:
                "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
              tags: [
                {
                  name: "NextJSt",
                  color: "blue-text-gradient",
                },
                {
                  name: "CSS3",
                  color: "green-text-gradient",
                },
                {
                  name: "TypeScript",
                  color: "pink-text-gradient",
                },
            ],
            image: jobit,
            source_code_link: "https://github.com/",
          },
          {
            name: "L'Art ",
            description:
              "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
            tags: [
              {
                name: "React",
                color: "blue-text-gradient",
              },
              {
                name: "JavaScript",
                color: "green-text-gradient",
              },
              {
                name: "css3",
                color: "pink-text-gradient",
              },
            ],
            image: tripguide,
            source_code_link: "https://github.com/",
          },
          {
            name: "Dannis-Barber",
            description:
              "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
            tags: [
              {
                name: "HTML",
                color: "blue-text-gradient",
              },
              {
                name: "JavaScript",
                color: "green-text-gradient",
              },
              {
                name: "css",
                color: "pink-text-gradient",
              },
            ],
            image: tripguide,
            source_code_link: "https://github.com/",
          },
          {
            name: "3D-TShirt",
            description:
              "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
            tags: [
              {
                name: "nextjs",
                color: "blue-text-gradient",
              },
              {
                name: "API",
                color: "green-text-gradient",
              },
              {
                name: "Tailwindcss",
                color: "pink-text-gradient",
              },
            ],
            image: tripguide,
            source_code_link: "https://github.com/",
          },
          {
            name: "Keyline",
            description:
              "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
            tags: [
              {
                name: "JavaScript",
                color: "blue-text-gradient",
              },
              {
                name: "HTML",
                color: "green-text-gradient",
              },
              {
                name: "CSS",
                color: "pink-text-gradient",
              },
            ],
            image: tripguide,
            source_code_link: "https://github.com/",
          },
        ];
        
        export { services, technologies, experiences, testimonials, projects };
        