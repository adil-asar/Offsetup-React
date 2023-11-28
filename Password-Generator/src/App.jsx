import { useEffect, useState } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [pwdLength, setpwdLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [strings, setStrings] = useState(false);
  const [Password, setPassword] = useState("");

  const copyPasswordToClipboard = useCallback(
    () => {
      window.navigator.clipboard.writeText(Password);
    },
    [Password],
  )
  

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (strings) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= pwdLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [pwdLength, numbers, strings, setPassword])

  

  


  useEffect(() => {
    passwordGenerator()
  }, [pwdLength, numbers, strings, passwordGenerator])
{
  return (
    <>
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="my-3 text-center text-white">Password Generator</h1>
        <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={Password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
          />
          <button 
          onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6}
             max={100} value={pwdLength}
             onChange={(e)=>{setpwdLength(e.target.value)}}
             className="cursor-pointer" />
            <label>Length:{pwdLength}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput"
             defaultChecked={numbers}
             onChange={()=>{
              setNumbers((prev)=>!prev)
             }}  
             />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={strings}
              onChange={()=>{
                setStrings((prev)=>!prev)
              }}
              id="characterInput"
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
}
export default App;
