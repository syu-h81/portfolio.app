import "@styles/globals.css";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 bg-black w-full py-6 px-8 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">
          <a href="/">Syu.Danjo</a>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li><a href="#about" className="nav-link text-sm uppercase tracking-widest nav-link duration-300">ABOUT</a></li>
            <li><a href="#works" className="nav-link text-sm uppercase tracking-widest nav-link duration-300">WORKS</a></li>
            <li><a href="#skills" className="nav-link text-sm uppercase tracking-widest nav-link duration-300">SKILLS</a></li>
            <li><a href="#message" className="nav-link text-sm uppercase tracking-widest nav-link duration-300">MESSAGE</a></li>
            <li><a href="#contact" className="nav-link text-sm uppercase tracking-widest nav-link duration-300">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;