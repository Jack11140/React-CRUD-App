import React from 'react'

export default function List({ crudData, setCrudData }) {
    const handleCompleteChange = (id) => {
      let newCrudData = crudData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setCrudData(newCrudData);
    };

    const handleClick = (id) => {
      let newCrudData = crudData.filter((data) => data.id !== id);
      console.log("newCrudData", newCrudData);
      setCrudData(newCrudData);
    };

    return (
      <div>
        {crudData.map((data, index) => (
          <div
            key={data.id}
            className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded"
          >
            <div className="items-center">
              <input
                type="checkbox"
                onChange={() => handleCompleteChange(data.id)}
                defaultChecked={data.completed}
              />{' '}
              <span className={data.completed ? 'line-through' : undefined} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ marginRight: '10px' }}>지출: {data.title},</span>
                <span>{data.title}: {data.cost}원</span>
            </span>
            </div>
            <div className="items-center">
              <button className="material-icons px-4 py-2 float-right" onClick={() => handleClick(data.id)}>
                delete
              </button>
              <button className="material-icons px-4 py-2 float-right" onClick={() => handleClick(data.id)}>
                edit
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }