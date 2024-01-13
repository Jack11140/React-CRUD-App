import React from 'react'

export default function Form({ handleSubmit, expence, setExpence, cost, setCost }) {

  const handleExpenceChange = (e) => {
    console.log('e',e.target.value);
    setExpence(e.target.value);
  };
  const handleCostChange = (e) => {
    console.log('e',e.target.value);
    setCost(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
        <div className="flex flex-col mb-2">
        <label htmlFor="expence" className="text-sm text-gray-600 mb-1">지출 항목</label>
            <input
            type="text"
            name="expence"
            className="w-full px-3 py-2 h-10 text-gray-500 border-b-2 border-amber-200 focus:outline-none focus:border-blue-700"
            //className="w-full px-3 px-2 mr-4 h-10 text-gray-500 border rounded shadow"
            placeholder="예) 렌트비"
            value={expence}
            onChange={(e) => setExpence(e.target.value)}
            />
        </div>
        <div className="flex flex-col mb-2">
        <label htmlFor="cost" className="text-sm text-gray-600 mb-1">비용</label>
            <input
            type="text"
            name="cost"
            className="w-full px-3 py-2 h-10 text-gray-500 border-b-2 border-amber-200 focus:outline-none focus:border-blue-700"
            //className="w-full px-3 px-2 mr-4 h-10 text-gray-500 border rounded shadow"
            placeholder="0"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            />
        </div>
        
    <input className="p-2 text-green-400 border-2 border-blue-400 rounded hover:text-white hover:bg-green-400"
    type="submit" value="제출"
    />
    </form>
  )
}
