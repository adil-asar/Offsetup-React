import React from "react";

const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="inline-block mb-2 text-black/40">
            {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="w-full mb-2 text-black/40">Currency Type</p>
        <select 
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value) }
        disabled={currencyDisable}
        className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer">
          
          {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
          
        </select>
      </div>
    </div>
  );
};

export default Input;
