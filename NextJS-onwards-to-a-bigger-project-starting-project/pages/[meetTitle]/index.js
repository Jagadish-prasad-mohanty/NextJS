import React from 'react'
import Layout from '../../components/layout/Layout';
import MeetupItem from '../../components/meetups/MeetupItem';
import {useRouter} from 'next/router';
const DEMO_meetups=[
    {id:'1',
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address:"nuagarh",
    title:"Road Side"
},
    {id:'2',
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address:"nuagarh",
    title:"Road Side"
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
        <Layout>
        <h1>{meetData}</h1>
            <MeetupItem
            key={displayMeet.id}
                id={displayMeet.id}  
                title={displayMeet.title}
                image={displayMeet.image}
                address={displayMeet.address}
            />
        </Layout>
    )
}

export default MeetupDetails
