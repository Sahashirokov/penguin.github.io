import React from 'react';
import {userAPI} from "../service/UserService";
import PenguinItem from "./PenguinItem";

const PenguinContainer = () => {
    const {data: users,isLoading,isError} = userAPI.useFetchAllUsersQuery(10);
    return (
        <div>
            <div className="penguin__list">
                {isLoading&&<h1>Загрузка...</h1>}
                {isError&&<h1>Ошибка</h1>}
                {users && users.map((user) => (
                <PenguinItem key={user.id} penguin={user} />
                ))}
            </div>
        </div>
    );
};

export default PenguinContainer;