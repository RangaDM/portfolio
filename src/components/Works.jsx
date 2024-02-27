import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
//     return (
//         <motion.div
//         variants={fadeIn("", "", 0.1, 1)}
//         className='w-full md:w-1/2 lg:w-1/3'
//         >
//         <div
//             className='w-full bg-primary-800 rounded-lg p-5 flex flex-col items-center justify-center gap-5'
//             style={{ height: "400px" }}
//         >
//             <img
//             src={image}
//             alt={name}
//             className='w-full h-[200px] object-contain'
//             />
//             <div className='w-full flex flex-col gap-2'>
//             <h3 className='text-white text-[20px] font-bold'>{name}</h3>
//             <p className='text-secondary text-[16px]'>{description}</p>
//             <div className='w-full flex flex-wrap gap-2'>
//                 {tags.map((tag, index) => (
//                 <span
//                     key={`tag-${index}`}
//                     className={`text-white text-[14px] font-semibold ${tag.color} px-2 py-1 rounded-md`}
//                 >
//                     {tag.name}
//                 </span>
//                 ))}
//             </div>
//             <a
//                 href={source_code_link}
//                 target='_blank'
//                 rel='noreferrer'
//                 className='text-white text-[14px] font-semibold hover:underline'
//             >
//                 Source Code
//             </a>
//             </div>
//         </div>
//         </motion.div>
//     );
//     };

const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
        variants={fadeIn("up","spring", index*0.5, 0.75 )}>
            <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
            </Tilt>
        </motion.div>
    );
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
