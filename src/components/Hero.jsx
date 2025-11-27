import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });

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

        const startAnimationValue = isMobile ? 'top 50%' : 'center 60%';
        const endAnimationValue = isMobile ? '120% top' : 'bottom top';

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startAnimationValue,
                end: endAnimationValue,
                scrub: true,
                pin: true,
            }
        })
        
        videoRef.current.onloadedmetadata = () => {
            videoTimeline.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        }
    }, [])

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className='title'>
                    коктычи
                </h1>

                <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className="additional-text">Классические. Современные. Вкусные</p>
                            <p className="text">
                                Глотни кусочек <br /> свежего лета
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="text">
                                Каждый напиток в нашем меню - это купаж премиальных ингридиентов и творчества, созданный доставить вам удовольствие.
                            </p>
                            <a href="#cocktails" className="additional-text">
                                Смотреть все напитки
                            </a>
                        </div>
                    </div>
                </div>

            </section>

            <div className="video absolute inset-0">
                <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto" />
            </div>
        </>
    )
}

export default Hero;
