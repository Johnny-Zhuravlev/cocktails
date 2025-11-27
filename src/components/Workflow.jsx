import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { features } from '../constants';
import { useMediaQuery } from 'react-responsive';
import CheckIcon from './CheckIcon';

const Workflow = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#work',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        })

        maskTimeline
            .to('.will-fade', {
                opacity: 0,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                scale: 1.33,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'back.inOut'
            })
            .to('#masked-content', { 
                opacity: 1, 
                duration: 1, 
                ease: 'power1.inOut'
            })
    })

    return (
        <>
            <section id="work">
                <div className="container mx-auto min-h-full pt-20">
                    <h2 className="will-fade">Работа как искусство</h2>

                    <div className="content">
                        <ul className="space-y-4 will-fade">
                            {features.slice(0,4).map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="cocktail-img">
                            <img 
                                src="/images/under-img.jpg" 
                                alt="cocktail glass" 
                                className="abs-center masked-img size-full object-contain" 
                            />
                        </div>

                        <ul className="space-y-4 will-fade">
                            {features.slice(4, features.length).map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon />
                                    <p className="md:w-fit w-60">{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="masked-container">
                        <h2 className="will-fade">
                            Сделай глоточек совершенства
                        </h2>

                        <div id="masked-content">
                            <h3>Сделано мастерски. Наполнено с душой</h3>
                            <p>Это не просто напиток. Это тщательно созданный момент, созданный специально для вас.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Workflow;
