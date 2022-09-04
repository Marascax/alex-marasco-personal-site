
const TimelineItem = props => {

    const id = props.id;

    return (
        <div className='timeline-item' onClick={props.onClick ? () => props.onClick(id) : null}>

            <div className='item-container'>
                <div className='item-title'>{props.title}</div>
                <div className='item-subtitle'>{props.subtitle}</div>
                <div className='item-date'>{props.startDate} - {props.endDate}</div>
            </div>
            
        </div>
    );
}

export default TimelineItem;