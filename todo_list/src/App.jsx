import React from "react";
import Tasklist from './component/Tasklist'
import AddTask from './component/AddTask'

function App() {
    return (
        <div className="App">
        <AddTask/>
        <Tasklist/>
        </div>
    )
}

export default App;