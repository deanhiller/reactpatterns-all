import {useLocation, useNavigate, useParams} from "react-router-dom";
import {deleteInvoice, getInvoice} from "../data";

export default function Invoice() {
    let navigate = useNavigate();
    let params = useParams();
    let location = useLocation();
    let id = params.invoiceId
    if(id) {
        let invoice = getInvoice(parseInt(id, 10));
        if(invoice) {
            let id = invoice.number;
            return (
                <main style={{padding: "1rem"}}>
                    <h2>Total Due: {invoice.amount}</h2>
                    <p>
                        {invoice.name}: {invoice.number}
                    </p>
                    <p>Due Date: {invoice.due}</p>
                    <p>
                        <button
                            onClick={() => {
                                deleteInvoice(id);
                                navigate("/invoices" + location.search);
                            }}
                        >
                            Delete
                        </button>
                    </p>
                </main>
            );
        }
    }

    return (
        <main style={{padding: "1rem"}}>
            <h2>Not Found</h2>
            <p>
                Invoice not found
            </p>
        </main>
    );
}
