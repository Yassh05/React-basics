import pic from './assets/gaara.jpg'

function Card(props){
    return(
        <div className="card">
                <img src={pic}alt="gaara" />
                <h2>{props.name}</h2>
                <p>
                    I'M LEARNING REACT.JS
                </p>
        </div>
    );
}
export default Card