import React from 'react';
import ReactDOM from 'react-dom';
import Cards from "../components/Cards"

import "../App.css"

function Home() {
    const APP_URL = 'http://localhost:8000'
    const style = {background: `linear-gradient(to left,rgba(0, 0, 0, 0.4) 10%,rgba(0, 0, 0, 1) 100%),url(${APP_URL}/img/banner.png`, backgroundPosition: '30% 40%', backgroundSize: 'cover', height: '85vh'}

    return (
        <div>
            <div className="max-h-screen flex" style={style}>
                <div className="px-4 pt-12 text-white w-4/6">
                    <h1 className="heading text-3xl md:text-6xl font-bold">Info anime favoritmu</h1>
                    <div className="text-gray-300 text-md md:text-xl paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit optio quisquam similique blanditiis laudantium quos distinctio aliquid officia? Magni impedit voluptate, distinctio ducimus eveniet expedita.</div>
                </div>
            </div>
            <Cards response={response}/>
        </div>
    );
}

export default Home;

if (document.getElementById('root')) {
    ReactDOM.render(<Home />, document.getElementById('root'));
}
