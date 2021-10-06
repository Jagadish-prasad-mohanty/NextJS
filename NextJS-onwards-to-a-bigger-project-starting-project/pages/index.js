import React from 'react'
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
function Home() {
    return (
        <Layout>
            <MeetupList meetups={DEMO_meetups}/>
        </Layout>
    )
}

export default Home