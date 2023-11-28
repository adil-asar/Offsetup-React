import { useState } from 'react'
import './App.css'
import { Input } from './Components'
import useCurrency from './Hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div
        className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                            onCurrencyChange={(currency) => setAmount(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                             border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            currencyOptions={options}
                            amount={convertedAmount}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
