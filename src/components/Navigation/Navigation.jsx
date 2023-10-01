import NavigationButton from "./NavigationButton";
import NavigationLink from "./NavigationLink";

const navItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Projects" },
  { id: 4, label: "Contact" },
];

function Navigation() {
  return (
    <nav className="flex justify-end space-x-1">
      <div className="mt-2">
        {navItems.map((item) => (
          <NavigationLink
            key={item.id}
            label={item.label}
            className="mr-4 p-2"
          />
        ))}
      </div>
      <NavigationButton />
    </nav>
  );
}

export default Navigation;
