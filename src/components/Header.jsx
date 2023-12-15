export default function Header() {
  return (
    <header>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <img src="/src/assets/spawn.png" className="responsive" />
    </header>
  )
}
