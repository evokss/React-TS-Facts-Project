interface FactItem {
  id: number;
  text: string;
  type: 'react' | 'typescript';
}

const REACT_TYPESCRIPT_FACTS: FactItem[] = [
  // React Facts
  { id: 1, type: 'react', text: "Was first released in 2013 by Facebook (before it was cool to create JavaScript libraries)" },
  { id: 2, type: 'react', text: "Originally created by Jordan Walke, who probably didn't know he was about to start a front-end revolution" },
  { id: 3, type: 'react', text: "Has over 200K GitHub stars - more popular than some celebrity Instagram accounts!" },
  { id: 4, type: 'react', text: "Maintained by Facebook, proving that not everything from social media is bad" },
  { id: 5, type: 'react', text: "Powers thousands of enterprise apps, including apps that probably make more money than most startups" },
  
  // TypeScript Facts
  { id: 6, type: 'typescript', text: "Created by Microsoft in 2012 - turning type safety into a superpower" },
  { id: 7, type: 'typescript', text: "Basically JavaScript that went to charm school and learned some manners (type checking)" },
  { id: 8, type: 'typescript', text: "Makes developers feel like superheros by catching errors before runtime" },
  { id: 9, type: 'typescript', text: "Over 80% of developers prefer TypeScript over plain JavaScript (statistically speaking)" },
  { id: 10, type: 'typescript', text: "Allows you to write JavaScript with a strict parent watching over your code's behavior" }
];

export default function Main(): JSX.Element {
  return (
    <main>
      <h1 className="main--title">Fun Facts about React and TypeScript</h1>
      <div className="fact-sections grid lg:grid-cols-2 gap-4">
        <section>
          <h2 className="main--subtitle">React Facts</h2>
          <ul className="main--facts list-disc">
            {REACT_TYPESCRIPT_FACTS
              .filter(fact => fact.type === 'react')
              .map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2 className="main--subtitle">TypeScript Facts</h2>
          <ul className="main--facts list-disc">
            {REACT_TYPESCRIPT_FACTS
              .filter(fact => fact.type === 'typescript')
              .map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))
            }
          </ul>
        </section>
      </div>
    </main>
  );
}