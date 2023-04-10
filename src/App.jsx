import { useState } from 'react';

function App() {
  const [formValue, setFormValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newElement = (
      <div key={Date.now()}>
        <p>{formValue}</p>
        <button onClick={() => handleEdit(newElement)}>Edit</button>
        <button onClick={() => handleDelete(newElement)}>Delete</button>
      </div>
    );
    setFormValue('');
    setElements(prevElements => [...prevElements, newElement]);
  };

  const handleEdit = element => {
    const newInputValue = element.props.children;
    setFormValue(newInputValue);
    handleDelete(element);
  };

  const handleDelete = element => {
    console.log( element)
    setElements(prevElements => prevElements.filter(prevElement => prevElement !== element));
  };

  const [elements, setElements] = useState([]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Output:
          <input type="text" value={formValue} onChange={event => setFormValue(event.target.value)} />
        </label>
        <button type="submit">{elements.length > 0 ? 'Add another' : 'Add'}</button>
      </form>
      {elements.length === 0 && <p>No output yet</p>}
      {elements}
    </div>
  );
}

export default App;