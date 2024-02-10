<template>
    <v-container>
        <v-row>
            <v-navigation-drawer>
                <v-row class="my-5">
                    <v-col class="d-flex justify-center">
                        <h3>My Projects</h3>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                        <v-list
                        v-for="(project, index) in projects" :key="index"
                    >
                        <v-list-item :title="project.title"></v-list-item>
                    </v-list>
                    </v-col>
                </v-row>
                
            </v-navigation-drawer>
        </v-row>
        <v-row>
            <v-col md="12">
                <h2>Projects</h2>
            </v-col>
            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel v-for="(project, index) in projects" :key="index" class="mb-3">
                        <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <p class="mb-3">{{ project.description }}</p>
                            <v-divider></v-divider>
                            <p class="my-3">Images</p>
                            <div v-if="project.images.length > 0">
                                <v-row class="mb-3">
                                    <v-col v-for="(image, index) in project.images" :key="index" :cols="mdAndUp ? '3' : '12'">
                                        <a :href="require('@/assets/images/' + image)">
                                            <v-img :src="require('@/assets/images/' + image)" aspect-ratio="6/9"></v-img>
                                        </a>
                                    </v-col>   
                                </v-row>
                            </div>
                            <div v-else>
                                <p class="my-3">No images available</p>
                            </div>
                            <v-divider></v-divider>
                            <v-chip-group class="my-3">
                                <v-chip v-for="(lib, index) in project.librariesAndFrameworks" :key="index">
                                    {{ lib }}
                                </v-chip>
                            </v-chip-group>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import { useDisplay } from 'vuetify';
export default {
    setup() {
        
        const {mdAndUp} = useDisplay()
        const projects = [
            {
                title: 'AICS Financial Aide Sytem',
                description: 'A windows application that handles the record of people that the government has given a financial aide in times of crisis. It is connected to the Governors Office, Provincial Social Welfare and Development Office and Provicial Treasurer Office.',
                images: ['aics/aics-ss-1.png', 'aics/aics-ss-2.png', 'aics/aics-ss-3.png', 'aics/aics-ss-4.png'],
                librariesAndFrameworks: [
                    'VB.NET',
                    'MySQL',
                    '.NET Framework 4.5'
                ]
            },
            {
                title: 'Covid-19 Inventory Tracker',
                description: 'A windows application that keeps track of the donation and distribution of equipments and goods during the COVID-19 pandemic.',
                images: ['covid19/covid-ss-1.png', 'covid19/covid-ss-2.png', 'covid19/covid-ss-3.png', 'covid19/covid-ss-4.png'],
                librariesAndFrameworks: [
                    'VB.NET',
                    'MySQL',
                    '.NET Framework 4.5'
                ]
            },
            {
                title: 'GFAS (Guimaras Faceshield and Social Distancing System)',
                description: 'A windows application that keeps track of people caught violating the Faceshield and Social Distancing Ordinance of the Province of Guimaras.',
                images: [],
                librariesAndFrameworks: [
                    'VB.NET',
                    'MySQL',
                    '.NET Framework 4.5'
                ]
            },
            {
                title: 'Hospital Inventory and Sales System',
                description: 'A windows application that keeps track of the inventory and sales of the Hospital Pharmacy for the Dr. Catalino Gallego Nava Hospital.',
                images: ['hiss/hiss-ss-1.png', 'hiss/hiss-ss-2.png', 'hiss/hiss-ss-3.png', 'hiss/hiss-ss-4.png', 'hiss/hiss-ss-5.png'],
                librariesAndFrameworks: [
                    'VB.NET',
                    'MySQL',
                    '.NET Framework 4.5'
                ]
            },
            {
                title: 'Panilab Crawling System',
                description: 'A web based application that crawls data from different websites and stores it in a database to be processed.',
                images: ['panilab/panilab-ss-1.png', 'panilab/panilab-ss-2.png', 'panilab/panilab-ss-3.png', 'panilab/panilab-ss-4.png', 'panilab/panilab-ss-5.png'],
                librariesAndFrameworks: [
                    'Laravel(PHP)',
                    'MySQL',
                    'Bootstrap',
                    'jQuery'
                ]
            },
            {
                title: 'Document Tracking System',
                description: 'A web based application that tracks and stores the documents being uploaded. It is also used to receive documents per office.',
                images: ['dts/dts-ss-1.png', 'dts/dts-ss-2.png', 'dts/dts-ss-3.png', 'dts/dts-ss-4.png', 'dts/dts-ss-5.png', 'dts/dts-ss-6.png', 'dts/dts-ss-7.png'],
                librariesAndFrameworks: [
                    'Laravel(PHP)',
                    'MySQL',
                    'Bootstrap',
                    'jQuery'
                ]
            },
            {
                title: 'MoNF Project Management System',
                description: 'A web based application that manages the Projects that is being handled by the MoNF Company. It has features such as Project Management, Task Management, Time Tracking, and Invoicing.',
                images: ['monf/monf-ss-1.png', 'monf/monf-ss-2.png', 'monf/monf-ss-3.png', 'monf/monf-ss-4.png', 'monf/monf-ss-5.png', 'monf/monf-ss-6.png', 'monf/monf-ss-7.png', 'monf/monf-ss-8.png'],
                librariesAndFrameworks: [
                    'Laravel(PHP)',
                    'VueJS',
                    'Vuetify',
                    'MySQL',
                    'Materio UI',
                ]
            },
            {
                title: 'PGG (Province of Guimaras) Accounting System',
                description: 'An accounting system that is being on an existing system of the Accounting Department.',
                images: ['pgg-accounting-system/pgga-ss-1.png', 'pgg-accounting-system/pgga-ss-2.png', 'pgg-accounting-system/pgga-ss-3.png', 'pgg-accounting-system/pgga-ss-4.png', 'pgg-accounting-system/pgga-ss-5.png', 'pgg-accounting-system/pgga-ss-6.png', 'pgg-accounting-system/pgga-ss-7.png', 'pgg-accounting-system/pgga-ss-8.png', 'pgg-accounting-system/pgga-ss-9.png', 'pgg-accounting-system/pgga-ss-10.png'],
                librariesAndFrameworks: [
                    'Laravel(PHP)',
                    'VueJS',
                    'Vuetify',
                    'MySQL',
                    'Materio UI',
                ]
            }
        ]

        return {
            //variables
            projects,
            mdAndUp,

            //methods
            
        }
    },
}
</script>