import { Cat } from "lucide-react";

const Index = () => {
  const catFacts = [
    "Cats spend 70% of their lives sleeping.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats have a third eyelid called the nictitating membrane to protect their eyes.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Cat className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">All About Cats</h1>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Fascinating Felines</h2>
          <p className="text-gray-600 mb-4">
            Cats have been beloved companions to humans for thousands of years. Known for their independence,
            grace, and playful nature, these furry friends have captured hearts around the world.
          </p>
          <img
            src="/placeholder.svg"
            alt="Cat"
            className="mx-auto object-cover w-full h-[300px] rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Interesting Cat Facts</h3>
          <ul className="list-disc pl-6 text-gray-600">
            {catFacts.map((fact, index) => (
              <li key={index} className="mb-2">{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
