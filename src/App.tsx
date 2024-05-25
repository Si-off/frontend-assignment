import { useState } from 'react';
import './App.css';
import { Tooltip } from './components';

function App() {
  const [disable, setDisable] = useState(false);
  return (
    <>
      <div className='layout'>
        <div className='wrapper'>
          <section className='section' style={{ flex: 1 }}>
            <h2>Placements</h2>
            <div className='divider' />
            <div>
              <div className='item-wraper--top'>
                <Tooltip dir='topLeft' content='Lorem Inpsum'>
                  <button>Top Left</button>
                </Tooltip>
                <Tooltip dir='top' content='Lorem Inpsum'>
                  <button>Top</button>
                </Tooltip>
                <Tooltip dir='topRight' content='Lorem Inpsum'>
                  <button>Top Right</button>
                </Tooltip>
              </div>
              <div className='item-wrapper--mid'>
                <div>
                  <Tooltip dir='leftTop' content='Lorem Inpsum'>
                    <button>Left Top</button>
                  </Tooltip>
                  <Tooltip dir='left' content='Lorem Inpsum'>
                    <button>Left</button>
                  </Tooltip>
                  <Tooltip dir='leftBottom' content='Lorem Inpsum'>
                    <button>Left Bottm</button>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip dir='rightTop' content='Lorem Inpsum'>
                    <button>Right Top</button>
                  </Tooltip>
                  <Tooltip dir='right' content='Lorem Inpsum'>
                    <button>Right</button>
                  </Tooltip>
                  <Tooltip dir='rightBottom' content='Lorem Inpsum'>
                    <button>Right Bottom</button>
                  </Tooltip>
                </div>
              </div>
              <div className='item-wraper--top'>
                <Tooltip dir='bottomLeft' content='Lorem Inpsum'>
                  <button>Bottom Left</button>
                </Tooltip>
                <Tooltip dir='bottom' content='Lorem Inpsum'>
                  <button>Bottom</button>
                </Tooltip>
                <Tooltip dir='bottomRight' content='Lorem Inpsum'>
                  <button>Bottom Right</button>
                </Tooltip>
              </div>
            </div>
          </section>
          <section className='section' style={{ flex: 1 }}>
            <h2>Overflow</h2>
            <div className='divider' />
            <div style={{ height: '100px', overflow: 'scroll' }}>
              <div className='item-wraper--top'>
                <Tooltip dir='topLeft' content='Lorem Inpsum'>
                  <button>Top Left</button>
                </Tooltip>
                <Tooltip dir='top' content='Lorem Inpsum'>
                  <button>Top</button>
                </Tooltip>
                <Tooltip dir='topRight' content='Lorem Inpsum'>
                  <button>Top Right</button>
                </Tooltip>
              </div>
              <div className='item-wrapper--mid'>
                <div>
                  <Tooltip dir='leftTop' content='Lorem Inpsum'>
                    <button>Left Top</button>
                  </Tooltip>
                  <Tooltip dir='left' content='Lorem Inpsum'>
                    <button>Left</button>
                  </Tooltip>
                  <Tooltip dir='leftBottom' content='Lorem Inpsum'>
                    <button>Left Bottm</button>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip dir='rightTop' content='Lorem Inpsum'>
                    <button>Right Top</button>
                  </Tooltip>
                  <Tooltip dir='right' content='Lorem Inpsum'>
                    <button>Right</button>
                  </Tooltip>
                  <Tooltip dir='rightBottom' content='Lorem Inpsum'>
                    <button>Right Bottom</button>
                  </Tooltip>
                </div>
              </div>
              <div className='item-wraper--top'>
                <Tooltip dir='bottomLeft' content='Lorem Inpsum'>
                  <button>Bottom Left</button>
                </Tooltip>
                <Tooltip dir='bottom' content='Lorem Inpsum'>
                  <button>Bottom</button>
                </Tooltip>
                <Tooltip dir='bottomRight' content='Lorem Inpsum'>
                  <button>Bottom Right</button>
                </Tooltip>
              </div>
            </div>
          </section>
        </div>
        <div className='wrapper'>
          <section className='section'>
            <h2>Delay</h2>
            <div className='divider' />
            <div style={{ display: 'flex' }}>
              <Tooltip dir='bottom' content='Lorem Inpsum' enterDelay={1000}>
                <button>Enter Delay 1sec</button>
              </Tooltip>
              <Tooltip dir='bottom' content='Lorem Inpsum' leaveDelay={1000}>
                <button>Leave Delay 1sec</button>
              </Tooltip>
              <Tooltip dir='bottom' content='Lorem Inpsum' enterDelay={1000} leaveDelay={1000}>
                <button>Enter & Leave Delay 1sec</button>
              </Tooltip>
            </div>
          </section>
          <section className='section'>
            <h2>Interative</h2>
            <div className='divider' />
            <div style={{ display: 'flex' }}>
              <Tooltip dir='bottom' content='Lorem Inpsum' leaveDelay={300} interactive>
                <button>Interactive</button>
              </Tooltip>
            </div>
          </section>
        </div>
        <div className='wrapper'>
          <section className='section'>
            <h2>Custom Style</h2>
            <div className='divider' />
            <div style={{ display: 'flex' }}>
              <Tooltip
                dir='bottomLeft'
                content={
                  <div style={{ backgroundColor: 'wheat', color: 'black', padding: '8px' }}>
                    Lorem Ipsum
                  </div>
                }
                leaveDelay={300}
                interactive>
                <button>Custom Style</button>
              </Tooltip>
              <Tooltip
                dir='bottomLeft'
                content={
                  <div className='custom-tooltip'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </div>
                }
                leaveDelay={300}
                interactive>
                <button>What is Lorem Ipsum?</button>
              </Tooltip>
            </div>
          </section>
          <section className='section'>
            <h2>Disable</h2>
            <div className='divider' />
            <div style={{ display: 'flex' }}>
              <button
                style={{ backgroundColor: `${disable ? 'lightskyblue' : 'lightgray'}` }}
                onClick={() => setDisable(!disable)}>
                {disable.toString()}
              </button>
              <Tooltip dir='bottom' content='Lorem Insum' disable={disable}>
                <button>Lorem Ipsum</button>
              </Tooltip>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
