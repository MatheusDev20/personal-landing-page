import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/smartnx-logo.jpeg"
import novaLogo from './assets/img/icons/common/nova1.png'
import aktienow from './assets/img/icons/common/download.png'

export const greetings = {
	name: "Matheus de Paula",
	title: "Desenvolvedor Full Stack",
	description: "Apaixonado por tecnologia, busco desenvolver soluções com as mais recentes e melhores ferramentas do mercado."
};

export const openSource = {
	githubUserName: "MatheusDev20",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/MatheusDev20",
	linkedin: "https://www.linkedin.com/in/matheusdev20/",
};

export const skillsSection = {
	title: "Ferramentas",
	subTitle:
		"Abaixo estão listadas algumas das ferramentas que já trabalhei, ou estou estudando para aprimorar.",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "SENAI Juiz de Fora UI Luiz Adelar Scheuer",
		subHeader: "Ensino técnico de nível médio em mecâtronica",
		duration: "Feveiro 2015 - Junho 2016",
		desc: "Ensino técnico cursado em conjunto com o ensino médio.",
	},
	{
		schoolName: "Universidade Federal de Juiz de Fora",
		subHeader: "Bacharelado em Sistemas de Informação",
		duration: "Junho de 2020 - Cursando",
		desc: "Curso superior em andamento pela UFJF, atualmente no 3 período.",
	},
];

export const experience = [
	{
		role: "Estágio - Analista de testes.",
		company: "Smartnx",
		companylogo: googlelogo,
		date: "Dezembro 2019 - Julho - 2020",
		desc: "Estagiário no setor de testes e automação",
		descBullets: [
			"Python",
			"Selenium",
			"Jira",
			"Web-Driver",
			"Kanban"
		],
	},
	{
		role: "Analista de sistemas júnior",
		company: "Smartnx",
		companylogo: googlelogo,
		date: "Julho 2020 – Abril 2022",
		desc: "Desenvolvimento Backend Python (Flask)",
		descBullets: [
			"Python",
			"PostgreSQL",
			"AWS Lambda",
			"Flask",
			"SQL-Alchemy",
		],

	},
	{
		role: "Desenvolvedor Backend",
		company: "Nova Tendência",
		companylogo: novaLogo,
		date: "Abril 2022 – Agosto 2022 ",
		desc: "Desenvolvedor Backend Java",
		descBullets: [
			"Java",
			"Spring Boot",
			"AWS Lambda",
			"AWS Cognito",
			"GIT"
		],

	},
	{
		role: "Desenvolvedor Full Stack",
		company: "Aktie Now",
		companylogo: aktienow,
		date: "Agosto 2022 – Atual ",
		desc: "Desenvolvedor Full stack Javascript",
		descBullets: [
			"React JS",
			"Node JS",
			"Nest JS",
			"Typescript",
			"Javascript",
		],

	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
