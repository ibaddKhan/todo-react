import React, { useState } from "react";
import "./index.css";

function App() {
  const [inpArr, setInpArr] = useState([]);
  const [inpVal, setText] = useState("");

  function addBtn(e) {
    e.preventDefault();
    if (inpVal === "") {
      alert("Please enter a value");
      return;
    }
    setInpArr([inpVal, ...inpArr]);
    setText("");
  }
  function delBtn(i) {
    console.log("working delete at", i);
    const newArr = [...inpArr];
    newArr.splice(i, 1);
    setInpArr(newArr);
  }
  function editBtn(i) {
    console.log("working edit at", i);
    const newArr = [...inpArr];
    let newVal = prompt("Enter new value");
    if (newVal === "") {
      alert("Please enter a value");
      return;
    } else if (newVal === null) {
      return;
    }
    newArr[i] = newVal;
    setInpArr(newArr);
  }

  return (
    <>
      <h1 className="text-5xl text-center text-slate-700 mt-5 ">
        NYT - Note Your Tasks
      </h1>
      <form onSubmit={addBtn} className="flex justify-center mt-16">
        <input
          value={inpVal}  
          onChange={(e) => setText(e.target.value)}
          className="border-2 rounded-xl px-1 w-1/4 border-black	"
          type="text"
          name=""
          id=""
        />
        <button type="submit" className="ml-2">
          {" "}
          <i className="text-2xl fa-solid fa-plus"></i>
        </button>
      </form>
      <div className="flex justify-center mt-8">
  <ul className="list-none">
    {inpArr.map((element, index) => (
      <li
        key={index}
        className="flex justify-between items-center bg-white p-4 rounded-md my-2 shadow-md"
      >
        <div className="mr-4">{element}</div>
     <div className="">   <button
          className="border-2 px-2 py-1 border-red-500 bg-red-500 text-white rounded-md hover:bg-red-700 mr-2"
          onClick={() => delBtn(index)}
        >
          Delete
        </button>
        <button
          className="border-2 px-2 py-1 border-blue-500 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={() => editBtn(index)}
        >
          Edit
        </button></div>
      </li>
    ))}
  </ul>
</div>

    </>
  );  
}

export default App;
