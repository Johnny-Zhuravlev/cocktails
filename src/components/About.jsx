import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import CheckIcon from './CheckIcon';

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words',
        });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        });

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                duration: 1,
                yPercent: 100,
                ease: 'expo.out',
                stagger: 0.03
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.05
            }, '-= 0.5')
    })

    return (
        <>
            <section id="about">
                <div className="mb-16 md:px-0 px-5">
                    <div className="content">
                        <div className="md:col-span-8">
                            <p className="badge">
                                Лучшие коктейли
                            </p>
                            <h2>
                                Где важна каждая деталь <span className="text-white">-</span>
                                от неизвестности вкуса до украшения
                            </h2>
                        </div>

                        <div className="sub-content">
                            <p>
                                Каждый коктейль, который мы подаем, является отражением нашей одержимости деталями — от первой путаницы до финального гарнира. Именно эта забота превращает простой напиток в нечто поистине запоминающееся.
                            </p>
                            <div className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                                <p className="text-sm text-white-100">
                                    Более чем +12000 гостей
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-grid">
                    <div className="md:col-span-3">
                        <div className="noisy" />
                        <img src="/images/abt1.png" alt="grid-img" />
                    </div>    
                    <div className="md:col-span-3 flex justify-center">
                        <div className="noisy" />
                        <div className="benefits flex flex-col items-center justify-center p-8">
                            <h4 className="benefits__title text-2xl font-modern-negra text-center mb-4">
                                Создано для впечатлений
                            </h4>
                            <ul className="benefits__list">
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Превосходный баланс
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Идеальное украшение
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Всегда охлажденные
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Мастерский встряхнуто
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <div className="noisy" />
                        <img src="/images/abt2.png" alt="grid-img" />
                    </div>    
                </div>
                
                <div className="bottom-grid">
                    <div className="md:col-span-8">
                        <div className="noisy" />
                        <img src="/images/abt3.png" alt="grid-img" />
                    </div>   
                    <div className="md:col-span-4">
                        <div className="noisy" />
                        <img src="/images/abt4.png" alt="grid-img" />
                    </div> 
                </div>

            </section>
        </>
    )
}

export default About;
