import { navLinks } from "../../constants";

export default function Navbar() {
  return (
    <nav className="">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Site logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
