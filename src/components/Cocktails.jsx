import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cocktails, mocktails } from '../constants';

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
        .from('#cocktails-left-leaf', { x: -100, y: -25 })
        .from('#cocktails-right-leaf', { x: 100, y: 100 })
    })

    return (
        <>
            <section id="cocktails" className="noisy">
                <img id="cocktails-left-leaf" src="/images/cocktails-left-leaf.png" alt="cocktails left leaf" />
                <img id="cocktails-right-leaf" src="/images/cocktails-right-leaf.png" alt="cocktails right leaf" />

                <div className="list">
                    <div className="popular">
                        <h2>Самые популярные коктейли:</h2>

                        <ul>
                            {cocktails.map(({id, country, details, label, price}) => (
                                <li key={id}>
                                    <div className="md:me-28">
                                        <h3>{label}</h3>
                                        <p>{country} | {details}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="loved">
                        <h2>
                            Самые любимые моктейли:
                            <p className="text-[10px] text-gray-400">(безалкогольные напитки)</p>    
                        </h2>


                        <ul>
                            {mocktails.map(({id, country, details, label, price}) => (
                                <li key={id}>
                                    <div className="md:me-28">
                                        <h3>{label}</h3>
                                        <p>{country} | {details}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cocktails;
