import bannar1 from '../assets/14.webp'
import bannar2 from '../assets/15.webp'
import bannar3 from '../assets/16.webp'
import Section from './section'

const BANNAR = [bannar1, bannar2, bannar3]


export default function Bannar() {
    return (
        <Section className='mt-10'>
            <div className='m-auto'>
                <ul className='flex flex-wrap gap-6 items-center justify-center single-banner '>
                    {BANNAR.map((item, index) => (
                        <a className='cursor-pointer relative' key={index} >
                            <img src={item} alt="" />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    )
}
