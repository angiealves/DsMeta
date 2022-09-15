import NotificationButton from '../NotificationButton'
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SalesCard() {

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
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-card-input-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>

                <div className="dsmeta-card-input-control-container">
                    {/* segunda caixa de texto */}

                    <label className="dsmeta-card-input-control-label">Fim:</label>

                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
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

                        <tr>

                            <td className="dsmeta-show-992px">#001</td>

                            <td className="dsmeta-show-576px">07/09/2022</td>

                            <td>Ana</td>

                            <td className="dsmeta-show-992px">10</td>

                            <td className="dsmeta-show-992px">20</td>

                            <td>R$ 2.000,00</td>

                            <td>

                                <div className="dsmeta-sales-table-btn-container">

                                    <NotificationButton />

                                </div>

                            </td>

                        </tr>

                        <tr>

                            <td className="dsmeta-show-992px">#002</td>

                            <td className="dsmeta-show-576px">07/09/2022</td>

                            <td>Bia</td>

                            <td className="dsmeta-show-992px">20</td>

                            <td className="dsmeta-show-992px">30</td>

                            <td>R$ 3.000,00</td>

                            <td>

                                <div className="dsmeta-sales-table-btn-container">

                                    <NotificationButton />

                                </div>

                            </td>

                        </tr>

                        <tr>

                            <td className="dsmeta-show-992px">#003</td>

                            <td className="dsmeta-show-576px">07/09/2022</td>

                            <td>Cleia</td>

                            <td className="dsmeta-show-992px">100</td>

                            <td className="dsmeta-show-992px">450</td>

                            <td>R$ 45.000,00</td>

                            <td>

                                <div className="dsmeta-sales-table-btn-container">

                                    <NotificationButton />

                                </div>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default SalesCard