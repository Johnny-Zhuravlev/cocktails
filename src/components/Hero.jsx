import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.text', { type: 'lines' });
        const additionalTextSplit = new SplitText('.additional-text', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.5,
            ease: 'expo.inOut',
            stagger: 0.09,
        
        });
        
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.09,
            delay: 1,
        });
        
        gsap.from(additionalTextSplit.lines, {
            opacity: 0,
            xPercent: 100,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.09,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0);
    }, [])

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className='title'>
                    DRINKS
                </h1>

                <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className="additional-text">Classic. Modern. Future</p>
                            <p className="text">
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="text">
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                            </p>
                            <a href="#cocktails" className="additional-text">
                                View cocktails
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero;
