import React from 'react';
import GuestProfile from './Guests/guest-profile.jsx';
import GuestHistory from './Guests/guest-history.jsx';

function Guests() {
    return (<>
        <p>Гості</p>
            <GuestProfile></GuestProfile>
            <GuestHistory></GuestHistory>
    </>
          );
}

export default Guests;