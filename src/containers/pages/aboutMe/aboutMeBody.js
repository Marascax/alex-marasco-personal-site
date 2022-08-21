import { useState } from "react";

import CaretDown from "../../../components/caretDown";

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
            <img className="TextIcon" src={language.icon} alt={language.name}/><span className='TextName'>{language.name}</span>
        </div>
    ));

    let frameworksLibs = technicalSkills.frameworksLibraries.map((frameworkLib, index) => (
        <div className="TextIcon" key={index}>
            <img className="TextIcon" src={frameworkLib.icon} alt={frameworkLib.name}/><span className='TextName'>{frameworkLib.name}</span>
        </div>
    ));

    let tools = technicalSkills.tools.map((tool, index) => (
        <div className="TextIcon" key={index}>
            <img className="TextIcon" src={tool.icon} alt={tool.name}/><span className='TextName'>{tool.name}</span>
        </div>
    ));

    return (
        <div className='MainContent'>
            
            <p className='AboutMeText'>{pageData.text}</p>

            <div className='BottomHalf'>

                <div className='TechnicalSkills'>

                    <div className='Languages'>

                        <div className='TechSkillsHeader'>
                            <h2>Languages </h2>
                            <CaretDown/>
                        </div>

                        <div className='TextIconList' style={{ display: currDropdown === LANGUAGE_DROPDOWN ? 'visible' : 'none'}}>
                            {languages}
                        </div>

                    </div>
                    
                    <div className='FrameworksLibs'>

                        <div className='TechSkillsHeader'>
                            <h2>Frameworks &amp; Libraries</h2>
                            <CaretDown/>
                        </div>

                        <div className='TextIconList' style={{ display: currDropdown === FRAMEWORKLIB_DROPDOWN ? 'visible' : 'none'}}>
                            {frameworksLibs}
                        </div>

                    </div>
                    
                    <div className='Tools'>

                        <div className='TechSkillsHeader'>
                            <h2>Tools</h2>
                            <CaretDown/>
                        </div>

                        <div className="TextIconList" style={{ display: currDropdown === TOOL_DROPDOWN ? 'visible' : 'none'}}>
                            {tools}
                        </div>

                    </div>
                    
                </div>

                <div className='ContactInfo'>

                    <h2>Contact Information</h2>

                    <p>
                        <a href={`mailto:${pageData.contactInfo.email}`}>{pageData.contactInfo.email}</a>
                    </p>

                    <p>
                        <a href={`tel:+${pageData.contactInfo.phoneNumber}`}>{pageData.contactInfo.phoneNumber}</a>
                    </p>

                    <p className='LinkedIn'>
                        <a href={pageData.contactInfo.linkedIn}>
                            <img className='Icon' src='./images/linkedin-icon.webp' alt='LinkedIn Icon'/>
                        </a>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default AboutMeBody;