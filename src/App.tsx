import './App.css';
import { Tooltip } from './components';

function App() {
  return (
    <>
      <div className='layout'>
        <section className='section'>
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
        <section className='section' style={{ height: '100px', overflow: 'scroll' }}>
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
        <Tooltip dir='right' content='Lorem Inpsum' enterDelay={1000}>
          <button>Enter Delay 1sec</button>
        </Tooltip>
        <Tooltip dir='right' content='Lorem Inpsum' leaveDelay={1000}>
          <button>Leave Delay 1sec</button>
        </Tooltip>
        <Tooltip
          dir='bottom'
          content={<div style={{ backgroundColor: 'wheat', color: 'black' }}>hllow</div>}>
          <button>Custom Style</button>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
