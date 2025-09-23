import { StaticImageData } from "next/image";

import img1 from "./photos/img1.jpeg";
import img2 from "./photos/img2.jpeg";
import img3 from "./photos/img3.jpeg";
import img4 from "./photos/img4.jpeg";
import img5 from "./photos/img5.jpeg";
import img6 from "./photos/img6.jpeg";
import img7 from "./photos/img7.jpeg";
import img8 from "./photos/img8.jpeg";

interface WonderImage {
  id: number;
  name: string;
  src: StaticImageData;
  location: string;
  photographer: string;
  alt: string;
}

export const wonderImages: WonderImage[] = [
  {
    id: 1,
    name: "Eiffel Tower at Sunrise",
    src: img1,
    location: "Paris, France",
    photographer: "najeep",
    alt: "Eiffel Tower glowing in the morning light",
  },
  {
    id: 2,
    name: "Taj Mahal Reflections",
    src: img2,
    location: "Agra, India",
    photographer: "nehan",
    alt: "Taj Mahal reflected in water at sunset",
  },
  {
    id: 3,
    name: "Great Wall Through the Hills",
    src: img3,
    location: "Beijing, China",
    photographer: "elham",
    alt: "The Great Wall winding over green hills",
  },
  {
    id: 4,
    name: "Machu Picchu Ruins",
    src: img4,
    location: "Cusco Region, Peru",
    photographer: "kashan",
    alt: "Ancient Incan ruins of Machu Picchu with mountains",
  },
  {
    id: 5,
    name: "Christ the Redeemer",
    src: img5,
    location: "Rio de Janeiro, Brazil",
    photographer: "ali",
    alt: "Statue of Christ the Redeemer overlooking Rio",
  },
  {
    id: 6,
    name: "Colosseum at Dusk",
    src: img6,
    location: "Rome, Italy",
    photographer: "naveed",
    alt: "Colosseum lit up against the evening sky",
  },
  {
    id: 7,
    name: "Petra Treasury",
    src: img7,
    location: "Petra, Jordan",
    photographer: "farhan",
    alt: "Rock-cut architecture of the Treasury in Petra",
  },
  {
    id: 8,
    name: "Pyramids of Giza",
    src: img8,
    location: "Giza, Egypt",
    photographer: "zain",
    alt: "The Great Pyramids standing tall under the desert sun",
  },
];
