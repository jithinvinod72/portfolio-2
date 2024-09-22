// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import Badges from '../../utils/badge.list.util'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="Throughout my career, I've contributed to impactful software solutions and developed products across various domains, including AI, cloud architecture, and full-stack development."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>316.ai</h3>
								<h4>Software Engineer Intern</h4>
								<h4>May 2024 - Aug 2024 · 4 mos</h4>
								<h5>Toronto, Canada</h5>
							</span>
							<p>
								At 316.ai, I worked on the development of WriteCV.io, an AI-powered resume platform. I spearheaded backend API development using Node.js, Express.js, and TypeScript, while integrating AI features for real-time resume analysis. Additionally, I implemented responsive templates, securing the platform’s scalability, and enhanced data security through PostgreSQL’s Row-Level Security (RLS).
							</p>
							<Badges list={internStack} block="stack" fullContainer="fullContainer"/>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>PIT Solutions Pvt Ltd</h3>
								<h4>Software Engineer</h4>
								<h4>Nov 2021 - Jul 2023 · 1 yr 9 mos</h4>
								<h5>Kerala, India</h5>
							</span>
							<p>
								During my time at PIT Solutions, I played a key role in building scalable systems for various products, including an HRMS module using ReactJS, TypeScript, and C#. I optimized APIs for a large user base, reducing latency by 40%, and developed a SaaS healthcare platform deployed on Azure, integrating AI models to automate workflows.
							</p>
							<Badges list={pitStack} block="stack" fullContainer="fullContainer"/>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>PIT Solutions Pvt Ltd</h3>
								<h4>Associate Software Engineer</h4>
								<h4>Nov 2020 - Nov 2021 · 1 yr</h4>
								<h5>Kerala, India</h5>
							</span>
							<p>
								As an Associate Software Engineer, I focused on enhancing system customization and performance. I developed RESTful APIs, worked on SQL optimizations for high-volume transactions, and built a settings module using ASP.NET Core, improving user experience and system flexibility.
							</p>
							<Badges list={associateStack} block="stack" fullContainer="fullContainer"/>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const internStack = [
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'ReactJS', type: 'devicon' },
	{ key: 'expressjs', name: 'Express.js', type: 'devicon' },
	{ key: 'postgresql', name: 'PostgreSQL', type: 'devicon' },
	{ key: 'supabase', name: 'Supabase', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
]

const pitStack = [
	{ key: 'react', name: 'ReactJS', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'csharp', name: 'C#.NET', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'expressjs', name: 'Express.js', type: 'devicon' },
	{ key: 'azure', name: 'Azure', type: 'devicon' },
]

const associateStack = [
	{ key: 'aspnet', name: 'ASP.NET Core', type: 'devicon' },
	{ key: 'mssql', name: 'MSSQL', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'restapi', name: 'REST API', type: 'devicon' },
]
