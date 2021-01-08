import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import img3 from "./images/undraw_buffer_wq43.svg";
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CardImage1 from "./images/Insta.png";
import CardImage2 from "./images/Linkedin.png";
import CardImage3 from "./images/Gmail.png";
import CardImage4 from "./images/WhatsApp.jpg";
import Cards from "./Cards";

const Contact = () => {
  return (
    <>
      <section className="Contact pt-sm-5 mb-5" id="contact">
        <Container>
          <h2 className="text-center my-5">Contact</h2>
          <Row className=" col mr-0 ml-0">
            <Col lg="6" md="12" className="mt-2">
              <Row>
                <Col lg="6" md="6" sm="12" className="d-flex justify-content-center">
                  <Cards
                    CardImage={CardImage1}
                    textheading="Instagram"
                    textpara="Hello i am avalible on instagram contact me:)"
                    icon={<InstagramIcon />}
                    Link="https://www.instagram.com/narensingh3090/"
                    hrefLink="https://www.instagram.com/narensingh3090/"
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="d-flex justify-content-center">
                  <Cards
                    CardImage={CardImage2}
                    textheading="LinkedIn"
                    textpara="Hello i am avalible on LinkedIn contact me:)"
                    icon={<LinkedInIcon />}
                    Link="https://www.linkedin.com/in/naren-singh-9079071b7/"
                    hrefLink="https://www.linkedin.com/in/naren-singh-9079071b7/"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="12" className="d-flex justify-content-center">
                  <Cards
                    CardImage={CardImage3}
                    textheading="Gmail"
                    textpara="Hello i am avalible on Gmail contact me:)"
                    newpara="naren510singh@gmail.com"
                    icon={<MailOutlinedIcon />}
                    Link="mailto:naren510singh@gmail.com"
                    hrefLink="mailto:naren510singh@gmail.com"
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="d-flex justify-content-center">
                  <Cards
                    CardImage={CardImage4}
                    textheading="WhatsApp"
                    textpara="Hello i am avalible on WhatsApp contact me:)"
                    newpara="+91 8619096648"
                    icon={<WhatsAppIcon />}
                    Link="tel:861-909-6648"
                    hrefLink="tel:861-909-6648"
                  />
                </Col>
              </Row>
            </Col>

            <Col lg="6" md="12" className="d-flex justify-content-center mt-5">
              <img src={img3} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact;
