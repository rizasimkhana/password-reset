function User(){
    const myStyle = {
        backgroundImage:
            "url('https://cdn.pixabay.com/photo/2024/04/08/22/31/forest-8684668_1280.jpg')",
        height: "123vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };
    return(
    <div style={myStyle}><h1 style={{fontSize:"larger",textAlign:"center",paddingTop:"20%",whiteSpace:"nowrap",color:"green",opacity:"0.5",backgroundColor:"grey",height:"113vh"}}>welcome user</h1></div>
    )
}
export default User