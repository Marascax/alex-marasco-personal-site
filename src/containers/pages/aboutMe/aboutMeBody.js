import { useState } from "react";

import CaretDown from "../../../components/caretDown";

import Resume from '../../../assets/files/Alexander_Marasco_CV.pdf';

const LANGUAGE_DROPDOWN = 0;
const FRAMEWORKLIB_DROPDOWN = 1;
const TOOL_DROPDOWN = 2;


const AboutMeBody = props => {
    const [currDropdown, setCurrDropdown] = useState(null);

    const updateCurrDropdown = newDropdown => {
        // if the dropdown selected is the current one, then close the dropdown
        if (newDropdown === currDropdown) {
            setCurrDropdown(null);
        } else {
            setCurrDropdown(newDropdown);
        }
    }

    const pageData = props.data;

    const technicalSkills = pageData.technicalSkills;
    // show icon with each language name, framwork and library name, and tool name

    let languages = technicalSkills.languages.map((language, index) => (
        <div className="TextIcon" key={index}>
            <img className="Icon" src={language.icon} alt={language.name}/><span className='TextName'>{language.name}</span>
        </div>
    ));

    let frameworksLibs = technicalSkills.frameworksLibraries.map((frameworkLib, index) => (
        <div className="TextIcon" key={index}>
            <img className="Icon" src={frameworkLib.icon} alt={frameworkLib.name}/><span className='TextName'>{frameworkLib.name}</span>
        </div>
    ));

    let tools = technicalSkills.tools.map((tool, index) => (
        <div className="TextIcon" key={index}>
            <img className="Icon" src={tool.icon} alt={tool.name}/><span className='TextName'>{tool.name}</span>
        </div>
    ));

    return (
        <div className='AboutMeContent'>
            
            <div className='AboutMeText'>
                <p>{pageData.text}</p>
            </div>
            

            <div className='AboutMeBottomHalf'>

                <div className='TechnicalSkills'>

                    <div className='Languages'>

                        <div className='TechSkillsHeader' onClick={() => updateCurrDropdown(LANGUAGE_DROPDOWN)}>
                            <h2>Programming Languages</h2>
                            <CaretDown/>
                        </div>

                        <div className='TextIconList' style={{ display: currDropdown === LANGUAGE_DROPDOWN ? 'flex' : 'none'}}>
                            {languages}
                        </div>

                    </div>
                    
                    <div className='FrameworksLibs'>

                        <div className='TechSkillsHeader' onClick={() => updateCurrDropdown(FRAMEWORKLIB_DROPDOWN)}>
                            <h2>Frameworks &amp; Libraries</h2>
                            <CaretDown/>
                        </div>

                        <div className='TextIconList' style={{ display: currDropdown === FRAMEWORKLIB_DROPDOWN ? 'flex' : 'none'}}>
                            {frameworksLibs}
                        </div>

                    </div>
                    
                    <div className='Tools'>

                        <div className='TechSkillsHeader' onClick={() => updateCurrDropdown(TOOL_DROPDOWN)}>
                            <h2>Development Tools</h2>
                            <CaretDown/>
                        </div>

                        <div className="TextIconList" style={{ display: currDropdown === TOOL_DROPDOWN ? 'flex' : 'none'}}>
                            {tools}
                        </div>

                    </div>
                    
                </div>

                <div className='ContactInfo'>

                    <h2>Resume &amp; Contact Information</h2>

                    <p className='Resume'>
                        <a href={Resume} download='Alexander_Marasco_CV.pdf'>
                            Download Resume
                        </a>
                    </p>

                    <p className='ContactInfoEmail'>
                        <a href={`mailto:${pageData.contactInfo.email}`}>{pageData.contactInfo.email}</a>
                    </p>

                    <p className='ContactInfoPhone'>
                        <a href={`tel:+${pageData.contactInfo.phoneNumber}`}>{pageData.contactInfo.phoneNumber}</a>
                    </p>

                    <p className='LinkedIn'>
                        <a href={pageData.contactInfo.linkedIn}>
                            <img className='Icon' src={process.env.PUBLIC_URL + '/images/linkedin-icon.webp'} alt='LinkedIn Icon'/>
                        </a>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default AboutMeBody;