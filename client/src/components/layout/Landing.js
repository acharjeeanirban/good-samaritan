import React from 'react'

export const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Your good samaritan</h1>
                    <p className="lead">
                        In this time of crisis, i.e COVID-19, 
                        members of our society can feel very vulnerable. Our elderly are most at risk. 
                        This website serves as a platform for the elderly to register for help and for able 
                        and healthy people in our society to come forward to help the vulnerable.
                    </p>
                    <div className="buttons">
                        <a href="register.html" className="btn btn-primary">Sign Up as a Volunteer</a>
                        <a href="register.html" className="btn btn-primary">Sign Up as someone who needs help</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
