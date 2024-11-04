interface Person {
    name: string;
    title: string;
    photo: string;
}
const people: Person[] = [
    {
        name: "Alice Johnson",
        title: "Software Engineer",
        photo: "/photos/1.jpeg",
    },
    {
        name: "Bob Smith",
        title: "Product Manager",
        photo: "/photos/2.jpg",
    },
    {
        name: "Charlie Brown",
        title: "UX Designer",
        photo: "/photos/3.jpg",
    },
    {
        name: "Daisy Miller",
        title: "Data Scientist",
        photo: "/photos/4.jpg",
    },
    {
        name: "Ethan Garcia",
        title: "Marketing Specialist",
        photo: "/photos/5.jpg",
    },
];
export default function PeopleList() {
    return (
        <>
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-semibold text-center 
            text-gray-800 m-5">People List</h1>
                <div className="w-full p-8 space-y-6 
            bg-white rounded-xl 
            shadow-lg transform transition-all 
            duration-500 hover:shadow-2xl 
            p-5">
                    <table className="w-full">
                        <tbody>
                            {people.map((person, index) => (
                                <tr key={index} className="group cursor-pointer rounded-lg hover:bg-gray-100">
                                    <td className=" px-6 py-4 text-gray-700 max-w-10 max-h-10">
                                        <img src={person.photo} className="max-w-16 max-h-16 rounded-full" alt="" />
                                    </td>
                                    <td className="flex flex-col gap-4 justify-center h-full h-24">
                                        <div className="font-bold text-lg text-gray-700">
                                            {person.name}
                                        </div>
                                        <div className="text-sm text-gray-700">
                                            {person.title}
                                        </div>
                                    </td>
                                    <td className="font-bold text-base text-white  group-hover:text-gray-400">
                Call >
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </>
    )
}