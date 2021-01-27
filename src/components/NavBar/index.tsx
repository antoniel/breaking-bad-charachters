import { Nav } from "./Style";

export const NavBar = () => {
  return (
    <header className="bg-gray-900 relative ">
      <Nav className="px-16 py-2">
        <img src="/Icon.svg" alt="Logo" className="h-16" />
      </Nav>
    </header>
  );
};
