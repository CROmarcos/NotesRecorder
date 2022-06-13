import { useState } from "react";

export const getTimeString = ({ hours, minutes }) => {
    return `${hours}:${minutes}`;
};

const AlarmNotify = (props) => {

    const [currentTime, setCurrentTime] = useState("0:00")


    const getCurrentTime = () => {
        const cet = new Date();
        let hours = cet.getHours();
        let minutes = cet.getMinutes();
        if (minutes < 10) minutes = "0" + minutes
        setCurrentTime(getTimeString({ hours, minutes }))
    }

    setInterval(getCurrentTime, 1000);

    if (currentTime === props.alarmTime) return alert(`You have to do: ${props.note}`)
}

export default AlarmNotify