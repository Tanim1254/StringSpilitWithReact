import React, { useState } from 'react';
import './App.css'

function MyForm() {
  const [textboxValue, setTextboxValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [helloCount, setHelloCount] = useState(0);

  const handleTextboxChange = (event) => {
    setTextboxValue(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchWord = textboxValue.toLowerCase();
    const words =  textareaValue.toLowerCase().split(/\s/);
    const count = words.filter(word => word === searchWord).length;
    setHelloCount(count);
    console.log('Textbox:', textboxValue);
    console.log('Textarea:', textareaValue);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="form-label">Enter The Text You Want to Search:</label>
        <input
          type="text"
          value={textboxValue}
          onChange={handleTextboxChange}
          placeholder="Enter text here"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Enter The Sentence:</label>
        <textarea
          value={textareaValue}
          onChange={handleTextareaChange}
          placeholder="Enter more text here"
          className="form-textarea"
        />
      </div>

      <button type="submit" className="form-button">Submit</button>
       
       {helloCount > 0 && (
        <p>The word {textboxValue} occurs {helloCount} times in the given sentence.</p>
      )}
    </form>
  );
}

export default MyForm;
