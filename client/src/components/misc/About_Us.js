import React, { Fragment } from 'react';
import me from '../../img/me.jpg';

export const About_Us = () => {
    return (
        <Fragment>
            <img src={me}></img>
            <p className="lead"> 
                
                <br></br>
                Hi, My name is Anirban Acharjee and I am the developer of this website. I am a software engineer by profession.
                I have been moved by the predicaments that our elderly are facing during this COVID-19 crisis. 
                I wanted to create a website which would act as a registration board for volunteers in their communities to connect with those who most need help.

                <br></br>
                
                <br></br>
                <h4>How it works?</h4>
                <br></br>
                <h4>If you need help</h4>
                <br></br>
                If you are a person who needs help with groceries or walk your dog etc please sign up and create a profile.
                Once a volunteer in your city has accepted your profile, you will be able to see that person's information
                on your dashboard.

                <br></br>
                <br></br>

                <h4>If you want to volunteer</h4>
                <br></br>

                If you want to volunteer, please register and create a profile. You will be able to get a list of people 
                who are in need of help in your city. You will have the ability to accept a profile. Once you do, your dashboard 
                will have information about the person you are about to help.

                <br></br>
                <br></br>
                <br></br>
            

                <br></br>
                <h4>If you wanna get in touch with me..</h4>
                I live in the beautiful city of North vancouver, British Columbia, Canada. I love coding, nature, dogs, coffee. If you have suggestion regarding the website 
                or want to help out in any form please reach out to me @ acharjeeanirban7@gmail.com
            </p>
        </Fragment>

    )
}
