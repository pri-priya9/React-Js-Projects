import React, { useState } from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseCallback from './components/UseCallback';
import UseRef from './components/UseRef';
import UseContext from './components/UseContext';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseReducer from './components/UseReducer';
import UseMemo from './components/UseMemo';
import './App.css';

function App() {
    const [activeHook, setActiveHook] = useState('');

    const renderComponent = () => {
        switch (activeHook) {
            case 'UseState':
                return <UseState />;
            case 'UseEffect':
                return <UseEffect />;
            case 'UseCallback':
                return <UseCallback />;
            case 'UseRef':
                return <UseRef />;
            case 'UseContext':
                return <UseContext />;
            case 'UseLayoutEffect':
                return <UseLayoutEffect />;
            case 'UseReducer':
                return <UseReducer />;
            case 'UseMemo':
                return <UseMemo />;
            default:
                return <p>Please select a hook to view its project.</p>;
        }
    };

    return (
        <div>
            <h1 className='heading'>All React Js Hooks in One Project</h1>
            <div className="buttonscontainer">
                
                <button onClick={() => setActiveHook('UseState')} className='btn'>UseState</button>
                <button onClick={() => setActiveHook('UseEffect')} className='btn'>UseEffect</button>
                <button onClick={() => setActiveHook('UseCallback')} className='btn'>UseCallback</button>
                <button onClick={() => setActiveHook('UseRef')} className='btn'>UseRef</button>
                <button onClick={() => setActiveHook('UseContext')} className='btn'>UseContext</button>
                <button onClick={() => setActiveHook('UseLayoutEffect')} className='btn'>UseLayoutEffect</button>
                <button onClick={() => setActiveHook('UseReducer')} className='btn'>UseReducer</button>
                <button onClick={() => setActiveHook('UseMemo')} className='btn'>UseMemo</button>
            </div>
            <div className="component-container">
                {renderComponent()}
            </div>
        </div>
    );
}

export default App;
