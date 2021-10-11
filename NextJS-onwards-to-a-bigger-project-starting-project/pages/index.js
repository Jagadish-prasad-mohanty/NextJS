import React, {useState,useEffect} from 'react'
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList'
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
function Home(props) {
    // const [meetUpData, setMeetUpData] = useState([]);
    // useEffect(() => {
    //    //fetch data
    //    setMeetUpData(DEMO_meetups)
    // }, [])
    // if (!meetUpData){
    //     return <p style={{textAlign:'center'}}>Loading ...</p>
    // }
    return (
            <MeetupList meetups={props.meetupData}/>
    )
}

export async function getStaticProps(){
    return {
        props: {
            meetupData:DEMO_meetups
        }
    }
}

export default Home
