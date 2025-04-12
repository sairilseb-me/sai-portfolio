<template>
    <v-container fluid >
       
        <v-row>
            <v-col :cols="mdAndUp ? '6' : '12'" class="h-25 pa-15 mt-15">
                <v-card flat>
                    <v-card-text>
                        <p class="mb-2">Hello!</p>
                        <p :class=" mdAndUp ? 'text-h2' : 'text-h4' ">I'm Sairil Seberiaga</p>
                        <p class="text-h5 my-2">Software Developer / SQE / SCRUM / Team Lead</p>
                        <p class="personalInfo text-subtitle-2">A versatile Software Developer with over 5 years of experience 
                            in building full-stack applications using Laravel, Vue 3, React, and Python (Flask, FastAPI). 
                            With a strong foundation in backend API development and frontend component-based architecture, he has contributed 
                            to real-world systems such as financial platforms, document management tools, and AI-integrated applications. 
                            Cyril is proficient in data scraping, automation testing (Selenium, Gherkin), and data analysis using pandas. 
                            He thrives in collaborative environments, values clean and maintainable code, and is always eager to learn 
                            new tools and technologies to optimize development workflows.</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-img
                    height="500"
                    :src="require('@/assets/images/sairil-headshot.jpeg')"
                >

                </v-img>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col md="6">
                <v-card flat>
                    <v-card-text>
                        <div class="techStackFont my-5">Tech Stack</div>
                        <div class="d-flex justify-space-between align-center pt-3">
                            <span class="text-h1" v-for="(prog, i) in progList" :key="i">
                                <i v-if="prog.icon" :class="prog.icon" class="ml-3"></i>
                                <p v-else class="text-h4">{{ prog.title }}</p>
                            </span>
                        </div>
                    </v-card-text>
                </v-card>
                <v-divider></v-divider>
                <v-card flat>
                    <v-card-text>
                        <div class="techStackFont my-5">Frameworks</div>
                        <div class="d-flex justify-start align-center pt-3 flex-wrap">
                            <span class="text-h1" v-for="(frame, i) in frameworkList" :key="i">
                                <i v-if="frame.icon" :class="frame.icon" class="ml-3"></i>
                                <p v-else class="text-h4">{{ frame.title }}</p>
                            </span>
                        </div>
                    </v-card-text>
                </v-card>
                <v-divider></v-divider>
               
                <v-card flat>
                    <v-row>
                        <v-col md="6">
                            <v-card-text>
                                <div class="techStackFont my-5">Operating Systems</div>
                                <div class="d-flex justify-start align-center pt-3 flex-wrap">
                                    <span class="text-h1" v-for="(os, i) in OSList" :key="i">
                                        <i v-if="os.icon" :class="os.icon" class="ml-3"></i>
                                        <p v-else class="text-h4">{{ os.title }}</p>
                                    </span>
                                </div>
                            </v-card-text>
                        </v-col>
                        <v-col md="6">
                            <v-card-text>
                            <div class="techStackFont my-5">Repositories</div>
                            <div class="d-flex justify-start align-center pt-3 flex-wrap">
                                <span class="text-h1" v-for="(repo, i) in repositories" :key="i">
                                    <i v-if="repo.icon" :class="repo.icon" class="ml-3"></i>
                                    <p v-else class="text-h4">{{ repo.title }}</p>
                                </span>
                            </div>
                        </v-card-text>
                        </v-col>

                    </v-row>
                </v-card>
                <v-divider></v-divider>
                <v-card flat>
                   <v-card-text>
                    <div class="techStackFont my-5">Project Development</div>
                            <div class="d-flex justify-start align-center pt-3 flex-wrap">
                                <span class="text-h1" v-for="(dev, i) in projectDevelopment" :key="i">
                                    <i v-if="dev.icon" :class="dev.icon" class="ml-3"></i>
                                    <p v-else class="text-h4">{{ dev.title }}</p>
                                </span>
                            </div>
                   </v-card-text>
                </v-card>
            </v-col>
            <v-col md="6" class="my-5">
                <v-card flat>
                    <v-card-title>Other Skills</v-card-title>
                    <v-card-text>
                        <ul>
                            <li>Supports and maintains ICT hardware and software equipment</li>
                            <li>Maintains appropriate security and troubleshoots any issues</li>
                            <li>PC/Laptop Troubleshooting</li>
                            <li>Checking of the Computer equipments if it passed the specifications/requirements of End user</li>
                            <li>Network Administration</li>
                            <li>Database Manager</li>
                            <li>Audio and Video for Zoom and Facebook Live</li>
                            <li>Customer Support</li>
                        </ul>
                        
                        <div class="d-flex align-center my-5 personalInfo">
                            <v-icon>
                                <svg-icon type="mdi" :path="icon.account"></svg-icon>
                            </v-icon> 
                            <p class="ml-3"> Cyril Seberiaga</p>
                        </div>
                        <div class="d-flex align-center my-5 personalInfo">
                            <v-icon>
                                <svg-icon type="mdi" :path="icon.email"></svg-icon>
                            </v-icon> 
                            <p class="ml-3"> cyrilseberiaga@gmail.com</p>
                        </div>
                        <div class="d-flex align-center my-5 personalInfo">
                            <v-icon>
                                <i class="devicon-linkedin-plain"></i>
                            </v-icon> 
                            <p class="ml-3"> https://www.linkedin.com/in/sairilseberiaga/</p>
                        </div>
                        <div class="d-flex align-center my-5 personalInfo">
                            <v-icon>
                                <i class="devicon-github-original"></i>
                            </v-icon> 
                            <p class="ml-3"> https://github.com/sairilseb-me</p>
                        </div>
                        <div class="d-flex align-center my-5 personalInfo">
                            <v-btn class="bg-purple text-white"><a href="https://drive.google.com/file/d/194kn4Auj_YjceLhFEZACS_Ki53v8H2S7/view?usp=sharing" class="text-decoration-none text-white" target="_blank">Check out CV</a></v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-5">
           <v-col md="12" class="d-flex justify-center">
                <v-card flat>
                    <v-card-text>
                        <p class="text-h5">Projects</p>
                    </v-card-text>
                </v-card>
           </v-col>
        </v-row>
        <v-row>
            <v-col md="4" v-for="(project, index) in projects" :key="index">
                <project-panel :project="project"></project-panel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref } from 'vue'

