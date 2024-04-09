import { FaCircleUser } from "react-icons/fa6";
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = ({handleLogout, nameUser}) => {

    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const usersData = async () => {
            try {
                const response = await axios.get(
                    "https://www.mockachino.com/06c67c77-18c4-45/users"
                );
                setUsers(response.data.users)
            } catch (error) {
                console.error(error)
            }
        };

        usersData()
    }, []);

    const logoutSession = () => {
        handleLogout()
        navigate("/")
      };

    return (
        <div className="py-4 px-10">
            <div className="flex justify-between gap-2 mb-10">
                <p className="text-xl">Hola {nameUser}</p>
                <div className="flex items-center gap-3">
                    <FaCircleUser
                        size={30}
                        color="#f06407"
                    />
                    <p onClick={logoutSession} className="text-xl cursor-pointer hover:underline decoration-[#f06407] underline-offset-8">Logout</p>
                </div>
            </div>

            <div>
                <div>
                    <p className="mb-4 font-semibold text-xl">Dashboard</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Birth Date</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.contactId} className="text-center" >
                                    <td>{user.name} {user.surnames}</td>
                                    <td>{user.birthDate}</td>
                                    <td>
                                        {user.photo ?
                                            <img width={45} height={45} className="m-auto rounded-full" src={user.photo} alt={user.name} />
                                            : 
                                            <FaCircleUser 
                                                size={45}
                                                className="m-auto" 
                                                color="#faa871"
                                            />
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard