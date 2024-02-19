export const Form = () => {
  return (
    <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/8 bg-white p-8 rounded-lg shadow-lg w-1/2">
      <div className="mb-4">
        <div className="text-lg font-semibold">Buy Tickets</div>
        <div className="flex space-x-4 my-2">
          <label className="flex items-center">
            <input type="radio" name="tripType" className="mr-2" /> One way
          </label>
          <label className="flex items-center">
            <input type="radio" name="tripType" className="mr-2" /> Round trip
          </label>
          <label className="flex items-center">
            <input type="radio" name="tripType" className="mr-2" /> Multi-city
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">From</label>
          <select className="p-2 border rounded">
            <option>Select Departure...</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">To</label>
          <select className="p-2 border rounded">
            <option>Select Destination...</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Departure date</label>
          <input type="date" className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Passengers</label>
          <select className="p-2 border rounded">
            <option>1 adult</option>
            <option>2 adults</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">
          Book now!
        </button>
      </div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded relative">
        <span className="font-semibold">Active travel alert:</span> There is a
        travel warning issued by the government due to the coronavirus epidemic
        (COVID-19).
        <a href="#" className="underline">
          More details
        </a>
      </div>
    </div>
  );
};
