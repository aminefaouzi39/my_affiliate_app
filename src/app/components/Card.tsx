interface CardProps {
  name: string;
  description: string;
  source: string;
}

export default function Card({name, description, source}: CardProps) {
  return (
    <div className="card card-compact bg-card w-96 shadow-xl mt-20">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Offer"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-fontColor">{name}</h2>
        <p className="text-fontColor">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See On {source}</button>
        </div>
      </div>
    </div>
  );
}
