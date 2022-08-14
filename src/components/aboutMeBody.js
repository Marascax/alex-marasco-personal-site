
const AboutMeBody = props => {
    const pageData = props.data;

    return (
        <div className='MainContent'>
            
            <p>{pageData.text}</p>

            <h2>Contact Information</h2>
            <p>E-mail: {pageData.contactInfo.email}</p>
            <p>Phone Number: {pageData.contactInfo.phoneNumber}</p>

        </div>
    )
}

export default AboutMeBody;