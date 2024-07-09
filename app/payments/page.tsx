import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "success",
            email: "a@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "b@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "failed",
            email: "c@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 3,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 2,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 1,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 11241241200,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 123400,
            status: "pending",
            email: "new-di",
        },
        {
            id: "728ed52f",
            amount: 700,
            status: "pending",
            email: "m@example.com",
        },

    ]
}

export default async function DemoPage() {
    const data = await getData()
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />

            <ul>
                <li>
                    advanced sort:✅
                </li>
                <li>
                    actions:✅
                </li>
                <li>
                    pagination:✅
                </li>
                <li>
                    filter:✅
                </li>
                <li>
                    select all:✅
                </li>
            </ul>
        </div>
    )
}