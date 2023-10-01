import "./projects.css";
import ProjectItem from "./ProjectItem";

const ProjectsList = [
  {
    id: 1,
    name: "Tours Project",
    link: "https://tours-project-production.up.railway.app/",
    image: "phone-1.jpg",
    description:
      "This App is a Backend project using Node JS , showing tours all around the world",
  },
  {
    id: 2,
    name: "Games Project",
    link: "https://game-hub-two-jet.vercel.app/",
    image: "phone-2.jpg",
    description:
      "This App is a React project , showing games from different genres , with the abillity to sort , search and filter",
  },
  {
    id: 3,
    name: "Hotel Management Project",
    link: "https://wild-oasis-react-tau.vercel.app/",
    image: "phone-3.jpg",
    description:
      "This App is a React project using external database - Supabase , managing the users in a hotel",
  },
];

function Projects() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="font-style: italic text-4xl font-extrabold text-blue-500">
          My Work
        </h1>
        <div className="work-list">
          {ProjectsList.map((proj) => (
            <ProjectItem
              key={proj.id}
              Name={proj.name}
              Link={proj.link}
              Image={proj.image}
              Description={proj.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
