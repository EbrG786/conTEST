import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function BrandExample() {
  return (
    <>
      <Navbar style={{'backgroundColor':'#850E35'}} variant="dark">
        <Container>
          <Navbar.Brand><h1 style={{'color':'#FFF5E4'}}>conTEST ⚔️</h1></Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default BrandExample;