import Navabr from "../components/Navbar";
export default function About() {
  return (
    <div className=" bg-background">
      <Navabr />
      <div className="flex flex-col justify-center items-center text-fontColor mt-9 mx-40">
        <h1 className="text-3xl">About us:</h1>
        <br />
        <h1>
          Welcome to trendyPicks! 🚀 We help you find the best deals & trending
          products on multiple platforms, saving you time & money! Whether
          you're a smart shopper or just love discovering cool gadgets, we've
          got you covered.
        </h1>
        <br />
        <h1>
          With thousands of products on multiple platforms, it’s hard to know
          what’s worth buying. That’s why we research, test, and share only the
          best deals, highest-rated products, and hidden gems—so you don’t have
          to.
        </h1>
        <h1 className="text-3xl">How We Choose Products</h1>
        <br />
        We don’t just list random products—we carefully analyze trends, reviews,
        and quality to bring you:
        <ul>
          <li>
            ✅ Top-Rated Products – Only high-quality & well-reviewed items.
          </li>
          <li>
            ✅ Best Bang for Your Buck – Deals that actually save you money.{" "}
          </li>
          <li>
            ✅ Hidden Gems – Unique, hard-to-find products that stand out.
          </li>
        </ul>
        <br />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Me</h1>
          <br />
          <p>
            Hey! I’m Amine, a passionate online shopper who loves discovering
            great deals & must-have products. I built this simple website to
            share my best finds with you!
          </p>
        </div>
        <br />
        <h1>
          🚀 Start Shopping Smarter Today! Browse our latest posts or follow us
          for exclusive deals & product reviews.
        </h1>
        <h2>
          📩 Got a question or a deal to share? <a href="/">Contact us here!</a>
        </h2>
      </div>
    </div>
  );
}
