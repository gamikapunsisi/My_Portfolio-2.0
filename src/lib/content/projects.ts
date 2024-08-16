import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'Hotel Reservation',
      url: 'https://github.com/gamikapunsisi/Hotel_Reservation.git',
      repo: 'https://github.com/gamikapunsisi/Hotel_Reservation.git',
      img: 'https://i.postimg.cc/jqhxxVgp/temp-Image-R1q1xd.avif',
      year: 2024,
      projectSkills: [
        { name: 'Laravel', icon: 'vscode-icons:file-type-laravel' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-mysql' },
        { name: 'PHP', icon: 'vscode-icons:file-type-php' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
      ],
    },
    {
      id: getId(),
      name: 'Eight Queens Puzzle',
      url: 'https://github.com/gamikapunsisi/Eight-queens-puzzle.git',
      repo: 'https://github.com/gamikapunsisi/Eight-queens-puzzle.git',
      img: 'https://i.postimg.cc/5NF9vPfg/temp-Imagessi-Xal.avif',
      year: 2024,
      projectSkills: [
        { name: 'C#', icon: 'vscode-icons:file-type-csharp' },
        { name: 'Matplotlib', icon: 'logos:matplotlib' },
      ],
    },
    {
      id: getId(),
      name: 'Vehical Damage Detection',
      url: 'https://github.com/gamikapunsisi/Vehical-Damage-Detection.git',
      repo: 'https://github.com/gamikapunsisi/Vehical-Damage-Detection.git',
      img: 'https://i.postimg.cc/0Q2DygRc/temp-Image7fg0-D5.avif',
      year: 2024,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },  
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' }, 
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },       
        { name: 'CSS', icon: 'vscode-icons:file-type-css' }  
        
      ],
    },
  ],
};
