import store from '../../state/store'
import swal from 'sweetalert'
import { setAlarm } from '../../state/actions'

export const getTimeString = ({ hours, minutes, seconds }) => {
    return `${hours}:${minutes}:${seconds}`;
};

export const openAlarm = (id) => {
    document.getElementById(`open-alarm/${id}`).style.display = "none"
    document.getElementById(`set-alarm/${id}`).style.display = "block"
    document.getElementById(`active-alarm/${id}`).style.display = "none"
}

export const makeAlarm = (id) => {
    document.getElementById(`open-alarm/${id}`).style.display = "none"
    document.getElementById(`set-alarm/${id}`).style.display = "none"
    document.getElementById(`active-alarm/${id}`).style.display = "flex"
}

export const cancelAlarm = (id) => {
    document.getElementById(`open-alarm/${id}`).style.display = "flex"
    document.getElementById(`set-alarm/${id}`).style.display = "none"
    document.getElementById(`active-alarm/${id}`).style.display = "none"
}

const AlarmNotify = (id) => {

    let note = store.getState().find(note => note.id === parseInt(id))
    let alarm = note.alarm

    let currentTime = "0:00:00"

    let notifTitle = ""
    store.getState().forEach(item => {
        if (item.alarm === alarm) notifTitle += item.title + "\n"
    });

    const takeActivity = () => {
        store.getState().forEach(item => {
            if (item.alarm === alarm) {
                store.dispatch(setAlarm({ id: item.id, alarm: "N/A" }))
                cancelAlarm(item.id)
            }
        });
    }

    const getCurrentTime = () => {
        const cet = new Date();
        let hours = cet.getHours();
        let minutes = cet.getMinutes();
        if (minutes < 10) minutes = "0" + minutes
        let seconds = cet.getSeconds();
        if (seconds < 10) seconds = "0" + seconds
        currentTime = getTimeString({ hours, minutes, seconds })

        if (currentTime === note.alarm) swal({
            title: "Don't forget about...",
            text: notifTitle,
            buttons: {
                done: {
                    text: "OK, done",
                    value: true
                },
                later: {
                    text: "Later",
                    value: false
                }
            }
        }).then((value) => value ? takeActivity() : swal.close())
    }

    const notif = () => setInterval(getCurrentTime, 1000);
    notif()
    clearInterval(notif)
}

export default AlarmNotify