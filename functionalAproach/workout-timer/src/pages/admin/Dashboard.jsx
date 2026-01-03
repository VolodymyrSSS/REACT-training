import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h3>This is dashboard for admin only</h3>
      <p>Here is you ID: {params.userId}</p>
    </div>
  )
}
