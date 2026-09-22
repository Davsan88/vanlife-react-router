import aboutImg from '../assets/about_image.png'
import './About.css'

const About = () => {

    return (
        <>
            <img src={aboutImg} alt="" className='about-img' />

            <section className="about-section container">
                <h1 className="about-heading">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="about-para">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                    <br />
                    <br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </section>
            <section className="cta-section container">
                <h2 className="cta-heading">
                    Your destination is waiting.
                    <br />
                    Your van is ready.
                </h2>
                <button className="cta-btn">
                    Explore our vans
                </button>
            </section>
        </>
    )
}

export default About