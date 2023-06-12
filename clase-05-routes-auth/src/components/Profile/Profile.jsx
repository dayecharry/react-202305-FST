function Profile({ user }) {

    return <div>
        <h3>Nombre {user.name}</h3>
        <h6>Email {user.email}</h6>
        <h6>Role {user.role}</h6>
    </div>
}
export default Profile