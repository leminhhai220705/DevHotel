import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Bookingscrren() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  const { roomid } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const data = (await axios.post('/api/rooms/getroombyid', { roomid })).data;
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchRoom();
  }, [roomid]);

  return (
    <div className='m-5'>
      {loading ? (
        <Loader />
      ) : error ? (  // Sửa ở đây để kiểm tra biến `error`
        <Error />
      ) : (
        <div>
          <div className='row justify-content-center mt-5 bs'>
            <div className='col-md-5'>
              <div className='text-center mb-4'>
                <h5>{room.name}</h5>
                <img src={room.imageurls[0]} className='bigimg' alt={room.name} style={{ width: '100%', borderRadius: '8px' }} />
              </div>
            </div>

            <div className='col-md-7 d-flex flex-column justify-content-start'>
              <div className='d-flex flex-column' style={{ marginRight: '25px' }}>
                {/* Booking Details */}
                <div className='text-start mb-4'>
                  <h3>Booking Details</h3>
                  <hr />
                  <b>
                    <p>Name: </p>
                    <p>From Date: </p>
                    <p>To Date: </p>
                    <p>Max Count: {room.maxcount}</p>
                  </b>
                </div>

                {/* Amount và nút Pay Now thẳng hàng */}
                <div className='d-flex flex-column'>
                  <div className='text-start mb-4'>
                    <h3>Amount</h3>
                    <hr />
                    <b>
                      <p>Total days: </p>
                      <p>Rent per day: {room.rentperday}</p>
                      <p>Total Amount: </p>
                    </b>
                  </div>

                  <div style={{ marginLeft: '620px' }}>
                    <button className='btn btn-primary'>Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingscrren;