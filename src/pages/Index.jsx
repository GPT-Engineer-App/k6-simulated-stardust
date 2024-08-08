import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Cat, RefreshCw } from "lucide-react";
import { useEmblaCarousel } from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const catFacts = [
  "Cats spend 70% of their lives sleeping.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane to protect their eyes.",
  "A cat's hearing is much more sensitive than a human's or dog's.",
  "Cats can jump up to six times their length.",
  "A cat's sense of smell is 14 times stronger than a human's.",
  "Cats have 32 muscles in each ear.",
  "A cat's brain is 90% similar to a human's brain.",
];

const Index = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    config: { duration: 500 },
  });

  const getRandomFact = () => {
    const newFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(newFact);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <animated.div style={fadeIn} className="flex items-center justify-center mb-12">
          <Cat className="h-16 w-16 text-purple-600 mr-4" />
          <h1 className="text-5xl font-bold text-purple-800">Purrfect Felines</h1>
        </animated.div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Fascinating Felines</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Cats have been enchanting humans for millennia with their grace, mystery, and playful nature. 
            These independent spirits have a way of capturing our hearts and making themselves at home in our lives.
          </p>

          <div className="embla mb-8" ref={emblaRef}>
            <div className="embla__container">
              {catImages.map((src, index) => (
                <div className="embla__slide" key={index}>
                  <img
                    src={src}
                    alt={`Cat ${index + 1}`}
                    className="mx-auto object-cover w-full h-[400px] rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Cat Fact Generator</h3>
          <animated.div style={fadeIn} className="bg-purple-100 rounded-lg p-6 mb-6">
            <p className="text-lg text-gray-800 mb-4">{currentFact}</p>
            <Button
              onClick={getRandomFact}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              New Fact
            </Button>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
