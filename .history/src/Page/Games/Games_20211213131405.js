import Helmet from 'react-helmet';
import { Link } from "react-router-dom"
import { Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../Components/Navbar/Navbar'

const Games = () => {





    return (
        <>
        <div>
            <Helmet>
            <title>ConquError | Games</title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>

        <section className="features section bg-light mt-5">
            <Container fluid="md" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

            <Row >
            <h1 className="text-center text-primary fw-bold">Welcome to Games Page</h1>                                   
                        <h4 className="text-center text-secondary"> Play to learn programming</h4>
            <Col  xs={6}>
            
                    <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                        <img className="w-64" src="../Assets/Online test-bro.png" alt="quiz" />
                        <h3>Quiz</h3>
                        <p>
                        Play the random quiz game that test your knowledge in basic computer programming.</p>
                        <Link to="/quiz" style={{ textDecoration: 'none' }} className="btn btn-primary  mt-4">Play</Link>
                    </div>
            </Col>
            
            <Col  xs={6}>
            
            <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <img className="w-32" src="../Assets/Choice-cuate.png" alt="think man" />
                <h3>Hangman</h3>
                <p>Try to test and figure out programming terms and languange, in a guessing game.</p>

            <Link to="/hangman" style={{ textDecoration: 'none' }} className="btn btn-primary">Play</Link>
            </div>
            
            </Col>

            </Row>
            </Container>
        </section>
    <a href="#top" className="scroll-top">
    <i className="fa fa-chevron-up"></i>
   </a>
    </>
    )
}

export default Games
