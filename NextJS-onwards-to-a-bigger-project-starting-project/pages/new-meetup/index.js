import React from 'react'
import Layout from '../../components/layout/Layout'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetup() {
    const meetupAddHandler= (newMeetupData)=>{
        console.log(newMeetupData);
    }
    return (
        <Layout>
            <NewMeetupForm onAddMeetup={meetupAddHandler}/>
        </Layout>
    )
}

export default NewMeetup
