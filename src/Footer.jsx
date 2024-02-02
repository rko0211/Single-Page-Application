import { Container, Row, Col } from 'react-bootstrap';   // named import
function Footer() {

  return (
    <Container fluid className='bg-black mt-5 pt-3 pb-3 footerHeight'>
      {/* <Container fluid className='d-flex' > */}
      <Row className='text-white gap-4 d-flex justify-content-center '>
        {/* Row component is a flex box */}
        <Col className='d-flex flex-column align-items-center gap-2 cursor-pointer'>
          <span className='social-link'>Home</span>
          <span className='social-link'>Read More</span>
          <span className='social-link'>Whatsapp</span>
          <span className='social-link'>Website</span>
        </Col>
        <Col className='d-flex flex-column align-items-center gap-2'>
          <span className='social-link'>Facebook</span>
          <span className='social-link'>Twitter</span>
          <span className='social-link'>Whatsapp</span>
          <span className='social-link'>Website</span>
        </Col>

        <Col className='d-flex flex-column align-items-center gap-2'>
          <span className='social-link'>Facebook</span>
          <span className='social-link'>Twitter</span>
          <span className='social-link'>Whatsapp</span>
          <span className='social-link'>Website</span>
        </Col>
        <Col className='d-flex flex-column align-items-center gap-2'>
          <span className='social-link'>Facebook</span>
          <span className='social-link'>Twitter</span>
          <span className='social-link'>Whatsapp</span>
          <span className='social-link'>Website</span>
        </Col>
      </Row>
      {/* </Container> */}
      <div className="reserve">
        <p>&copy; {getFullyear()} LEARN TIME, Prakash Mondal</p>
        {/* If we use parenthesis with function name then the function execute immediately without ansy event */}
      </div>
    </Container>
  )

}
let getFullyear = () => {
  let date = new Date();
  return date.getFullYear();

}

export { Footer };