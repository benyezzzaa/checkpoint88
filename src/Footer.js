import Card from 'react-bootstrap/Card';
import './css.css'

function Footer() {
  return (
    <Card className='footer'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Film is a journey through emotions, imagination, and storytelling.{' '}
          </p>
          <footer className="blockquote-footer">
          unknown <cite title="Source Title"></cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Footer;