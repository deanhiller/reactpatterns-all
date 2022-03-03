import {useLocation, useNavigate, useParams} from "react-router-dom";
import {deleteInvoice, getInvoice, Invoice} from "../data";
import Button from '@mui/material/Button';

export default function ViewInvoice() {
    let navigate = useNavigate();
    let params = useParams();
    let location = useLocation();
    const id: string | undefined = params.invoiceId;
    const invoice: Invoice | undefined = id ? getInvoice(parseInt(id, 10)) : undefined;
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

                    <Button variant="contained" color="secondary"
                        onClick={() => {
                            deleteInvoice(id);
                            navigate("/invoices" + location.search);
                        }}
                    >
                        Delete
                    </Button>
                </p>
            </main>
        );
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
