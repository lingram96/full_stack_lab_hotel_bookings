import React from 'react';
import BookingsItem from './BookingsItem';

const BookingsDetail = ({booking}) => {

const bookingStatus = function() {
    if (booking.checkedIn === "true"){
        return <p>Checked In</p>
    } else {
       return <p>Not checked in</p>
    }
}

const deleteBooking = () => {
    return fetch('http://localhost:5000/api/bookings' + booking._id, {
        method: 'DELETE'
    })
}

return(
    <div>
    <h2>{booking.name}</h2>
    <h3>{booking.email}</h3>
    <p>{bookingStatus()}</p>
    <button onClick={deleteBooking()}>Delete</button>
    </div>
)
};

export default BookingsDetail;