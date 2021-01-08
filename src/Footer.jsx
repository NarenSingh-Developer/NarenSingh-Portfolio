import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button, Container } from '@material-ui/core';

const Footer = () => {
    return (
        <>
            <section className="footer bg-primary text-light pt-5">
                <Container>
                    <h1 className="font-weight-bold text-light text-center mb-3">Naren Singh</h1>
                    <div className="d-flex justify-content-center align-items-start footerbtndiv">
                        <Button className=" bg-dark text-light mr-2  footerbtn" href="https://www.instagram.com/narensingh3090/"><InstagramIcon /> </Button>
                        <Button className=" bg-dark text-light mr-2 footerbtn" href="https://www.linkedin.com/in/naren-singh-9079071b7/"><LinkedInIcon /> </Button>
                        <Button className=" bg-dark text-light mr-2 footerbtn" href="mailto:naren510singh@gmail.com"><MailOutlinedIcon /> </Button>
                        <Button className=" bg-dark text-light footerbtn" href="tel:861-909-6648"><WhatsAppIcon /> </Button>
                    </div>

                    <p className="text-light text-center pt-5 m-0">Developed By<span className="font-weight-bold"> Naren Singh</span></p>
                    <p className="text-light text-center m-0">&#169; 2020 copyright all rights reserved</p>
                </Container>
            </section>
        </>
    )
}

export default Footer;
