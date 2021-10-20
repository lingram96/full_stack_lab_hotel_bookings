import React from 'react';
import BookingsItem from './BookingsItem';

const BookingsList = ({booking, onBookingSelected}) => {

    const bookingDisplay = booking.map((booking, index) => {
        return <BookingsItem booking={booking} key={index} onBookingSelected={onBookingSelected}/>
    })
    
    return (
        <>
        <h2>List of Halloween Killers:</h2>
        {bookingDisplay}
        </>
    )
};

export default BookingsList;