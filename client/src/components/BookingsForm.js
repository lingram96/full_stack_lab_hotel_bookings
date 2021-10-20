import React, {useState} from 'react';

const BookingsForm = ({addBooking, postBooking}) => {
     
    const [formData, setFormData] = useState({})

    const onChange = (b) =>{
        formData[b.target.id] = b.target.value;
        setFormData(formData);
    }

    const onSubmit = (b) =>{
        b.preventDefault();
        postBooking(formData)
        
    }

    return(
           <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="status">Booking Status:</label>
                <label htmlFor="status">Checked In</label>
                <input onChange={onChange} type="radio" id="checkedIn" name="checkedIn" value="true"/>
                <label htmlFor="status">Not Checked In</label>
                <input onChange={onChange} type="radio" id="checkedIn" name="checkedIn" value="false"/>
            </div>
            <input type="submit" value="Save" id="save"/>
	    </form>

    )
}

export default BookingsForm;