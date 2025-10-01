import React from 'react';
import './App.css';
import Header from './Header/header.jsx';
import Footer from './Footer/footer.jsx';
import Guests from './Main/Guests/guests.jsx';
import Rooms from './Main/Rooms/rooms.jsx';
import Dashboard from './Main/Dashboard/dashboard.jsx';

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