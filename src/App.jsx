import React from 'react';
import './App.css';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Guests from './Main/guests.jsx';
import Rooms from './Main/rooms.jsx';
import Dashboard from './Main/dashboard.jsx';

function App() {
    return (
        <>
            <Header></Header>

                <Dashboard></Dashboard>
                <Guests></Guests>
                <Rooms></Rooms>

            <Footer></Footer>
        </>
    );
}

export default App;