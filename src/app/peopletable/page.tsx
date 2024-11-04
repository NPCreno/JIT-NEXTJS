interface Person {
    name: string;
    title: string;
    email: string;
}

export default function PeopleTable() {
    const people: Person[] = [
        {
            name: "Alice Johnson",
            title: "Software Engineer",
            email: "alice.johnson@example.com",
        },
        {
            name: "Bob Smith",
            title: "Product Manager",
            email: "bob.smith@example.com",
        },
        {
            name: "Charlie Brown",
            title: "UX Designer",
            email: "charlie.brown@example.com",
        },
        {
            name: "Daisy Miller",
            title: "Data Scientist",
            email: "daisy.miller@example.com",
        },
        {
            name: "Ethan Garcia",
            title: "Marketing Specialist",
            email: "ethan.garcia@example.com",
        },
    ];
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-slate-50 text-left text-sm font-semibold text-gray-600">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-slate-50 text-left text-sm font-semibold text-gray-600">
                            Title
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-slate-50 text-left text-sm font-semibold text-gray-600">
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={index} className="hover:bg-gray-50 even:bg-slate-50">
                            <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                {person.name}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                {person.title}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                {person.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}