"use client";

import { useState, forwardRef } from "react";
import Card from "./Card";

interface Offers {
  name: string;
  id: number;
  description: string;
  source: string;
}

function ProductList(
  props: any,
  ref: React.Ref<HTMLDivElement>
) {
  const [offers, useOffers] = useState<Offers[]>([
    { id: 1, name: "Offer 1", description: "description", source: "source" },
    { id: 2, name: "Offer 2", description: "description", source: "source" },
    { id: 3, name: "Offer 3", description: "description", source: "source" },
    { id: 4, name: "Offer 4", description: "description", source: "source" },
    { id: 5, name: "Offer 5", description: "description", source: "source" },
    { id: 6, name: "Offer 6", description: "description", source: "source" },
    { id: 7, name: "Offer 7", description: "description", source: "source" },
    { id: 8, name: "Offer 8", description: "description", source: "source" },
  ]);
  return (
    <div ref={ref} className="bg-background">
      <ul className="flex flex-wrap justify-center gap-6">
        {offers.map((offer) => (
          <li className="flex flex-col" key={offer.id}>
            <Card
              name={offer.name}
              description={offer.description}
              source={offer.source}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default forwardRef(ProductList);