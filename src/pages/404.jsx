
import { Container } from 'react-bootstrap'; // if you're using react-bootstrap

export default function NotFound() {
  return (
    <Container
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h1>Page Under Construction</h1>
    </Container>
  );
}