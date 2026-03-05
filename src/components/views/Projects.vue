<template>
  <div>
    <!-- Page header -->
    <section class="projects-header">
      <v-container class="page-container">
        <h1 class="page-title">Projects</h1>
        <p class="page-subtitle">
          A selection of systems and applications I've built across government,
          healthcare, and enterprise environments.
        </p>
      </v-container>
    </section>

    <v-divider></v-divider>

    <!-- Projects list -->
    <section class="py-10">
      <v-container class="page-container">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-entry"
        >
          <v-card class="project-entry-card" elevation="0">
            <v-card-text class="pa-6">
              <!-- Header row -->
              <div class="mb-3">
                <h2 class="project-entry-title">{{ project.title }}</h2>
                <v-chip-group class="mt-2">
                  <v-chip
                    v-for="(lib, i) in project.librariesAndFrameworks"
                    :key="i"
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    {{ lib }}
                  </v-chip>
                </v-chip-group>
              </div>

              <p class="project-entry-desc">{{ project.description }}</p>

              <!-- Image gallery -->
              <template v-if="project.images.length > 0">
                <p class="gallery-label">Screenshots</p>
                <v-row class="mt-2">
                  <v-col
                    v-for="(image, imgIndex) in project.images"
                    :key="imgIndex"
                    :cols="mdAndUp ? 3 : 6"
                  >
                    <a :href="require('@/assets/images/' + image)" target="_blank">
                      <v-img
                        :src="require('@/assets/images/' + image)"
                        aspect-ratio="16/9"
                        cover
                        class="project-screenshot"
                      ></v-img>
                    </a>
                  </v-col>
                </v-row>
              </template>
              <p v-else class="no-images-text">No screenshots available</p>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { mdAndUp } = useDisplay()

    const projects = [
      {
        title: 'AICS Financial Aide System',
        description: 'A windows application that handles the record of people that the government has given a financial aide in times of crisis. It is connected to the Governors Office, Provincial Social Welfare and Development Office and Provincial Treasurer Office.',
        images: ['aics/aics-ss-1.png', 'aics/aics-ss-2.png', 'aics/aics-ss-3.png', 'aics/aics-ss-4.png'],
        librariesAndFrameworks: ['VB.NET', 'MySQL', '.NET Framework 4.5']
      },
      {
        title: 'Covid-19 Inventory Tracker',
        description: 'A windows application that keeps track of the donation and distribution of equipments and goods during the COVID-19 pandemic.',
        images: ['covid19/covid-ss-1.png', 'covid19/covid-ss-2.png', 'covid19/covid-ss-3.png', 'covid19/covid-ss-4.png'],
        librariesAndFrameworks: ['VB.NET', 'MySQL', '.NET Framework 4.5']
      },
      {
        title: 'GFAS (Guimaras Faceshield and Social Distancing System)',
        description: 'A windows application that keeps track of people caught violating the Faceshield and Social Distancing Ordinance of the Province of Guimaras.',
        images: [],
        librariesAndFrameworks: ['VB.NET', 'MySQL', '.NET Framework 4.5']
      },
      {
        title: 'Hospital Inventory and Sales System',
        description: 'A windows application that keeps track of the inventory and sales of the Hospital Pharmacy for the Dr. Catalino Gallego Nava Hospital.',
        images: ['hiss/hiss-ss-1.png', 'hiss/hiss-ss-2.png', 'hiss/hiss-ss-3.png', 'hiss/hiss-ss-4.png', 'hiss/hiss-ss-5.png'],
        librariesAndFrameworks: ['VB.NET', 'MySQL', '.NET Framework 4.5']
      },
      {
        title: 'Panilab Crawling System',
        description: 'A web based application that crawls data from different websites and stores it in a database to be processed.',
        images: ['panilab/panilab-ss-1.png', 'panilab/panilab-ss-2.png', 'panilab/panilab-ss-3.png', 'panilab/panilab-ss-4.png', 'panilab/panilab-ss-5.png'],
        librariesAndFrameworks: ['Laravel(PHP)', 'MySQL', 'Bootstrap', 'jQuery']
      },
      {
        title: 'Document Tracking System',
        description: 'A web based application that tracks and stores the documents being uploaded. It is also used to receive documents per office.',
        images: ['dts/dts-ss-1.png', 'dts/dts-ss-2.png', 'dts/dts-ss-3.png', 'dts/dts-ss-4.png', 'dts/dts-ss-5.png', 'dts/dts-ss-6.png', 'dts/dts-ss-7.png'],
        librariesAndFrameworks: ['Laravel(PHP)', 'MySQL', 'Bootstrap', 'jQuery']
      },
      {
        title: 'MoNF Project Management System',
        description: 'A web based application that manages the Projects that is being handled by the MoNF Company. It has features such as Project Management, Task Management, Time Tracking, and Invoicing.',
        images: ['monf/monf-ss-1.png', 'monf/monf-ss-2.png', 'monf/monf-ss-3.png', 'monf/monf-ss-4.png', 'monf/monf-ss-5.png', 'monf/monf-ss-6.png', 'monf/monf-ss-7.png', 'monf/monf-ss-8.png'],
        librariesAndFrameworks: ['Laravel(PHP)', 'VueJS', 'Vuetify', 'MySQL', 'Materio UI']
      },
      {
        title: 'PGG (Province of Guimaras) Accounting System',
        description: 'An accounting system that is being built on an existing system of the Accounting Department.',
        images: ['pgg-accounting-system/pgga-ss-1.png', 'pgg-accounting-system/pgga-ss-2.png', 'pgg-accounting-system/pgga-ss-3.png', 'pgg-accounting-system/pgga-ss-4.png', 'pgg-accounting-system/pgga-ss-5.png', 'pgg-accounting-system/pgga-ss-6.png', 'pgg-accounting-system/pgga-ss-7.png', 'pgg-accounting-system/pgga-ss-8.png', 'pgg-accounting-system/pgga-ss-9.png', 'pgg-accounting-system/pgga-ss-10.png'],
        librariesAndFrameworks: ['Laravel(PHP)', 'VueJS', 'Vuetify', 'MySQL', 'Materio UI']
      }
    ]

    return { projects, mdAndUp }
  },
}
</script>

<style scoped>
.projects-header {
  padding: 48px 0 32px;
  background-color: #f9fafb;
}
.page-title {
  font-size: 28px;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 8px;
}
.page-subtitle {
  font-size: 15px;
  color: #555555;
  max-width: 600px;
  margin-bottom: 0;
}
.project-entry {
  margin-bottom: 24px;
}
.project-entry-card {
  border: 1px solid #e3e3e3 !important;
  border-radius: 6px;
}
.project-entry-title {
  font-size: 17px;
  font-weight: 600;
  color: #1E1E1E;
}
.project-entry-desc {
  font-size: 14px;
  color: #555555;
  line-height: 1.7;
  margin-top: 12px;
  max-width: 720px;
  margin-bottom: 0;
}
.gallery-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #777777;
  margin-top: 20px;
  margin-bottom: 4px;
}
.project-screenshot {
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  transition: opacity 300ms ease-in-out;
}
.project-screenshot:hover {
  opacity: 0.85;
}
.no-images-text {
  font-size: 13px;
  color: #999999;
  font-style: italic;
  margin-top: 12px;
  margin-bottom: 0;
}
</style>