import ProjectPanel from './layouts/project-panels.vue'

import SvgIcon from '@jamescoyle/vue-icon';
import { mdilAccount, mdilEmail } from '@mdi/light-js';
import { useDisplay } from 'vuetify'

export default {
    components: {
        SvgIcon,
        ProjectPanel,
    },
    setup() {
        const {mdAndUp} = useDisplay()
        const progList = ref([
            {
                title: 'PHP',
                icon: 'devicon-php-plain'
            },
            {
                title: 'javascript',
                icon: 'devicon-javascript-plain'
            },
            {
                title: 'VB.NET',
                icon: ''
            },
            {
                title: 'Python',
                icon: 'devicon-python-plain-wordmark'
            },
            {

            }
        ])

        const frameworkList = ref([
            {
                title: 'Laravel',
                icon: 'devicon-laravel-plain-wordmark'
            },
            {
                title: 'Vue JS',
                icon: 'devicon-vuejs-plain-wordmark'
            },
            {
                title: 'Bootstrap',
                icon: 'devicon-bootstrap-plain-wordmark'
            },
            {
                title: 'jQuery',
                icon: 'devicon-jquery-plain-wordmark'
            },
            {
                title: 'Vuetify',
                icon: 'devicon-vuetify-line'
            },
            {
                title: 'Dot Net Framework',
                icon: 'devicon-dot-net-plain-wordmark'
            },
            {
                title: 'Tailwind',
                icon: 'devicon-tailwindcss-original-wordmark'
            }
        ])

        const OSList = ref([
            {
                title: 'Windows',
                icon: 'devicon-windows8-original'
            },
            {
                title: 'Linux',
                icon: 'devicon-linux-plain'
            },
            {
                title: 'Mac OS',
                icon: 'devicon-apple-original'
            }
        ])

        const repositories = ref([
            {
                title: 'Bitbcuket',
                icon: 'devicon-bitbucket-original'
            },
            {
                title: 'Github',
                icon: 'devicon-github-original'
            }
        ])

        const projectDevelopment = ref([
            {
                title: 'JIRA',
                icon: 'devicon-jira-plain-wordmark'
            },
            {
                title: 'VSCode',
                icon: 'devicon-vscode-plain-wordmark'
            },
            {
                title: 'Visual Studio',
                icon: 'devicon-visualstudio-plain-wordmark'
            }
        ])



        const projects = ref([
            {
                title: 'AICS Financial System',
                description: 'A windows application that handles the record of people that the government has given a financial aide in times of crisis. It is connected to the Governors Office, Provincial Social Welfare and Development Office and Provicial Treasurer Office.',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['VB.NET', 'Windows .NET Framework 4.5', 'MSSQL']
            },
            {
                title: 'COVID-19 Inventory Tracker',
                description: 'A windows application that keeps track of the donation and distribution of equipments and goods during the COVID-19 pandemic.',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['VB.NET', 'Windows .NET Framework 4.5', 'MSSQL']
            },
            {
                title: 'GFAS (Guimaras Faceshield and Social Distancing System)',
                description: 'A windows application that keeps track of people caught violating the Faceshield and Social Distancing Ordinance of the Province of Guimaras.',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['VB.NET', 'Windows .NET Framework 4.5', 'MSSQL']
            },
            {
                title: 'Hospital Inventory and Sales System',
                description: 'A windows application that keeps track of the inventory and sales of the Hospital Pharmacy for the Dr. Catalino Gallego Nava Hospital.',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['VB.NET', 'Windows .NET Framework 4.7', 'MySQL']
            },
            {
                title: 'Panilab Crawling System',
                description: 'A web based application that crawls data from different websites and stores it in a database to be processed.',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['PHP', 'Laravel', 'jQuery', 'MySQL', 'Bootstrap']
            },
            {
                title: 'Document Tracking System',
                description: 'A web based application that tracks and stores the documents being uploaded. It is also used to receive documents per office.',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['Laravel', 'jQuery', 'MySQL', 'Bootstrap']
            },
            {
                title: 'MoNF Project Management System',
                description: 'A web based application that manages the Projects that is being handled by the Company',
                image: 'https://picsum.photos/200',
                link: '',
                techstack: ['Laravel', 'VueJS', 'Vuetify', 'MySQL', 'Materio UI']
            }
        ])


        return {
            progList,
            frameworkList,
            projects,
            OSList,
            repositories,
            projectDevelopment,
            mdAndUp,

            icon: {
                account: mdilAccount,
                email: mdilEmail
            }
        }
    },
}
</script>



<style scoped>
    .techStackFont {
        font-size: larger;
    }

    .personalInfo {
        font-size: larger;
    }

    .italic-font {
        font: italic;
    }


</style>