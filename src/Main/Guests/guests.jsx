import React from 'react';
import GuestProfile from './guest-profile.jsx';
import GuestHistory from './guest-history.jsx';

function Guests() {
    return (<>
        <p>Гості</p>
            <GuestProfile></GuestProfile>
            <GuestHistory></GuestHistory>
    </>
          );
}

export default Guests;