import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./footer.css"

const Footer = () => {
    return (
        <Navbar className="footer">
            <Container>
                <Navbar.Brand href="">
                    <img
                    src="http://drive.google.com/uc?export=view&id=1gEkBJmoYFCPKEEjjxx7hKBg_73SqjMeD"
                    className="imgLogo"
                />
                </Navbar.Brand>
                
                <Navbar href="">
                    <img
                    src="http://drive.google.com/uc?export=view&id=19x7M7kkwZagyaQYOVpgrWW7_DtONdox3"
                    className="imgWine"
                />
                </Navbar>

                    <Navbar.Text>
                        <a href="https://www.youtube.com/shorts/96GnOB1iZQI" target='_blank' className='aSinDeco'><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/shorts/96GnOB1iZQI" target='_blank' className='aSinDeco'><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/shorts/96GnOB1iZQI" target='_blank' className='aSinDeco'><i className="fa-solid fa-envelope"></i></a>
                    </Navbar.Text>
               
            </Container>
        </Navbar>
    )
}

export default Footer