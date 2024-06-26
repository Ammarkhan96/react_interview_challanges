import React, {useState} from 'react';
import data from './components/data'

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if(count <= 0){
      amount = 1;
    }
    if(count > 12){
      amount = 12
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Paragraph Generator</h3>
      <form className='para-form' onSubmit={handleSubmit}>
         <label htmlFor='amount'>paragraph:</label>
         <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}/>
        <button className='btn'>generate</button>
        </form> 

        <article className='para-text'>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </article>

    </section>
  );
}

export default App;
