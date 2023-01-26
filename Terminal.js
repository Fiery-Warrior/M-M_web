import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function Terminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:80/api/execute', { command });
      setOutput(res.data.stdout);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
           <section className='terminal'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={command} onChange={e => setCommand(e.target.value)} placeholder="Enter command" />
                <button type="submit">Submit</button>
            </form>
            <pre className='terminal-output'>{output}</pre>
        </section>
    </div>
  );
}

export default Terminal;





