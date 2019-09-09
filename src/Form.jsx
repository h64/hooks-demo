import React, { useState } from 'react';

const Form = ({setLastInput}) => {
    const [input, setInput] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(`${input} was submitted`);
        setLastInput(input);
    }
    
    return (
        <div>
            <p>{input}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={input} 
                    onChange={e => setInput(e.target.value)}     
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;