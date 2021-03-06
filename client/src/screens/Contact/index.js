import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TopNavBar from '../../components/TopNavbar';
import StyledFooter from '../../components/StyledFooter';
import FormField from '../../components/FormField';
import { device } from '../../_utils/devices'
import './ContactStyles.css';

import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube } from 'react-icons/fa'


const ContactContentWrapper = styled.div`
  height: auto;
  width: inherit;
  display: flex;
  flex-direction: row;

  @media ${device.laptop}, @media ${device.desktop}{
    flex-direction: row;
  }
  @media ${device.mobileS} , @media ${device.mobileM}, @media ${device.mobileL}{
    flex-direction: column;
  }
`;


const ContactFormContainer = styled.div`
    display: flex;
    flex: 1;

    @media ${device.laptop}, @media ${device.tablet} {

    }
    @media ${device.mobileS} {

    }
`;

const socialIcon = ( icon, size ) => {

    let iconColor = size === 'small' ? 'green' : 'white';
    let iconSize = size === 'small' ? 15 : 30;

    return (
        <div className='icon-container' style={{
                    width: size === 'small' && '25px',
                    height: size === 'small' && '25px',
                    marginRight: size === 'small' && '2px',
                    padding: size === 'small' && '1px',
                    backgroundColor: size === 'small' && 'white',
                    borderRadius: size === 'small' && '20px',
                    marginTop: size === 'small' && '10px',
                   }}>
            {icon === 'facebook' && (<Link to='/cart'>
                    <FaFacebookF size={iconSize} color={iconColor}/>
            </Link>)}
            {icon === 'twitter' && (<Link to='/cart'>
                    <FaTwitter size={iconSize} color={iconColor}/>
            </Link>)}
            {icon === 'whatsapp' && (<Link to='/cart'>
                    <FaWhatsapp size={iconSize} color={iconColor}/>
            </Link>)}
            {icon === 'linkedin' && (<Link to='/cart'>
                    <FaLinkedinIn size={iconSize} color={iconColor}/>
            </Link>)}
            {icon === 'youtube' && (<Link to='/cart'>
                    <FaYoutube size={iconSize} color={iconColor}/>
            </Link>)}
        </div>
    )
}

export const socialMediaListing = (size) => {
    return (
        <div className='social-links-container'>
            {socialIcon('facebook', size)}
            {socialIcon('twitter', size )}
            {socialIcon('whatsapp', size )}
            {socialIcon('linkedin', size )}
            {socialIcon('youtube', size )}
        </div>
    )
}
export default () => {
    return (
        <>
            <TopNavBar />
            <div className='contact-container'>
                <div className='contact-title-container'>
                    <h1>Contact Us</h1>
                    <h2>Contact Us</h2>
                </div>
                <ContactContentWrapper>
                    <div className='contact-details'>
                        <div className='detail'>
                            <h2>Address</h2>
                            <p>Plot 21, Yusuf Lule Road</p>
                            <p>Kampala-Uganda</p>
                            <p>P.O.Box 11513</p>
                        </div>
                        <div className='detail'>
                            <h2>Business Hours</h2>
                            <p>Monday-Friday: 8am to 6pm</p>
                            <p>Saturday: 9am to 2pm</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className='detail'>
                            <h2>Email</h2>
                            <p className='subtitle'>willibookslimited@gmail.com</p>
                        </div>
                        <div className='detail'>
                            <h2>Phone</h2>
                            <p className='subtitle'>+256 200 995 993/4/5</p>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <form method='post'>
                            <FormField nameValue='name' placeholder='Enter Name'/>
                            <FormField nameValue='emailAddress' placeholder='Enter Email'/>
                            <FormField nameValue='subject' placeholder='Enter Subject'/>
                            <FormField type='textarea' nameValue='message' placeholder='Enter Message'/>
                            <div className='form-buttons-container'>
                                <FormField type='button' nameValue='submit' color='green' value='Submit' submit/>
                                <FormField type='button' nameValue='reset' color='#666' value='Reset'/>
                            </div>
                        </form>
                    </div>
                </ContactContentWrapper>
            </div>
            <StyledFooter />
        </>
    )
}
