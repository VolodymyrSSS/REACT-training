import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{minHeight:"500px", minWidth:"600px"}}
      >
        <Card>
          <Card.Body>
            <Card.Text>
              Welcome to JWT HTTPOnly Cookie Auth Login example!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;