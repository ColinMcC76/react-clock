import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
    const [time, setTime] = useState();
    useEffect(() => {
        const timer = setTimeout(() => {
            var amPM = " AM"
            var d = new Date()
            var h = d.getHours()
            var m = d.getMinutes()
            var s = d.getSeconds()
            if (h > 12) {
                h = h - 12
                amPM = " PM"
            }
            if (h < 10) {
                h = "0" + h
            }
            if (m < 10) {
                m = "0" + m
            }
            if (s < 10) {
                s = "0" + s
            }
            let currentTime = h + ":" + m + ":" + s + amPM
            setTime(currentTime)
        }, 1000);
        return () => clearTimeout(timer);
    }
    );

    return (
        <div className='clock'>
            {time}
        </div>
    );
}
export default Clock;