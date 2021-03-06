import classes from './MeetupDetails.module.css';
import {useRouter} from 'next/router';

const DEMO_meetups=[
    {id:'1',
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address:"nuagarh1",
    title:"Road Side1"
},
    {id:'2',
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address:"nuagarh2",
    title:"Road Side2"
},
]
function MeetupDetails() {
    const router=useRouter();
    const meetData=router.query.meetTitle;
    let displayMeet;
    if(meetData){
        const meetDataArr=meetData.split('-');
        displayMeet=DEMO_meetups.filter((meet)=>meet.id===meetDataArr[1]);
        displayMeet=displayMeet[0]
        console.log(displayMeet);
    }
    else{

        return <h4 style={{textAlign:'center'}}>Loading ...</h4>
    }

    return (
        <div className={classes.details}>
            <img src={displayMeet.image} alt={displayMeet.title}/>
            <h3>{displayMeet.title}</h3>
            <p>{displayMeet.address}</p>
        </div>
    )
}

export default MeetupDetails
