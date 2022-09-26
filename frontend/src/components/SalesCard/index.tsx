import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sales } from '../models/sales';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sales[]>([]);

    useEffect(() => {

        const dMin = minDate.toISOString().slice(0, 10);
        const dMax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`).then(response => {

            setSales(response.data.content);

        }

        )

    }, [minDate, maxDate]);

    return (

        <div className="dsmeta-card">
            {/* esta div representa o meu retângulo (card) */}

            <h2>Período de Vendas</h2>

            <div>
                {/* esta div delimita a área das caixas de textos */}

                <div className="dsmeta-card-input-control-container">
                    {/* primeira caixa de texto */}

                    <label className="dsmeta-card-input-control-label">Início:</label>

                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-card-input-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>

                <div className="dsmeta-card-input-control-container">
                    {/* segunda caixa de texto */}

                    <label className="dsmeta-card-input-control-label">Fim:</label>

                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-card-input-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>

            </div>

            <div>
                {/* esta div representa minha tabela */}

                <table className="dsmeta-sales-table">

                    <thead>

                        <tr>

                            <th className="dsmeta-show-992px">ID</th>

                            <th className="dsmeta-show-576px">Data</th>

                            <th>Vendedor</th>

                            <th className="dsmeta-show-992px">Visitas</th>

                            <th className="dsmeta-show-992px">Vendas</th>

                            <th>Total</th>

                            <th>Notificar</th>

                        </tr>

                    </thead>

                    <tbody>

                        {sales.map(sales => {

                            return (

                                <tr key={sales.id}>

                                    <td className="dsmeta-show-992px">{sales.id}</td>

                                    <td className="dsmeta-show-576px">{new Date(sales.date).toLocaleDateString()}</td>

                                    <td>{sales.sellerName}</td>

                                    <td className="dsmeta-show-992px">{sales.visited}</td>

                                    <td className="dsmeta-show-992px">{sales.deals}</td>

                                    <td>R$ {sales.amount.toFixed(2)}</td>

                                    <td>

                                        <div className="dsmeta-sales-table-btn-container">

                                            <NotificationButton saleId={sales.id} />

                                        </div>

                                    </td>

                                </tr>

                            )

                        }

                        )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default SalesCard