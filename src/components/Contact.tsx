import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "../components/contact.css";

export const ContactSection = () => {
    return <div className="container">
        {/* Location */}
        <div id="location-icon" className='text--contact contact-icon'>
            <LocationOnOutlinedIcon className="text--vertical-bottom" />
        </div>
        <h3 className='title--contact-heading contact-heading text-left'>Location</h3>
        <p className="text--contact contact-body text-left">North Carolina, USA</p>

        {/* Phone */}
        <div id="phone-icon" className='text--contact contact-icon'>
            <LocalPhoneOutlinedIcon className="text--vertical-bottom" />
        </div>
        <h3 className='title--contact-heading contact-heading'>Phone</h3>
        <a className="text--contact contact-body" href="tel:xxx-xxx-xxxx">xxx-xxx-xxxx</a>

        {/* Email */}
        <div id="email-icon" className='text--contact contact-icon'>
            <DraftsOutlinedIcon className="text--vertical-bottom" />
        </div>
        <h3 className='title--contact-heading contact-heading'>Drop your message</h3>
        <a className="text--contact contact-body" href="email:email@address.com">email@address.com</a>
    </div>
}
