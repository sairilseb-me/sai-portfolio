<template>
    <v-container>
        <v-row>
            <v-col :cols="mdAndUp ? '6' : '12'">
                <div class="my-12">
                    <v-img
                        height="820"
                        :aspect-ratio="1"
                        cover
                        :src="require('@/assets/images/Sairil.png')"
                    ></v-img>
                </div>
            </v-col>
            <v-col :cols="mdAndUp ? '6' : '12'">
                <v-card flat class="mt-10">
                <v-card-text>
                    <p class="text-h3 mb-5">About</p>
                    <v-divider></v-divider>

                    <p class="my-3 font-weight-regular">
                    I am a results-driven Software Developer and QA Engineer with over 5 years of experience building and testing scalable, real-world systems for government agencies and startups. I specialize in full-stack development, test automation, and agile project management.
                    </p>

                    <p class="my-3 font-weight-regular">
                    I currently serve as Computer Programmer III at DSWD Field Office 6, where I lead QA efforts, develop cross-matching and automation systems using Python, React, and Flask, and help standardize testing practices. I also serve as SCRUM Master, improving team collaboration and sprint delivery.
                    </p>

                    <p class="my-3 font-weight-regular">
                    Previously, I worked as Computer Programmer II for the Province of Guimaras. I built several mission-critical systems from scratch, including a Financial Assistance System (AICS) connecting three departments, a Document Storage System integrating NAS and local storage, and a Budget and Accounting System enabling multi-department reporting.
                    </p>

                    <p class="my-3 font-weight-regular">
                    I also worked as a Freelance Developer for WSoft, a startup company in Korea, where I created a system to crawl websites and save gathered data using Laravel and Blade Template. Additionally, I contribute to Project Neo Dev, a community that helps developers gain real-world experience by building applications with React and Tailwind CSS.
                    </p>

                    <p class="my-3 font-weight-regular">
                    I have experience managing networks using Point-to-Point and NanoStation devices, supporting live A/V events for social media and Zoom, and assisting departments with hardware specification and troubleshooting. I also maintain custom pages on the official website of the Province of Guimaras using WordPress.
                    </p>

                    <p class="my-3 font-weight-regular">
                    In my free time, I enjoy learning new technologies including Linux, Docker, and automation scripting with Python. I have created scripts for email parsing using SimpleGmail, data visualization with Streamlit, and automated testing with tools like Selenium, Gherkin, Cypress, Playwright, and JMeter.
                    </p>

                    <p class="my-3 font-weight-regular">
                    I am a self-taught problem solver with a passion for continuous learning. I am proud to have passed the Civil Service Exam (Professional), earned a Superior rating in the PTE English Exam, and received the “Most Improved Participant” award from DICT’s Python Training of Trainers program.
                    </p>

                    <p class="my-3 font-weight-regular">
                    I take pride in being a team player, a lifelong learner, and someone who always aims to deliver quality and efficiency in every project I work on.
                    </p>

                </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useDisplay } from 'vuetify';
export default {
    
    setup() {
        const {mdAndUp} = useDisplay()

        return {
            mdAndUp
        }
    },
}
</script>