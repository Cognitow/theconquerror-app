import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import {  Modal, Button,  OverlayTrigger, Popover, Offcanvas, Alert, ProgressBar} from 'react-bootstrap';
import { getFirestore, collection, query, orderBy, startAfter, limit, getDocs, doc,setDoc, endBefore, limitToLast, where } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {Container,  Row,Col, Form, FormControl, ButtonGroup} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import {  Link, useHistory} from "react-router-dom"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function TopicList() {

         //declare firestore services
        const forumdb = getFirestore();
        const auth = getAuth();
        // Create a root reference
        const storage = getStorage();
        //get current logged-in user
        const currentUser = auth.currentUser;

        //used to route the user through various pages of the website
        const history = useHistory()
          
        //Ask Question Modal*
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

                     //errors are thrown here
    const [error, setError] = useState("")

        //New and popular*
        const [shows, setShows] = useState(false);
        const handleClosed = () => setShows(false);
        const handleShowed = () => setShows(true);

        //declare text input for new question
        const [question, setQuestion] = useState();
        const [description, setDesc] = useState();

        //declare area to throw list for forum
        const [topics, setDiscussion] = useState([]);
        const [lastpage, setLastPage] = useState([]);
        const [page, setPage] = useState(1);

        const [endLine, checkEnd] = useState(false);
        const [tagCheck, checkTag] = useState(false);
        
        const [tags, setTags] = useState();

        const [img, setImg] = useState("");
        const [fileupload, setFile] = useState([]);
        const [progbar, setProgress] = useState(0);

        const handleChange = (e) => {
        
          setTags(e.target.getAttribute("value"));
          
        };

        const handleChangeTag = (e) => {
        
          setTags(e.target.getAttribute("value"));

          if (tags === "Array") {

            const Arr = query(collection(forumdb, "topics"), where("tags", "==", tags));

            setRef(Arr)

            fetch();
            
          }
          else if (tags === "") {

          }

          else {

          }
         
        };

      

        const q = collection(forumdb, "topics");

        const [collRef, setRef] = useState(q);

        const first = query(collRef, orderBy("created_at","desc"), limit(5));
            
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            addNew();
            event.preventDefault();
         }
        setValidated(true);
        event.preventDefault();
        };

            // Query the first page of docs
            async function fetch(){
              //query data
             try{
              const documentSnapshots = await getDocs(first);
             
              //Pagination

            //throw data to useState
           const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
           setDiscussion(map);

           // Get the last visible document
           setLastPage(documentSnapshots.docs[documentSnapshots.docs.length-1]) ;
               

             }
             catch(error){
            alert(error.message)
            };
          
              
          }

            
            // Construct a new query starting at the last visible document,
            // get the next set of data
           async function getMore(){

              if (topics.length === 0){
                    
              checkEnd(true);

              } else{
                try {          
                  const next =
                  query(collRef,
                  orderBy("created_at","desc"),
                  startAfter(lastpage),
                  limit(5));
    
                  const nextDocs =  await getDocs(next)
                    const map =  nextDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
                    setDiscussion(map);
                    
                   
                      setLastPage(nextDocs.docs[nextDocs.docs.length-1]);
                   
                    

                    setPage(page + 1)

                    checkEnd(false);
           
              }
              catch (error) {
                alert(error.message)
              }
              }
             
            }
            
            async function goBack(){

              try {          
                const back =
                query(collRef,
                orderBy("created_at","desc"),
                endBefore(lastpage),
                limitToLast(5));
  
                const prevDocs =  await getDocs(back)
                  const map =  prevDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
                  setDiscussion(map);
                  
                  setLastPage(prevDocs.docs[prevDocs.docs.length-1]);

                  setPage(page - 1)
              
         
            }
            catch (error) {
              alert(error.message)
            }

            }


          

        useEffect(
          () => {
           
         
         fetch();

          
          },[]); // eslint-disable-line react-hooks/exhaustive-deps

      
     
          const changeHandler = (event) => {

            setFile(event.target.files[0]);
        
          }

          function insertCode(){
              // Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};


const storageRef = ref(storage, 'Forum/' + question);
const uploadTask = uploadBytesResumable(storageRef, fileupload, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   setProgress(progress);
    switch (snapshot.state) {
     case 'paused':
        setError('Upload is paused');
        break;
    case 'running':
        setError('Upload is running');
        break;
        default:
          // 
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;

        
        default:
          // 
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImg(downloadURL);
      setProgress(0)
      setError("File Upload Complete")
    });
  }
);
          }
        
        //Function that adds a new question in the forum
      async function addNew(){
        setError("")
          //If there is no user logged-in, returns the user to Login page to continue
          if (currentUser === null)
          {
            if (window.confirm('You need to be logged-in to continue, Press Yes to Proceed on our Log-in Page')) {
              // Save it!
             history.push("/login")
            } else {
              setQuestion("");
              setDesc("");
              
            }
          }
          else {

    
                if (tagCheck === true) {

                  //if user is logged-in
                
                // Add a new document with a generated id
        const newQuestion = doc(collection(forumdb, "topics"));
  
        //convert date which is timestamp to String
        var timestamp = Date.now();
        var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        
       
          // then create the array with the data to be set inside firestore in collection "topics"
        var data = {
  
          title: question,
          desc: description,
          created_by: currentUser.email,
          userid: currentUser.uid,
          created_at: convertedDate,
          tags: tags,
          sampcodeimg: img
        }
         //puts the document inside the collection "topics" in firestore
        
         await setDoc(newQuestion, data).then(() => { 
  
          setError("")
       
  
        }).catch((error) =>{
          setError(error.message)
        }).finally(() => {
          setImg("")
          setDesc("");
          setQuestion("");
          setError("")
        })
   
  
              }
              else {
                  setError("Select a Tag")
              }
              


              }
          }
          
          //this is used to fetch the data from Discussion on Topics.MAP on the forum list
        const handler = function(e){
        
         localStorage.setItem('threadID',e.target.getAttribute("data-id"));
         
          history.push("/Thread")
          
      };

      const Discussion= topics.map((topic) => (  <div className="Discussion-Board p-3 m-2 border border-primary rounded" key={topic.id} > <p>Uploaded by: <strong>{topic.created_by}</strong> on <strong>
      {topic.created_at}</strong></p>  <div className="heading"><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} <br></br><strong>Tags:</strong>{topic.tags} </li></ul></div></div> ))
    

    //For Popup Notice
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Notice!</Popover.Header>
    <Popover.Body>
      This feature is <strong>under development</strong> stage. Please be patient.
    </Popover.Body>
  </Popover>
);



 

    return (
        <div>
               {/* Division for Tab Name and Description*/}
            <div>
                <Helmet>
                  <title>ConquError | All Topics </title>
                  <meta name="description" content="ConquError Forum" />
                </Helmet>
              </div>

            <Navbar/>

          

             <div style={{marginTop:'6rem'}}>
            {/* Container for Search and Ask Question*/}
              <Container>
              <Row>
                   
                <Col>
               
              <Link to="/forum" style={{ textDecoration: 'none', marginLeft:'3px' }} className="btn btn-primary mb-4">Back</Link>
            
             </Col>
                <Col md="auto">
                <Form className="d-flex mt-4">
                <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="btn btn-primary">Search</Button>
              </OverlayTrigger>
            </Form>
                </Col>
                <Col xs lg="2">
                  <div className="NoUserMenu mt-4 ml-5">
                    <Button variant="primary" onClick={handleShow} className="mb-2"> ASK A QUESTION</Button> 
                  </div>
                </Col>
              </Row>
              </Container>

            
            {/* Division for Discussion Board*/}

              <div>
                  <Container className="text-center mt-5 mb-5">
                    <div>
                        <h1 className="text-center text-primary fw-bold mb-4">ConquErroRoom</h1>
                            <div className="text-start">
                              <h3 className="fw-bold fs-m text-start container mb-3"><GoIcons.GoCommentDiscussion/> All Topics </h3>

                                <Button variant="outline-primary" onClick={handleShowed}><BsIcons.BsTags/> Tags</Button>

                                <Offcanvas show={shows} onHide={handleClosed}>
                                  
                                  <Offcanvas.Header closeButton>
                                    <Offcanvas.Title><MdIcons.MdOutlineTipsAndUpdates/> Latest Updates</Offcanvas.Title>
                                  </Offcanvas.Header>

                                  <Offcanvas.Body>
                                  A tag is a term or label that associates your question with other, comparable queries. Using the appropriate tags makes it simpler for others to discover and answer your question.
                                  <br/><br/>
                                  Please note that tags are important for the forum to work properly!
                            
                                  <Container>
                      <Row>
                        <Col xs={{ order: 'last' }}>
                        <div className="form-check">
                        <input type="radio" id="Array" name="Programming" value="Array" className="form-check-input" onChange={handleChangeTag}/>
                        <label for="Array" className="form-check-label">Array</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="C++" name="Programming" value="C++"  className="form-check-input" onChange={handleChangeTag}/>
                            <label for="C" className="form-check-label">C++</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="CodeBlocks" name="Programming" value="CodeBlocks" className="form-check-input" onChange={handleChangeTag}/>
                            <label for="CodeBlocks" className="form-check-label">CodeBlocks</label>
                        </div>
                        </Col>

                        <Col xs={{ order: 'first' }}>
                        <div className="form-check">
                        <input type="radio" id="Function" name="Programming" value="Function" className="form-check-input" onChange={handleChangeTag}/>
                        <label for="Function" className="form-check-label">Function</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="Nested Condition" name="Programming" value="Nested Condition"  className="form-check-input" onChange={handleChangeTag}/>
                            <label for="Nested Condition" className="form-check-label">Nested Condition</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="For loops" name="Programming" value="For loops" className="form-check-input" onChange={handleChangeTag}/>
                            <label for="For loops" className="form-check-label">For loops</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="Syntaxes" name="Programming" value="Syntaxes" className="form-check-input" onChange={handleChangeTag}/>
                            <label for="Syntaxes" className="form-check-label">Syntaxes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="If Else Condition" name="Programming" value="If Else Condition" className="form-check-input" onChange={handleChangeTag}/>
                            <label for="If Else Condition" className="form-check-label">If Else Condition</label>
                        </div>
                        </Col>
                      </Row>
                    </Container>
                                
                                  </Offcanvas.Body>
                                </Offcanvas>
  
                              { endLine && <h1>End of the line Warrior.</h1>  }
                            
                              {Discussion} 
                            </div>
                            <ButtonGroup>
              {
                  //show previous button only when we have data
                  page === 1 ? '' : 
                  <Button onClick={() => goBack() }>Previous</Button>
              }

              {
                  //show next button only when we have data
                  topics.length < 5 ? '' :
                  <Button onClick={() => getMore()}>Next</Button>
              }
              </ButtonGroup>
                  <div className="position-end">            
                  </div>
            
                        </div>
                  </Container>
              </div>

            </div>

   

              {/* Modal for Ask Question*/}
              <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                  <Modal.Title>ASK A QUESTION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}   className="">

                                  <Form.Group id="Question" className="mb-3">
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control value={question || ''} onChange={e => setQuestion(e.target.value)} name = "text" type="text" required  placeholder="Title"/>
                                  </Form.Group>
                                  <Form.Group id="desc" className="mb-3">
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control as="textarea" value={description || ''} onChange={e => setDesc(e.target.value)} name = "text" type="text" required  placeholder="Description"/>
                                  </Form.Group>
                    <strong>Upload a picture of your code here! (Optional)</strong>

                 
                    <input type="file" className="form-control  mt-3 mb-3" id="file-input" name="samplecodeimg" accept="image/jpeg" onChange={changeHandler}/> 
                    
                    <Button variant="primary" onClick={insertCode}>Upload File</Button>

                    <p className="mt-2">Upload Progress</p> 
                    <ProgressBar animated now={progbar} className="progress"/>
                    <p className="mt-2 fw-bold">Add a Tag</p>

                    <Container>
                      <Row>
                        <Col xs={{ order: 'last' }}>
                        <div className="form-check">
                        <input type="radio" id="Array" name="Programming" value="Array" className="form-check-input" onChange={handleChange}/>
                        <label for="Array" className="form-check-label">Array</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="C++" name="Programming" value="C++"  className="form-check-input" onChange={handleChange}/>
                            <label for="C" className="form-check-label">C++</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="CodeBlocks" name="Programming" value="CodeBlocks" className="form-check-input" onChange={handleChange}/>
                            <label for="CodeBlocks" className="form-check-label">CodeBlocks</label>
                        </div>
                        </Col>

                        <Col xs={{ order: 'first' }}>
                        <div className="form-check">
                        <input type="radio" id="Function" name="Programming" value="Function" className="form-check-input" onChange={handleChange}/>
                        <label for="Function" className="form-check-label">Function</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="Nested Condition" name="Programming" value="Nested Condition"  className="form-check-input" onChange={handleChange}/>
                            <label for="Nested Condition" className="form-check-label">Nested Condition</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="For loops" name="Programming" value="For loops" className="form-check-input" onChange={handleChange}/>
                            <label for="For loops" className="form-check-label">For loops</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="Syntaxes" name="Programming" value="Syntaxes" className="form-check-input" onChange={handleChange}/>
                            <label for="Syntaxes" className="form-check-label">Syntaxes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="If Else Condition" name="Programming" value="If Else Condition" className="form-check-input" onChange={handleChange}/>
                            <label for="If Else Condition" className="form-check-label">If Else Condition</label>
                        </div>
                        </Col>
                      </Row>
                    </Container>

                    <Button variant="primary" type="submit" >Post</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
               
                </Modal.Footer>
                </Modal>
              

            <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
                </a>
        </div>
    )
}
