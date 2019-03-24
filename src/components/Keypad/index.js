import React, { Component } from 'react'
import './keypad.css'
const Keypad=({calc})=>
      <div>
          <div className="buttonwrapper">
        <button name="(" onClick={e => calc(e.target.name)}>(</button>
           <button name="CE" onClick={e => calc(e.target.name)}>CE</button>
           <button name=")" onClick={e => calc(e.target.name)}>)</button>

            <button name="C" onClick={e => calc(e.target.name)} >C</button>
            </div>
            <div className="buttonwrapper">

           <button name="1" onClick={e => calc(e.target.name)}>1</button>
           <button name="2" onClick={e => calc(e.target.name)}>2</button>
            <button name="3" onClick={e => calc(e.target.name)}>3</button>
           <button name="+" onClick={e => calc(e.target.name)}>+</button>
           </div>
           <div className="buttonwrapper">

           <button name="4" onClick={e => calc(e.target.name)}>4</button>

            <button name="5" onClick={e => calc(e.target.name)}>5</button>
           <button name="6" onClick={e => calc(e.target.name)}>6</button>
           <button name="-" onClick={e => calc(e.target.name)}>-</button>
           </div>
           <div className="buttonwrapper">

           <button name="7" onClick={e => calc(e.target.name)}>7</button>
           <button name="8" onClick={e => calc(e.target.name)}>8</button>
           <button name="9" onClick={e => calc(e.target.name)}>9</button>
           <button name="*" onClick={e => calc(e.target.name)}>X</button>
           </div>
           <div className="buttonwrapper">

           <button name="." onClick={e => calc(e.target.name)}>.</button>
           <button name="0" onClick={e => calc(e.target.name)}>0</button>
           <button name="=" onClick={e => calc(e.target.name)}>=</button>
           <button name="/" onClick={e => calc(e.target.name)}>%</button>
           </div>


  
      </div>

      export default Keypad;
