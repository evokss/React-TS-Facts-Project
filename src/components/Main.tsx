interface FactItem {
    id: number;
    text: string;
  }
  
  const REACT_FACTS: FactItem[] = [
    { id: 1, text: "Was first released in 2013" },
    { id: 2, text: "Was originally created by Jordan Walke" },
    { id: 3, text: "Has well over 100K stars on GitHub" },
    { id: 4, text: "Is maintained by Facebook" },
    { id: 5, text: "Powers thousands of enterprise apps, including mobile apps" }
  ];
  
  export default function Main(): JSX.Element {
    return (
      <main>
        <h1 className="main--title">Fun facts about React</h1>
        <ul className="main--facts">
          {REACT_FACTS.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </main>
    );
  }