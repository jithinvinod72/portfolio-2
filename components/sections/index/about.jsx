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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Who I Am"
					subTitle="With expertise spanning full stack development, cloud computing, AI/ML, and system architecture, I am a versatile software engineer passionate about creating solutions that make an impact."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/JithinVinod_Headshot.png" alt="Jithin Vinod photo"/>
						{/* <Image src="/img/profile-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Skills That Drive Innovation"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'code' ]}
							copy="In addition to my technical expertise, I bring strong leadership, problem-solving, and collaborative skills honed through my experience leading teams in fast-paced environments. Outside of work, I enjoy exploring new technologies, contributing to open-source, and staying active with hiking and cycling."
						/>
						<BadgesBlock 
							title="Research and Development" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="lightbulb"
							copy="I love the process of researching and building the foundation of a project. Whether it's designing system architectures or crafting scalable solutions, I'm passionate about every touchpoint of software development."
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'brain', 			name: 'AI/ML Development', 	type: 'fad' },
	{ key: 'cloud', 			name: 'Cloud Architecture', type: 'fad' },
	{ key: 'cogs', 				name: 'System Design', 		type: 'fad' },
	{ key: 'code', 				name: 'Full Stack Development', type: 'far' },
	{ key: 'network-wired', 	name: 'API Design', 		type: 'fad' },
	{ key: 'database', 			name: 'Database Management', type: 'fad' }
]
