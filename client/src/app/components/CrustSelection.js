const CrustSelection = ({ crust, setCrust }) => {
  return (
    <div className="flex justify-center items-center lg:justify-start">
      {/* crust */}
      <div className="flex gap-x-12 mb-8 font-medium">
        {/* traditional */}
        <label
          className={`${
            crust === "traditional" ? "font-bold text-orange" : null
          } flex items-center gap-x-2 cursor-pointer`}
        >
          <input
            type="radio"
            name="crust"
            value="traditional"
            checked={crust === "traditional"}
            onChange={(e) => setCrust(e.target.value)}
            className="appearance-none w-4 h-4 border rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer"
          />
          Traditional
        </label>
        {/* thin */}
        <label
          className={`${
            crust === "thin" ? "font-bold text-orange" : null
          } flex items-center gap-x-2 cursor-pointer`}
        >
          <input
            type="radio"
            name="crust"
            value="thin"
            checked={crust === "thin"}
            onChange={(e) => setCrust(e.target.value)}
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer"
          />
          Thin
        </label>
      </div>
    </div>
  );
};

export default CrustSelection;
