
function Userx(props){
        
        // if(props.login){
        //     return <h2>Welcome {props.username}</h2>
        // }
        // else{
        //     return <h2>you have to Log in </h2>
        // }
        return (props.login ? <h2 className="welcome">welcome {props.username}</h2>:  <h3>You have to log in</h3>);
}
export default Userx