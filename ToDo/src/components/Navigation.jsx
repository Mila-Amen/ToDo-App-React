import { Link } from "react-router-dom"
export default function Navigation(){
return (<nav>
<div className="left">
</div>
<Link to="/">
<img src="logo.png" alt="" />
</Link>

<div className="right">
 <Link to="/help"> Help</Link>
</div>
</nav>)}