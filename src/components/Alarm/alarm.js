import { useState } from "react";
import store from '../../state/store'

export const getTimeString = ({ hours, minutes }) => {
    return `${hours}:${minutes}`;
};

const AlarmNotify = (id) => {

    let note = store.getState().find(note => note.id === parseInt(id))

    let currentTime = "0:00"

    const getCurrentTime = () => {
        const cet = new Date();
        let hours = cet.getHours();
        let minutes = cet.getMinutes();
        if (minutes < 10) minutes = "0" + minutes
        currentTime = getTimeString({ hours, minutes })
        if (currentTime === note.alarm) alert(`You have to do: ${note.title}`)
    }

    setInterval(getCurrentTime, 1000);
}

export default AlarmNotify