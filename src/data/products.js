// src/data/products.js
export const categories = {
    "EPS (Expanded Polystyrene) Products": [
      "EPS Blocks / Thermocol Blocks",
      "EPS Cut Sheets",
      "EPS Boxes / Thermocol Boxes",
      "Thermocol Beads / Beans",
      "Thermocol Chips",
      "EPS Slabs",
      "EPS Pipe Sections",
      "EPS Geofoam"
    ],
    "Pulp Packaging": ["Molded Pulp Packing for Ceiling Fan Tray"],
    "Insulation Products": ["Polystyrene Sheets", "Polyurethane Foam Slabs"],
    "Ice Gel Packs": ["Ice Gel Packs"],
    "Corrugated Packaging": ["Corrugated Boxes"],
    "Customized Packaging Materials": ["Special Customized Packaging Materials"]
  };
  
  export const allProducts = [
    {
      id: "eps1",
      name: "EPS Blocks",
      category: "EPS (Expanded Polystyrene) Products",
      description: "Lightweight EPS blocks for packaging and insulation.",
      price: 100,
      image: "/images/eps-blocks.jpg"
    },
    {
      id: "eps2",
      name: "EPS Cut Sheets",
      category: "EPS (Expanded Polystyrene) Products",
      description: "Custom cut thermocol sheets.",
      price: 80,
      image: "/images/eps-sheets.jpg"
    },
    {
      id: "ice1",
      name: "Ice Gel Packs",
      category: "Ice Gel Packs",
      description: "Reusable gel packs for temperature-sensitive items.",
      price: 50,
      image: "/images/ice-packs.jpg"
    },
    {
      id: "corr1",
      name: "Corrugated Boxes",
      category: "Corrugated Packaging",
      description: "Strong and sturdy corrugated boxes for shipping.",
      price: 120,
      image: "/images/corrugated-box.jpg"
    }
    // Add more as needed
  ];
  