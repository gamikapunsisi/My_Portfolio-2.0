import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Hotel Reservation',
      description: 'Hotel Reservation System Development with Laravel PHP and Tailwind CSS.',
      tasks: 'A project to create a hotel reservation system using Laravel PHP and Tailwind CSS for efficient booking management and a modern user interface.',
      url: 'https://github.com/gamikapunsisi/Hotel_Reservation.git',
      img: 'https://i.postimg.cc/jqhxxVgp/temp-Image-R1q1xd.avif',
      projectSkills: [
        { name: 'Laravel', icon: 'vscode-icons:file-type-python' },
        { name: 'PHP', icon: 'vscode-icons:file-type-aws' },
        { name: 'Tailwind css', icon: 'logos:apache-spark' },
        { name: 'Java Script', icon: 'vscode-icons:file-type-shell' },
      ],
    },
    {
      id: getId(),
      name: 'ChatBot Solutions',
      description: 'A chat application using rasa for chat messaging.',
      tasks: 'A chatbot built with Rasa for intelligent conversation handling, using Flask for both frontend and backend integration, enabling real-time messaging with dynamic theming for an improved user experience.',
      url: 'https://github.com/gamikapunsisi/BOTZ.git',
      img: 'https://i.postimg.cc/gcv3D0Mf/temp-Image-ZJo-PPF.avif',
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Flask', icon: 'logos:' },
        { name: 'Rasa', icon: 'logos:' },
        { name: 'Tensorflow', icon: 'logos:' },
      ],
    },
  ],
};

export default featuredProjectsSection;
