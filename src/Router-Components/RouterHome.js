import { Link } from "react-router-dom";

const HomeRouter=()=>{
    return(
        <>
        <h2>Home Page </h2>
        <Link to='/login'>Login</Link>
        </>
    )
}

export default HomeRouter;