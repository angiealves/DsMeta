import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {

    saleId: number;

}

function handleClick(id : number) {

    axios(`${BASE_URL}/sales/${id}/notification`)

        .then(response => {

            toast.info("SMS enviado com sucesso ao vendedor!")

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