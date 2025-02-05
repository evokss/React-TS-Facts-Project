export default function Navbar(): JSX.Element {
  return (
    <nav>
      <img 
        src="/react-icon-small.png" 
        className="nav--icon" 
        alt="React Icon"
      />
      <h3 className="nav--logo_text">ReactTSFacts</h3>
      <h4 className="nav--title">Eva's Projects</h4>
    </nav>
  );
}