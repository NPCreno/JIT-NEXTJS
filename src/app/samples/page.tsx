import PeopleTable from "../peopletable/page";
import FormSample from "../formsample/page";
import Card from "../card/page";


export default function Samples() {
    return (
        <div className="flex justify-center min-h-screen py-5 ">
            <div className="flex flex-col gap-5">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4 text-center">People Table</h1>
                    <PeopleTable />
                </div>
                <FormSample />
                <Card></Card>
            </div>
        </div>
    );
}