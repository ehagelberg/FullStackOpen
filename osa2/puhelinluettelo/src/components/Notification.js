import '../index.css';

const Notification = ({message}) =>{
    console.log("viesti:" ,)
    if(message === null){
        return null
    }
    if(message.includes('Added')){
        return (
            <div className="notificationSuccess">
                {message}
            </div>
        )
    }
    return (
        <div className="notificationError">
            {message}
        </div>
    )
}

export default Notification