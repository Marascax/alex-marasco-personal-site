
const AboutMeBody = props => {
    const pageData = props.data;

    return (
        <div className='MainContent'>
            
            <p>{pageData.text}</p>

            <div className='ContactInfo'>

                <h2>Contact Information</h2>
                <p>
                    E-mail: <a href={`mailto:${pageData.contactInfo.email}`}>{pageData.contactInfo.email}</a>
                </p>
                <p>
                    Phone Number: {pageData.contactInfo.phoneNumber}
                </p>
                <p className='LinkedIn'>
                    <a href={pageData.contactInfo.linkedIn}>
                        <img className='Icon' src='./images/linkedin-icon.webp' alt='LinkedIn Icon'/>
                    </a>
                </p>

            </div>
        </div>
    )
}

export default AboutMeBody;