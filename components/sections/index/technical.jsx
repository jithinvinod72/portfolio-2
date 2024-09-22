// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical Skills"
					preTitle="Core Competencies"
					subTitle="As a full stack developer, I create impactful solutions using cutting-edge technologies across the stack."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Strong Foundations"
							icon={[ 'fat', 'cogs' ]}
							copy="With a solid background in both frontend and backend development, I bring a full-stack perspective to every project. I’m continuously refining my skills to stay at the forefront of the tech industry."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I Excel In" 
							copy="Throughout my career, I’ve used various software tools to deliver high-quality, efficient solutions. Below are some of the tools I rely on to craft intuitive digital experiences."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="tools"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I Build With" 
							copy="From designing front-end user interfaces to architecting backend infrastructures and APIs, I take pride in solving complex problems with these technologies."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'postman', 		name: 'Postman', 			type: 'devicon' },
	{ key: 'docker', 		name: 'Docker', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'jira', 			name: 'Jira', 				type: 'devicon' },
	{ key: 'slack', 		name: 'Slack', 				type: 'devicon' }
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'typescript', 	name: 'TypeScript', 		type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'Next.js', 			type: 'devicon' },
	{ key: 'nodejs', 		name: 'Node.js', 			type: 'devicon' },
	{ key: 'expressjs', 	name: 'Express.js', 		type: 'devicon' },
	{ key: 'firebase', 		name: 'Firebase', 			type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'postgresql', 	name: 'PostgreSQL', 		type: 'devicon' },
	{ key: 'azure', 		name: 'Azure', 				type: 'devicon' },
	{ key: 'aws', 			name: 'AWS', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' }
]
