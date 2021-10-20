import React, { useEffect, useState } from 'react';
import BookingsItem from '../components/BookingsItem';
import BookingsList from '../components/BookingsList';
import BookingsDetail from '../components/BookingsDetail';
import BookingsForm from '../components/BookingsForm';

const BookingsContainer = () => {

    const [booking, setBooking] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        fetchBookings()
    }, [])


    const fetchBookings = () => {
        fetch('http://localhost:5000/api/bookings')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setBooking(data)
            })
    }

    const addBooking = (b) => {
        const temp = booking.map(a => a);
        temp.push(b);
        setBooking(temp);
    }

    const postBooking = newBooking => {
        fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => res.json())
        .then((data) => {addBooking(data)})
    }

    const onBookingSelected = function (booking) {
        setSelectedBooking(booking);
    }


    return (
        <div>
            <BookingsForm addBooking={addBooking} postBooking={postBooking}/>
            <BookingsList booking={booking} onBookingSelected={onBookingSelected} />
            {selectedBooking ? <BookingsDetail booking={selectedBooking} onBookingSelected={onBookingSelected}/> : null}
        </div>
    )
};

export default BookingsContainer;