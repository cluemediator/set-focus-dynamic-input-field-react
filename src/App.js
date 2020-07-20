import React, { useState, useEffect } from "react";

function App() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "", firstNameRef: null }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "", firstNameRef: null }]);
  };

  // set focus on the dynamic input field
  useEffect(() => {
    if (inputList[inputList.length - 1].firstNameRef)
      inputList[inputList.length - 1].firstNameRef.focus();
  }, [inputList.length]);

  return (
    <div className="App">
      <h3>Set focus on the dynamic input field - <a href="https://cluemediator.com" target="_blank">Clue Mediator</a></h3>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              ref={e => x.firstNameRef = e}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList.map(x => {
        delete x.firstNameRef;
        return x;
      }))}</div>
    </div>
  );
}

export default App;