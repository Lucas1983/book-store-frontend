import logo from './logo.png';
import './App.css';
import React, {Component} from "react";
import BookTable from "./table/BootTable";

class App extends Component {

    render() {
        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    <body>
                        <div className={BookTable}>
                            <BookTable/>
                        </div>
                    </body>
                </div>
            </>
        );
    }
}

export default App;



