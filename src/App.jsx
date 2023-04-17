import './App.css';
import Divider from './comps'
import { useState } from 'react'

function App() {
  
  const [textAlign, textAlignc] = useState('fa-solid fa-align-left')
  const [textsize, textsizec] = useState(16)
  const [textColor, textColorc] = useState('#fff')
  const [bgColor, bgColorc] = useState()
  
  const changeAR = (al) => {
    document.querySelector('#Textbox').style.textAlign = al
  }

  const createList = (type) => {
    const fitem = document.createElement('li')
    const list = document.createElement(type)
    list.appendChild(fitem)
    
    document.querySelector('#Textbox').appendChild(list)
    document.querySelector('#Textbox').focus()
  }

  const createElement = (type) => {
    const newElement = document.createElement(type)

    newElement.innerText = '-'
      
    document.querySelector('#Textbox').appendChild(newElement)

    document.querySelector('#Textbox').focus()
  }

  const ctc = () => {
    const color = document.querySelector('#TextColor').value
    textColorc(color)
  }
  const cbc = () => {
    const color = document.querySelector('#BgColor').value
    bgColorc(color)
  }
  const cts = () => {
    const ts = document.querySelector('#TextSize').value
    textsizec(Number(ts))
  }

  return (
    <div className="App">
      <div class="editor" style={{backgroundColor: bgColor}}>
        <div style={{fontSize: textsize, color: textColor}} id="Textbox" contenteditable="true" autocorrect={true} spellcheck={true} className="text-box"></div>
        <div className="text-box-editor">
          <div className="dropdown sbs">
            <button className={textAlign}></button>
            <div className="dropdown-cont">
              <button onClick={() => {changeAR('left'); textAlignc('fa-solid fa-align-left')}} title="Text align left" className="fa-solid fa-align-left"></button>
              <button onClick={() => {changeAR('center'); textAlignc('fa-solid fa-align-center')}} title="Text align center" className="fa-solid fa-align-center"></button>
              <button onClick={() => {changeAR('right'); textAlignc('fa-solid fa-align-right')}} title="Text align right" className="fa-solid fa-align-right"></button>
              <button onClick={() => {changeAR('justify'); textAlignc('fa-solid fa-align-justify')}} title="Text align justify" className="fa-solid fa-align-justify"></button>
            </div>
          </div>
          <div className="dropdown sbs">
            <button className="fa-solid fa-list"></button>
            <div className="dropdown-cont">
              <button onClick={() => {createList('ul'); textAlignc('fa-solid fa-align-left')}} title="Create ordered list" className="fa-solid fa-list-ul"></button>
              <button onClick={() => {createList('ol'); textAlignc('fa-solid fa-align-center')}} title="Text unordered list" className="fa-solid fa-list-ol"></button>
            </div>
          </div><Divider/>
          <div className="dropdown sbs">
            <button title="Headers">H</button>
            <div className="dropdown-cont">
              <button onClick={() => {createElement('h1')}} title="Create H1">H1</button>
              <button onClick={() => {createElement('h2')}} title="Create H2">H2</button>
              <button onClick={() => {createElement('h3')}} title="Create H3">H3</button>
              <button onClick={() => {createElement('h4')}} title="Create H4">H4</button>
              <button onClick={() => {createElement('h5')}} title="Create H5">H5</button>
              <button onClick={() => {createElement('h6')}} title="Create H6">H6</button>
            </div>
          </div>
          <div className="dropdown sbs">
            <button>{textsize}</button>
            <div className="dropdown-cont">
              <button onClick={() => {textsizec(textsize + 1)}} title="Make Font larger">+</button>
              <p contenteditable="true" onChange={() => {cts()}} id="TextSize" className="wid-fit sbs marg0">{textsize}</p>
              <button onClick={() => {textsizec(textsize - 1)}} title="">-</button>
            </div>
          </div><Divider />
          <div className="dropdown sbs">
            <input onChange={() => {ctc()}} title="Text Color" value={textColor} id="TextColor" className="button" type="color" />
          </div>
          <div className="dropdown sbs">
            <input onChange={() => {cbc()}} title="background Color" value={bgColor} id="BgColor" className="button" type="color" />
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
