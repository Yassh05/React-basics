// import img from ''

function Profile(){
     const img=`./src/assets/react.svg`;
     const img1=`./assets/gaara.jpg`
     const handle = (e) => e.target.style.display='none';
    return(
        <img onClick={(e) => handle(e)} src={img} alt="xx" />
    )          
}
export default Profile