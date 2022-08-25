import { Dispatch } from "react"
import { UsersAction } from "../interface/Interfaces"

export const fetchUsers = () => {
    return (dispatch: Dispatch<UsersAction>) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => { dispatch({ type: 'getUsersFromRemoteServer', payload: json }) })
    }
}