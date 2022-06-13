import store from '../../state/store'

export const getTimeString = ({ hours, minutes, seconds }) => {
    return `${hours}:${minutes}:${seconds}`;
};

const AlarmNotify = (id) => {

    let note = store.getState().find(note => note.id === parseInt(id))

    let currentTime = "0:00:00"

    const getCurrentTime = () => {
        const cet = new Date();
        let hours = cet.getHours();
        let minutes = cet.getMinutes();
        if (minutes < 10) minutes = "0" + minutes
        let seconds = cet.getSeconds();
        if (seconds < 10) seconds = "0" + seconds
        currentTime = getTimeString({ hours, minutes, seconds })
        if (currentTime === note.alarm) alert(`You have to do: ${note.title}`)
    }

    const notif = () => setInterval(getCurrentTime, 1000);
    notif()
    clearInterval(notif)
}

export default AlarmNotify