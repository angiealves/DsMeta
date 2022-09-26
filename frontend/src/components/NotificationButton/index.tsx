import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {

    saleId: number;

}

function handleClick(id : number) {

    axios(`${BASE_URL}/sales/${id}/notification`)

        .then(response => {

            console.log("Sucesso!!!");

        }
    )

}

function NotificationButton({saleId} : Props) {

    return (

        <div className="dsmeta-sales-table-btn" onClick={() => handleClick(saleId)}>

            <img src="src/assets/img/notification-icon.svg" alt="Notificar" />

        </div>

    )

}

export default NotificationButton