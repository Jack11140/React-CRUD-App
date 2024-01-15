import React, {useState, useCallback} from "react";
import "./App.css";
import Lists from "./components/Lists";
import List from "./components/List";
import Form from "./components/Form";
const initialCrudData = localStorage.getItem("crudData") ? JSON.parse(localStorage.getItem("crudData")) : [];

export default function App () {

  const [crudData, setCrudData] = useState(initialCrudData);
  const [expense, setExpense] = useState("");
  const [cost, setCost] = useState("");

  const handleClick = useCallback(
    (id) => {
      let newCrudData = crudData.filter((data) => data.id !== id);
      setCrudData(newCrudData);
      localStorage.setItem('crudData', JSON.stringify(newCrudData));
    },
    [crudData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCrud = {
      id: Date.now(),
      title: expense,
      cost: cost,
      completed: false,
    };

    setCrudData((prev) => [...prev, newCrud]);
    localStorage.setItem('crudData', JSON.stringify([...crudData, newCrud]));
    setExpense("");
    setCost("");
  };

  const handleRemoveAll = () => {
    setCrudData([]);
    localStorage.setItem('crudData', JSON.stringify([]));
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
          :D
        </div>

        <Form handleSubmit={handleSubmit} expense={expense} setExpense={setExpense} cost={cost} setCost={setCost} />
        <Lists crudData={crudData} setCrudData={setCrudData}/>

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