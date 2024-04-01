// import React, { useState } from "react";

// function App() {
//   const [user, setuser] = useState("");
//   const [result, setresult] = useState(0);
//   const handler = (e) => {
//     setuser(e.target.value);
//   };
//   return (
//     <div>
//       <center>
//         <h1>calucator</h1>
//         <input type="text" value={user} name="user" onChange={handler} />
//         <br />
//         <button onClick={() => setresult(eval(user))}>result</button>
//         <h3>results is : {result}</h3>
//         <button onClick={() => setuser(user + "1")}>1</button>
//         <button onClick={() => setuser(user + "2")}>2</button>
//         <button onClick={() => setuser(user + "3")}>3</button>
//         <button onClick={() => setuser(user + "4")}>4</button>
//         <button onClick={() => setuser(user + "5")}>5</button><br/>

//         <button onClick={() => setuser(user + "6")}>6</button>
//         <button onClick={() => setuser(user + "7")}>7</button>
//         <button onClick={() => setuser(user + "8")}>8</button>
//         <button onClick={() => setuser(user + "9")}>9</button>
//         <button onClick={() => setuser(user + "0")}>0</button><br/>

//         <button onClick={() => setuser(user+"+")}>+</button>
//         <button onClick={() => setuser(user-"-")}>-</button>
//         <button onClick={() => setuser(user*"*")}>*</button>
//         <button onClick={() => setuser(user/"/")}>/</button>
//         <button onClick={() => setuser("")}>clr</button>
//       </center>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    if (operation === "=") {
      try {
        setResult(eval(user));
      } catch (error) {
        setResult("Error");
      }
    } else if (operation === "clr") {
      setUser("");
      setResult(0);
    } else {
      setUser(user + operation);
    }
  };

  return (
    <div id="id">
      <center>
        <h1>Calculator</h1>
        <input type="text" value={user} readOnly />
        <br />
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("1")}>1</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("2")}>2</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("3")}>3</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("+")}>+</button>
        <br />
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("4")}>4</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("5")}>5</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("6")}>6</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("-")}>-</button>
        <br />
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("7")}>7</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("8")}>8</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("9")}>9</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("*")}>*</button>
        <br />
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("0")}>0</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("/")}>/</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("=")}>=</button>
        <button style={{backgroundColor:"red"}} onClick={() => handleOperation("clr")}>clr</button>
        <br />
        <h3>Result: {result}</h3>
      </center>
    </div>
  );
}

export default App;

