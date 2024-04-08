import { FaCircleUser } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="py-4 px-10">
            <div className="flex justify-between gap-2 mb-10">
                <p className="text-xl">Hola Jorge</p>
                <div className="flex items-center gap-3">
                    <FaCircleUser
                        size={30}
                        color="#f09e07"
                    />
                    <p className="text-xl">Logout</p>
                </div>
            </div>

            <div>
                <div>
                    <p className="mb-4 font-semibold text-xl">Dashboard</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Birth Date</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="text-center">
                                <td>Jorge</td>
                                <td>19-05-1989</td>
                                <td>
                                    <FaCircleUser
                                        size={45}
                                        className="m-auto"
                                    />
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="text-center">
                                <td>Juan</td>
                                <td>18-05-1989</td>
                                <td>
                                   <FaCircleUser
                                        size={45}
                                        className="m-auto"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard