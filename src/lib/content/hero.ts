import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
    subtitle: 'Hello, I’m',
    title: [
        'Gamika Punsisi!',
        'Full-stack Developer',
        'Machine Learning Engineer',
        'Blogger'
    ],
    tagline: 'Specializing in ETL pipelines and solutions architecture.',
    description: 
        "I’m a Computer Science and Software Engineering student at Coventry University, specializing in Software Engineering and Machine Learning. I am passionate about acquiring new skills and building projects to gain hands-on experience. I thrive on collaboration and am dedicated to turning innovative ideas into reality.",
    specialText: 'Currently open to job opportunities and freelance projects.',
    cta: {
        title: 'View My Resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true
    }
};
