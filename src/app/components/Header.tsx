import Button from "./Button";

export default function Header({ scrollToOffers }: { scrollToOffers: () => void }) {
  return (
    <div className="relative bg-background isolate overflow-hidden py-24 sm:py-32 flex items-center ">
      <div
        aria-hidden="true"
        className=" hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-y-6">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-col text-center">
          <h2 className="custom-shadow text-5xl font-semibold tracking-wide text-fontColor sm:text-6xl">
            Here to collect the best deals for YOU !
          </h2>
          <p className="custom-shadow-2 mt-8 text-lg font-medium text-pretty text-fontColor sm:text-xl/8">
            Discover exclusive discounts and top-rated products from multiple
            online stores, all in one place. We do the research, so you don't
            have to.
          </p>
        </div>
        <Button onClick={scrollToOffers} />
      </div>
    </div>
  );
}
