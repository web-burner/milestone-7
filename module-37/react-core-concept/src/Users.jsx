import { use } from "react"

export default function Users ({fetchUsers,friendsPromise}) {
const users = use(fetchUsers)
const friends = use(friendsPromise)
console.log(friends)
    return(
        <div className="users">
        <h2>Users: {users.length}</h2>
        <div>{users.map(user=> <p key={user.id}>{user.name}</p>)}</div>
        </div>
    )
}