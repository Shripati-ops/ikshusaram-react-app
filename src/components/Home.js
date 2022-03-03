import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Row,Container,Col,Form} from 'react-bootstrap';
const Home = ()=>{
    return(<div className = "Home">
    <Container fluid style = {{backgroundColor:"#320101"}}>
      <Row>
         <Col><img src = "assets/images/Thiruvadis_bg 1.png"></img> </Col>
      </Row>

      <Row>
            <Col> <img src = "assets/images/Ellipse 4.png"></img> </Col>

            <Col style = {{color:"#FFFFFF"}}> 
                  <Col><p>śrīmate rāmānujāya namaḥ<br/>śrīmate nigamāntamahādeśikāya namaḥ</p></Col>
                  
                  <Col>
                  
                        <h1 style = {{color:"#FDE65A",fontFamily:"Ribeye"}}> Ikshusaram </h1>
                  
                  </Col> 

                  <Col>
                          <p>sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja <br/>
                           ahaṁ tvā sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ</p>
                  </Col>
                                    
            </Col>

            <Col> <img src = "assets/images/Ellipse 5.png"></img> </Col>
      </Row>
    </Container>
    </div>);
    
}
export default Home;