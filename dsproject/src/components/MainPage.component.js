import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer,MDBCarousel, MDBCardImage,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask} from "mdbreact";

import "../index.css";

import slide_2 from "./images/train.png";
import slide_3 from "./images/train3.jpg";
import slide_1 from "./images/train1.jpg";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";


class MainPage extends React.Component {
    render() {

        return(

            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    src={slide_2}
                                    alt=""
                                    className="img-fluid"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    src={slide_1}
                                    alt=""
                                    className="img-fluid"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    src={slide_3}
                                    alt=""
                                    className="img-fluid"                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>


                <MDBRow className="mb-4">
                    <MDBCol sm="6">
                        <MDBCard style={{  marginTop: "10rem" }}>
                            <MDBCardBody>
                                <MDBCardTitle>Railway Service in Srilanka</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada diam ut ultricies interdum. Proin eu justo quam. Quisque faucibus purus ut leo convallis sodales nec in leo. Mauris feugiat ligula velit, eu tempus ligula rutrum eu. Fusce mollis enim at tempus gravida. Vivamus diam sem, ultricies id molestie et, pulvinar sed odio. Pellentesque luctus ipsum ut bibendum congue. Mauris et bibendum nibh. Sed ex tortor, iaculis eget sodales sit amet, ultrices sit amet urna. Donec congue mi vel urna cursus convallis
                                </MDBCardText>
                                <MDBBtn color="primary" a href="https://kbykusmi.kusmitea.com/en/legendary-train-sri-lanka/">More Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol sm="6">
                        <MDBCard  style={{  marginTop: "10rem" }}>
                            <MDBCardBody  >
                                <MDBCardTitle>News About Railway</MDBCardTitle>
                                <MDBCardText>
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </MDBCardText>
                                <MDBBtn color="primary" a href="http://www.railway.gov.lk/web/">More Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>


                <MDBRow>
                    <MDBCol>
                        <MDBCard wide style={{  marginTop: "10rem" }}>
                            <MDBCardImage cascade className="img-fluid" src={image1} />
                            <MDBCardBody cascade>
                                <MDBCardTitle>Things To Do in Train</MDBCardTitle>
                                <MDBCardText>Nunc pulvinar dui ac ultrices rutrum. Etiam vitae eros et ante euismod pretium. Nunc porta egestas libero, et ornare urna ullamcorper vel. Suspendisse potenti. Vestibulum a mauris eget erat ornare accumsan. Sed pulvinar augue non mauris egestas consequat. </MDBCardText>
                                <MDBBtn href="#">More Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard narrow style={{  marginTop: "10rem" }}>
                            <MDBCardImage cascade className="img-fluid" src={image2} />
                            <MDBCardBody cascade>
                                <MDBCardTitle>Cafeteria</MDBCardTitle>
                                <MDBCardText> Sed aliquet semper ante, nec accumsan libero maximus ut. Maecenas volutpat sit amet leo sollicitudin viverra. Nullam eleifend id dolor a maximus.</MDBCardText>
                                <MDBBtn href="#">More Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard cascade style={{  marginTop: "10rem" }}>
                            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
                            <MDBCardBody cascade>
                                <MDBCardTitle>Employees</MDBCardTitle>
                                <MDBCardText>Sed vestibulum congue nunc, ac vestibulum lacus posuere ut. Pellentesque eu erat eget sapien tempus convallis egestas et neque. Aliquam suscipit nibh ut nulla sagittis feugiat. Ut vitae tortor eget tortor lacinia vehicula id vitae velit. </MDBCardText>
                                <MDBBtn href="#">More Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>




                <MDBCard className="card-body" color="blue" style={{ width: "100rem%", marginTop: "10rem" }} >
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">SriLanka Railway</h5>
                                <p>
                                    Mauris at ornare felis. Aliquam id justo eget nibh elementum vestibulum a non sapien. Aenean iaculis feugiat elit nec facilisis. Nam mollis felis turpis, eu dictum purus ullamcorper ac. Proin convallis quam non turpis mollis consectetur. Integer mattis euismod massa, at semper erat vulputate nec. Pellentesque dignissim ligula interdum semper pulvinar. Maecenas interdum felis et hendrerit cursus. Fusce mollis justo at mi luctus viverra. Curabitur fermentum orci lectus
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Links</h5>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="#">Carreers</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#">More Details</a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                        </MDBContainer>
                    </div>
                </MDBCard>

            </MDBContainer>

        );
    }

}
export default MainPage;