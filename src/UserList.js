const UserList = ({users, title}) => {
    return (
        <div className="user-list">
            <h1>{title}</h1>
            {users.map((user)=>(
                <div className="user-preview" key={user.id}>
                    <img src={user.avatar_url} alt="Logo"/>
                    <h2>{user.login}</h2>
                </div>
            ))}
        </div>
    );
}

export default UserList;