import { Button, List, ListItemText } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchUsers } from "../asyncFunctions/fetchUsers";
import { CombinedStateI, User, UsersAction } from "../interface/Interfaces";
import { useAppDispatch } from "../store";

const UsersComponent: FC = () => {
    const dispatch = useAppDispatch();
    const users = useSelector((state: CombinedStateI) => state.usersReducer.users);
    return (
        <div>
            <Button variant='contained' onClick={() => dispatch((dispatch) => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(json => { dispatch({ type: 'getUsersFromRemoteServer', payload: json }) })
            })}>Get Users</Button>
            <List>
                {users.map((user: User) => {
                    return (
                        <ListItemText>
                            Name : {user.name}<br />
                            UserName: {user.username}
                        </ListItemText>
                    )
                })}
            </List>
        </div>
    )
}

export default UsersComponent