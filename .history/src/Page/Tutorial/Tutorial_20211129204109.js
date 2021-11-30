import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col, Card, Tab, Tabs } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import './frame.css'

class Tutorial extends Component {
    
    render(){
        return (
        <>
                <div>
                    <Helmet>
                        <title>ConquError | Tutorial</title>
                        <meta name="description" content="ConquError Register page" />
                    </Helmet>
                </div> 

                <Navbar/>
                
                <section className="features section bg-light mt-4">

                    
                        <div>
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorial Page</h1>                                   
                            </div>  
                        </div>
                         <Container className="mb-5" fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
  
                                <section className="about_area section_gap">
                                        <div className="container">
                                            <div className="row justify-content-start align-items-center">
                                                <div className="col-lg-5">
                                                    <div className="about_img">
                                                        <img className="" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Annie Spratt unsplash.com/photos/MChSQHxGZrQ"/>
                                                    </div>
                                                </div>

                                                <div className="offset-lg-1 col-lg-5">
                                                    <div className="main_title text-left">
                                                        <h2>let’s <br/>
                                                            Learn and study  <br/>
                                                            together</h2>
                                                        <p>
                                                            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
                                                            midst their. Beast creepeth. Fish days.
                                                        </p>
                                                        <p>
                                                            Is give may shall likeness made yielding spirit a itself together created after sea 
                                                            is in beast beginning signs open god you're gathering whose gathered cattle let. 
                                                            Creature whales fruit unto meat the life beginning all in under give two.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </section>
                            </Container>

                            <section className="features section bg-light mt-5">
                                <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Row>
                                        <div className="">
                                            <h1 className="text-center text-primary fw-bold">Some featured Content Creator</h1>
                                        </div>
                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                <div style={{textAlign:"center"}}>
                                                                    <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/236064912_102650292134240_4791421894203825811_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXX-bmMCRJl9vXOi84gaWc9Js6cocCjdX0mzpyhwKN1cCgkTxcJBDEakrRzC8__Z1JSXzm2k4Iql9jtESPeRII&_nc_ohc=nXncSmiIFW4AX_auEd5&tn=x6lGwkBQsiZD79dw&_nc_ht=scontent.fmnl13-1.fna&oh=5e70b76fc0a3a983fc2a8346628fc231&oe=61A961B9" />
                                                                </div>
                                                                <Card.Body>
                                                                <Card.Title>Programming</Card.Title>
                                                                <Card.Text>
                                                                    Beginner Friendly,<strong> 7</strong> Lessons
                                                                </Card.Text>
                                                                
                                                                </Card.Body>
                                                            </Card>        
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/162108690_121301806677028_8488807075884298821_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXydTM3EZ07XqXpezsDpNyw2d9yKe4opDDZ33Ip7iikJ4Mb5hSfrbJs4divK0bsoW4pLl_zqUldxKd-fXV-F1K&_nc_ohc=Deflbtpo54QAX8UoF5R&_nc_ht=scontent.fmnl13-2.fna&oh=8a34d0b958665e1297e6c9b006a9a9e7&oe=61CBC2F9" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Kuya Dev</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/142506784_713464262646294_432244117709991327_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGeJIr6YAHBkJVN1REpNuyKfmbCiC-RHNd-ZsKIL5Ec1x0eIwb-6YsugASGlD0Lohs12fTmpjR57jQbyFmsg-Ec&_nc_ohc=K0v9hfTWhnwAX9bksAx&_nc_ht=scontent.fmnl13-1.fna&oh=e43eefff956661b3f23b3860b3a31284&oe=61C89275" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Computing</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/149870072_4438803116146821_814614453010169425_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7kx9PgpLqkIGIHWFawVBjeeLqseLHov554uqx4sei_hqzZSt_ndDnrRlWKaRH4bXcCit_bVVCti5grm96mMQ-&_nc_ohc=vqBDbHbLINoAX_U1AAY&_nc_ht=scontent.fmnl13-2.fna&oh=ec0d5505a0c0e7c2d6effe778f78bd15&oe=61CB7CFA" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Computing</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/244521475_188997610021976_6826356423632131771_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHY6X33_1c8qR3rGB9K-xajuqGhOczd4MG6oaE5zN3gwVfvPdHaakhViWXQISdNPt2yq_9TelEUGbmYGFUsZ-VG&_nc_ohc=TD0fcZsq4BUAX-1uX-1&tn=x6lGwkBQsiZD79dw&_nc_ht=scontent.fmnl13-2.fna&oh=a8c3aa4bdf255ab445d8260f91a05881&oe=61A92910" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Josiahdoestech</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>
                                    </Row>
                                </Container>
                                
                                <Card className="mt-5">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3">
                    <Tab eventKey="profile" title="Overview" className=" mb-5 p-3">
                    
                      <Row>
                      <Col xs={6} md={4}>
                          <Card style={{ width: '18rem' }} className="container mb-4">
                                <div style={{textAlign:"center"}}>
                                  <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png" />
                                </div>
                              <Card.Body>
                                <Card.Title>My level: <strong>-</strong></Card.Title>
                                  <Card.Text>Your journey has just begun.</Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col xs={12} md={8}>
                        <p className="mt-2 text-justify">
                          Hello Warrior, we know you’re new to computer programming, and you want to be ready and prepared to the upcoming battle.  This Course is design to help you and boost your knowledge in basic and fundamentals of C++ programming. 
                        </p>
                        
                        <Row xs="auto">
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcReading/> 7 Lessons</Button></Col>
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcQuestions/> 7 Assessment</Button></Col>
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcClock/> 21 Hours</Button></Col>
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcVideoCall/> 7 Tutorials</Button></Col>
                        </Row>
                  
                      </Col>

                      </Row>
                        
                        <strong>Why start in this course?</strong>
                        <p>
                          According to Guru99, C++ is a general-purpose, object-oriented programming language. It was created by Bjarne Stroustrup at Bell Labs circa 1980. C++ is very similar to C (invented by Dennis Ritchie in the early 1970s). C++ is so compatible with C that it will probably compile over 99% of C programs without changing a line of source code. Though C++ is a lot of well-structured and safer language than C as its OOPs based.
                        </p>
                        <p>
                          Some computer languages are written for a specific purpose. Like, Java was initially devised to control toasters and some other electronics. C was developed for programming OS. Pascal was conceptualized to teach proper programming techniques. But C++ is a general-purpose language. It well deserves the widely acknowledged nickname “Swiss Pocket Knife of Languages.”
                        </p>

                        <strong>Course Path</strong>
                        <p>
                        The course path is composed of 7 lessons and good for 21hrs, you can learn everything from basics and fundamentals as well as watch video tutorial and programming demo from us ConquError team.
                        </p>
                        <p>
                          This practical C++ course will provide you with everything you need to get started. Then you'll be able to utilize this C++ foundation to learn and work in a variety of fields:
                        </p>
                        <ul>
                          <li>•	Operating system</li>
                          <li>•	Desktop Application</li>
                          <li>•	Video games</li>
                          <li>•	Artificial Intelligence</li>
                          <li>•	Arduino Application</li>
                        </ul>
                        <strong>How do I conquer my  error?</strong>
                        <ul>
                          <li>•	Simple and Practical: I show you exactly what you need to know to perform meaningful things using C++. This entails concentrating on what may provide you with the most benefit right now.</li>
                          <li>•	Step by step: each lesson under computer programming course is divided to its sub-content and it will help you to understand piece by piece so you can adjust and motivated to go further.</li>
                          <li>•	Tutorial: we add tutorial video to help you to visualize and have an idea on how programs created, and variables use in the programming.</li>
                        </ul>
                        <p>I show you exactly what you need to know to perform meaningful things using C++. This entails concentrating on what may provide you with the most benefit right now.</p>
                        <br/>
                        
                    </Tab>

                    <Tab eventKey="home" title="Mechanics">

                    <Container>
                      <h1 className="fw-bold text-primary mb-2">Learn to Code and Conquer your error!</h1>
                      <h3 className="text-justify fw-bold">What’s your goal?</h3>
                    </Container>
                    
                      <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Row>
                          <Col>
                            <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                  <div style={{textAlign:"center"}}>
                                    <Card.Img variant="top" className="mt-2 w-50" src="https://img.icons8.com/color/720/000000/adventures--v3.png" />
                                  </div>
                                <Card.Body>
                                  <Card.Title><strong>Explore Course </strong></Card.Title>
                                    <Card.Text>Begin your journey and explore the world of computer programming.</Card.Text>
                                </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                            <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                  <div style={{textAlign:"center"}}>
                                    <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/1535/1535019.png" />
                                  </div>
                                <Card.Body>
                                  <Card.Title><strong>Gain Skill </strong></Card.Title>
                                    <Card.Text className="text-justify">Focus your mind on what's needed to improve. The wind will be your guide.</Card.Text>
                                </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                            <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                  <div style={{textAlign:"center"}}>
                                    <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/2906/2906496.png" />
                                  </div>
                                <Card.Body>
                                  <Card.Title><strong>Learn the Language</strong></Card.Title>
                                    <Card.Text>Be part of the nature, widen your knowledge by learning the language.</Card.Text>
                                </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                      <Container>
                        <h3>My Course Timeline</h3>
                        <section id="cd-timeline" className="cd-container rounded">
                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-picture">
                            </div>

                            <div className="cd-timeline-content">
                              <h2>Programming Concepts</h2>
                              <div class="timeline-content-info">
                                <span className="timeline-content-info-title">
                                  <i className="fa fa-certificate" aria-hidden="true"></i>
                                  Start Here!
                                </span>
                              
                              </div>
                              <p>Begin your journey by exploring the basic fundamentals of computer programming course.</p>
                              <ul className="content-skills">
                              <li>Variables</li>
                              <li>Conditions</li>
                              <li>Introductions</li>
                              <li>Fundamentals</li>
                              <li>Core</li>
                              </ul>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-movie">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Basic Programming Structures</h2>
                              <p>Programming structures defines the set of fundamentals that needs to be learned first to be able to understand the programming environment and create a well construct algorithm.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-picture">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Conditional Structures</h2>
                              <p>Conditional structures are computer programming that allows developer to set a conditional flow to a program using a set of conditions like if, if else, nested if, while and do while.Conditional structures are computer programming that allows developer to set a conditional flow to a program using a set of conditions like if, if else, nested if, while and do while.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-location">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Nested Condition</h2>
                              <p>A nested condition is the use of a condition in a condition. This way you can create a cascade of conditions: a certain paragraph will be displayed only if a certain condition is true.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-location">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Looping Constructs</h2>
                              <p>In programming Looping constructors is useful to determine the program directions and assess the conditions created, it is being done using a for loop, and do while loop.</p>
                            </div>
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-movie">
                            </div>

                            <div className="cd-timeline-content">
                              <h2>Functions</h2>
                              <p>Functions allow to structure programs in segments of code to perform individual tasks. In C++, a function is a group of statements that is given a name, and which can be called from some point of the program.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-movie">
                            </div>

                            <div className="cd-timeline-content">
                              <h2>Arrays</h2>
                              <p>Array is a form of solutions that allows the program to have a sequence and orderly arrange execution and results base on the conditions in the array form.</p>
                            </div> 
                          </div> 
                        </section> 
                      </Container>
                      <Container className="mb-5">
                        
                      </Container>

                    </Tab>
                  </Tabs>
                </Card>

                                {/* Kuya Dev */}
                                <Container className="mt-5" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Card>
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="home" title="Kuya Dev">
                                                <Row>
                                                    <Col  className="text-center">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/162108690_121301806677028_8488807075884298821_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXydTM3EZ07XqXpezsDpNyw2d9yKe4opDDZ33Ip7iikJ4Mb5hSfrbJs4divK0bsoW4pLl_zqUldxKd-fXV-F1K&_nc_ohc=Deflbtpo54QAX8UoF5R&_nc_ht=scontent.fmnl13-2.fna&oh=8a34d0b958665e1297e6c9b006a9a9e7&oe=61CBC2F9" />
                                                            <div className="text-center">
                                                                <p><strong>Kuya Dev</strong></p>
                                                                <p>Ako si Rem, ang inyong Kuya Dev.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                            <strong>Rem Lampa</strong> is Kuya Dev. He is a podcaster, web developer, speaker, and tech community leader.
                                                        <br/>
                                                        Formerly an electrical engineer, he is currently a Senior JS Engineer at Prosple, specialized in ReactJS and ExpressJS.
                                                        <br/>
                                                        He is also a co-founder and community manager of freeCodeCamp.Manila, and part of the core team of ReactJS Philippines.
                                                        <br/>
                                                        * <i className="fw-bold">"Kuya"</i> means "older brother" in Filipino, often used as a term of endearment.
                                                        </p>
                                                        <label className="fw-bold">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                        <a href="https://www.facebook.com/Rem.Lampa" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://twitter.com/RemLampa?fbclid=IwAR2vIoBPC5VwfDY7mOQIpmA3thzEcxh7jV0gMMDtakCCjEfMTuV5Ogtg1Ps" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/twitter--v2.png"  alt="twitter"/></a>
                                                        <a href="https://www.youtube.com/RemLampa" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://open.spotify.com/show/1w3LK7ABhxOcv5uHppyE0Z?fbclid=IwAR2QNWUbj4MdY70Fcaf-GHt8FzctPYebLmKayxinJ0q_Tv5jigp23S5Eus8" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/spotify--v3.png"  alt="spotify"/></a>
                                                        <a href="https://github.com/RemLampa?fbclid=IwAR0l8U3KlN39PEYtg9aNgTMPu2E6C7823GEy85RXg6oAe6WwvGS8ce5F_Js" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/github.png"  alt="github"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="profile" title="Videos">
                                                <Container>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Title>Videos</Card.Title>
                                                                   <div
                                                          className="video"
                                                          style={{
                                                            position: "relative",
                                                            paddingBottom: "56.25%" /* 16:9 */,
                                                            paddingTop: 25,
                                                            height: 0
                                                          }}
                                                          >
                                                          <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/vwzlg-wSDH0" frameBorder="0" title="vid"/>
                                                            </div>
                                                            <Container>
                                                            <Row>
                                                                <Col sm={8}>sm=8</Col>
                                                                <Col sm={4}>sm=4</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col sm>sm=true</Col>
                                                                <Col sm>sm=true</Col>
                                                                <Col sm>sm=true</Col>
                                                            </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                </Container>
                                            </Tab>
                                        </Tabs>
                                    </Card>
                                </Container>

                                {/* Josiahdoestech */}
                                <Container className="mt-5" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Card>
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="home" title="Home">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1a6f7601a64720099b1b96db9a2fb697~c5_720x720.jpeg?x-expires=1638273600&x-signature=f%2FFv3EVOkbeuE%2FjQxmbf0N0TgHc%3D" />
                                                            <div className="text-center">
                                                                <p><strong>Josiahdoestech</strong></p>
                                                                <p>Tech reviews, Tech gadgets, Sharing my knowledge about me and what I love doing, Also Gaming.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>Josiah Mark Castor</strong>, Hello everyone Josiah here! I am a BSIT student who loves to create content about Tech, gadgets, Programming, Tips and hacks to help you in your computer needs!

                                                        If you wish to contact me and have a collaboration, please do not hesitate!</p>
                                                        <label className="fw-bold">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                        <a href="https://www.facebook.com/josiahmcastor.tech917" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://josiahdoestech.kleap.co/home/?fbclid=IwAR3YyLyips7MhQjsge_C1iiJkkuwkfD2Zmf9R0YI2o0gjEwcpcNl8Llhri0" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/Josiahdoestech" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@josiahmark917?fbclid=IwAR2DinC5FXHESwWxxA5JH0Zg1eMiZOs5Y668dpBmkNBouKCZIJ9EsxjMvjA"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                        <a href="https://www.instagram.com/josiahmark917/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/instagram-new.png"  alt="github"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="profile" title="Profile">
                                                days
                                            </Tab>
                                        </Tabs>
                                    </Card>
                                </Container>

                                {/* SDPTSolutions */}
                                <Container className="mt-5" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Card>
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="home" title="Home">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/67075956_367757150550342_7302374547087425536_n.png?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGIy2M7vE3kr9wePBdcEsF6dm7StMdbxvl2btK0x1vG-VeiW0kfQVzJU0uBaipps8B3_0AJUh1c2cEALcyJnypU&_nc_ohc=cRkkFu__j3gAX80EN_y&_nc_ht=scontent.fmnl13-2.fna&oh=358a487954c95254a20d58e9ff624248&oe=61CC50BD" />
                                                            <div className="text-center">
                                                                <p><strong>Josiahdoestech</strong></p>
                                                                <p>Tech reviews, Tech gadgets, Sharing my knowledge about me and what I love doing, Also Gaming.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>Josiah Mark Castor</strong>, Hello everyone Josiah here! I am a BSIT student who loves to create content about Tech, gadgets, Programming, Tips and hacks to help you in your computer needs!

                                                        If you wish to contact me and have a collaboration, please do not hesitate!</p>
                                                        <label className="fw-bold">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                        <a href="https://www.facebook.com/josiahmcastor.tech917" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://josiahdoestech.kleap.co/home/?fbclid=IwAR3YyLyips7MhQjsge_C1iiJkkuwkfD2Zmf9R0YI2o0gjEwcpcNl8Llhri0" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/Josiahdoestech" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@josiahmark917?fbclid=IwAR2DinC5FXHESwWxxA5JH0Zg1eMiZOs5Y668dpBmkNBouKCZIJ9EsxjMvjA"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                        <a href="https://www.instagram.com/josiahmark917/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/instagram-new.png"  alt="github"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="profile" title="Profile">
                                                days
                                            </Tab>
                                        </Tabs>
                                    </Card>
                                </Container>


                            </section>

                          
            </section>            
                                
        </>
    )
    }
    
}

export default Tutorial