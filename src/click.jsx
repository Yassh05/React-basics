function Click(){

    const handle= (e) => e.target.textContent="yash";
    // const handle1= (name) => console.log(`${name} stopp`);
        return (
            <button onDoubleClick={(e) => handle(e)}>Click ME</button>
        );
}
export default Click