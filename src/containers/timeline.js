
const Timeline = props => {

    const timelineData = props.data;

    let content = timelineData.map((item, index) => (
        <div className='timeline-item' key={index}>

            <div className='item-container'>
                <div className='item-title'>{item.title}</div>
                <div className='item-subtitle'>{item.subtitle}</div>
                <div className='item-date'>{item.startDate} - {item.endDate}</div>
            </div>
            
        </div>
    ));

    return (
        <div className='timeline'>
            {content}
        </div>
    );
}

export default Timeline;