import { useNavigate } from 'react-router-dom';
import Publicklayout from '../layouts/common/Publicklayout';

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/contacts', {
      state: {
        heyya: 'olala',
      }
    } );
  }

  return (
    <Publicklayout>
        Home ...
      <button onClick={handleClick}>Contacts</button>
    </Publicklayout>
  )
}
