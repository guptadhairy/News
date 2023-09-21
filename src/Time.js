import React from 'react'
var Time =()=>{
    var showdate = new Date();
    return(
        <div className='meri3'>
            <h2>Your briefing</h2>
            <h3>{showdate.toDateString()}</h3>
        </div>
    );

}
export default Time;
