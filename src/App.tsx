import React from 'react';

// css
import './App.sass';

type AppPropsType = {
    children: JSX.Element | JSX.Element[]
};

const App: React.FC<AppPropsType> = ({ children }) => {
    return (
        <div className="App">
            {children}
        </div>
    );
};

export default App;
