import Button from "./Button";
import Description from "./Description";

export default function Info() {
    return (
        <>
        <section className="info--section">
            <div className="info--container">
                <h1 className="info--title">Bruno Corrao</h1>
                <span className="info--role">Fullstack Developer</span>
                <a href="https://brunocorraodev.onrender.com" className="info--portfolio">brunocorraodev.onrender.com</a>
            </div>
            <div>
                <Button socialName={'E-Mail'} socialLink={''} socialClass={'btn e-mail'} />
                <Button socialName={'Linkedin'} socialLink={'https://www.linkedin.com/in/bruno-corrao/'} socialClass={'btn linkedin'}/>
            </div>
            <div>
                <Description title={'About'} paragraph={'I am a fullstack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn'}/>
                <Description title={'Interest'} paragraph={'Vegan food. Handbalancer. Reader. Mate enjoyer.'}/>
            </div>
        </section>

        </>
    )
}