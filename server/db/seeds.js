use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jason Voorhees",
        email: "campkiller80@gmail.com",
        checkedIn: true
    },
    {
        name: "Freddy Krueger",
        email: "elmstreetdreams84@hotmail.com",
        checkedIn: false
    },
    {
        name: "Michael Myers",
        email: "halloweenstalker78@outlook.com",
        checkedIn: true
    }
]);