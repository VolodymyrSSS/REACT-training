import Navbar from './Navbar/Navbar';
import { useLocation } from 'react-router-dom';

export default function Publicklayout(props) {
  const location = useLocation();
  console.log(location);

  return (
    <div>

    {/* navbar */}
    <Navbar />

    {/* body */}
    {props.children}

    {/* footer */}

    </div>
  )
}
