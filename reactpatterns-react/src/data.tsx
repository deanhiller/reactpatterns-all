
export class Invoice {
    name: string;
    number: number;
    amount: string;
    due: string;

    constructor(name:string, number:number, amount:string, due:string){
        this.name = name;
        this.number = number;
        this.amount = amount;
        this.due = due;
    }

}

let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995"
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000"
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003"
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997"
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998"
    }
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(num: number): Invoice | undefined {
    let jsonObj = invoices.find(
        (invoice) => invoice.number === num
    );
    if(!jsonObj)
        return undefined;
    const { name, number, amount, due} = jsonObj;
    return new Invoice(name, number, amount, due);
}

export function deleteInvoice(number: number) {
    invoices = invoices.filter(
        (invoice) => invoice.number !== number
    );
}
