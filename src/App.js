import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
export default function App () {

  const [crudData, setCrudData] = useState([]);
  const [expence, setExpence] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: expence,
      cost: cost,
      completed: false,
    };

    setCrudData((prev) => [...prev, newTodo]);
    setExpence("");
    setCost("");
  };

  const handleRemoveAll = () => {
    setCrudData([]);
  };

  const calculateTotalExpenses = () => {
    const totalCost = crudData.reduce((total, data) => total + Number(data.cost), 0);
    return totalCost;
  };

    return(
    <div className="flex flex-col items-start justify-center  w-screen h-screen bg-amber-400">
      <h1 className="text-3xl font-bold">예산 계산기</h1>
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          
        </div>
        
        <Form handleSubmit={handleSubmit} expence={expence} setExpence={setExpence} cost={cost} setCost={setCost} />
        <List crudData={crudData} setCrudData={setCrudData}/>

        <div className="flex justify-between">
          <button onClick={handleRemoveAll} className="p-2 mt-4 text-red-500 border-2 border-red-500 rounded hover:text-white hover:bg-red-500">
            목록지우기
          </button>
          <p className="mt-2">총지출: {calculateTotalExpenses()}원</p>
        </div>

      </div>
    </div>
    );
}