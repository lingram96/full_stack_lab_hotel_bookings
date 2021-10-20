import React from 'react';

const BookingsItem = ({booking, onBookingSelected}) => {
    const handleSelected = () => {
        onBookingSelected(booking);
    }
    return(
        <div>
        <li onClick={handleSelected}>{booking.name}</li>
        </div>
    )
};

export default BookingsItem;