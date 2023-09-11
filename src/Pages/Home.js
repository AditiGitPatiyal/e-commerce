import './Home.css'
import { Link } from 'react-router-dom'

const Home=()=>{
    return <>
        <div class="banner" style={{backgroundImage: "url(./images/banner.avif)",
                            backgroundRepeat: "no-repeat",
                            width:"100%"}}>
        <h1>Welcome to Our Online Store</h1>
        <p>Discover the latest fashion trends at great prices.</p>
        <Link to="/categories" class="btn">Shop Now</Link>
    </div>
    </>
}
export default Home