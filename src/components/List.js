import React, { useState, useSyncExternalStore } from 'react'

const List = React.memo(({
  id, title, cost, completed, crudData, setCrudData, provided, snapshot, handleClick
}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setIsEditedTitle] = useState(title);
  const [editedCost, setIsEditedCost] = useState(cost);

  console.log("List Component");

  const handleCompleteChange = (id) => {
    let newCrudData = crudData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setCrudData(newCrudData);
    localStorage.setItem('crudData', JSON.stringify(newCrudData));

  };

  const handleEditChange = (event) => {
    const { value } = event.target;
    setIsEditedTitle(value);
    setIsEditedCost(value);
    //setIsEditedTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newCrudData = crudData.map(data => {
    if(data.id === id) {
      data.title = editedTitle;
      data.cost = editedCost;
    }
    return data;
    })
    setCrudData(newCrudData);
    localStorage.setItem('crudData', JSON.stringify(newCrudData));
    setIsEditing(false);
  }

  if(isEditing) {
    return(
          <div className={'flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded'}>
              <div className="items-center">
                <form onSubmit={{handleSubmit}}>
                  <input
                  className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                  value={editedTitle}
                  onChange={handleEditChange}
                  autoFocus
                  />
                  <input
                  className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                  value={editedCost}
                  onChange={handleEditChange}
                  autoFocus
                  />
                </form>
              </div>
              <div className="items-center">
                  <button
                  className="material-icons float-right px-4 py-2"
                  onClick={() => setIsEditing(false)}
                  >x</button>

                  <button onClick={handleSubmit} className="material-icons float-right px-4 py-2"
                  type="submit"
                  >edit</button>
              </div>
          </div>
    )
  } else {
    return (
        <div
        key={id}
        {...provided.droppableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
        >
          <div className={'flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded'}>
            <div className="items-center">
              <input
                type="checkbox"
                onChange={() => handleCompleteChange(id)}
                defaultChecked={completed}
              />{" "}
              <span className={completed ? "line-through" : undefined}>
                <span style={{ marginRight: '10px' }}>지출 항목: {title},</span>
                <span>비용: {cost}원</span>
              </span>
            </div>

            <div className="items-center">
              <button
              className="material-icons float-right px-4 py-2"
              onClick={() => handleClick(id)}
              >delete</button>

              <button
              className="material-icons float-right px-4 py-2"
              onClick={() => setIsEditing(true)} 
              type="submit"
              >edit</button>
            </div>
          </div>
        </div>
        );
    }
});

export default List