import React from 'react';
import RoomList from './Rooms/room-list.jsx';
import RoomDetails from './Rooms/room-details.jsx';

function Rooms() {
    return (
        <>
            <h2>Номери</h2>

<RoomList></RoomList>
            <RoomDetails></RoomDetails>
        </>
    );
}

export default Rooms;