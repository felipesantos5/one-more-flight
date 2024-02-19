export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-footerBg text-blue-900 py-4 px-8 relative">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex flex-col">
          <span className="font-semibold">Passengers</span>
          <span className="mt-2">Flights</span>
          <span>Airlines</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Business and Community</span>
          <span className="mt-2">About us</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">General</span>
          <span className="mt-2">Report Property</span>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
      >
        Go to top ↑
      </button>
    </footer>
  );
};
