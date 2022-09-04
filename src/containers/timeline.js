import TimelineItem from "../components/timelineItem";

const Timeline = props => {

    const timelineData = props.data;

    let content = timelineData.map((item, index) => (
        <TimelineItem 
            key={index} 
            onClick={props.selectFunction}
            id={item.id}
            title={item.title} 
            subtitle={item.subtitle} 
            startDate={item.startDate} 
            endDate={item.endDate}/>
    ));

    return (
        <div className='timeline'>
            {content}
        </div>
    );
}

export default Timeline;