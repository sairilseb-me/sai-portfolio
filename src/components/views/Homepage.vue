<template>
  <div>
    <!-- ======= HERO ======= -->
    <section class="hero-section">
      <v-container class="page-container">
        <v-row align="center">
          <v-col :cols="mdAndUp ? 6 : 12" class="hero-text-col">
            <p class="hero-label">Hello, I'm</p>
            <h1 class="hero-name">Sairil Seberiaga</h1>
            <p class="hero-role">Software Developer · SQE · SCRUM Master · Team Lead</p>
            <p class="hero-bio">
              A versatile Software Developer with over 5 years of experience building full-stack
              applications using Laravel, Vue 3, React, and Python. Passionate about clean code,
              automation testing, and collaborative engineering.
            </p>
            <div class="d-flex ga-3 mt-6 flex-wrap">
              <v-btn
                color="primary"
                href="https://drive.google.com/file/d/194kn4Auj_YjceLhFEZACS_Ki53v8H2S7/view?usp=sharing"
                target="_blank"
                class="hero-cta"
              >
                Download CV
              </v-btn>
              <v-btn
                variant="outlined"
                color="primary"
                to="/contact"
                class="hero-cta"
              >
                Contact Me
              </v-btn>
            </div>
          </v-col>
          <v-col v-if="mdAndUp" cols="6" class="d-flex justify-center">
            <v-img
              :src="require('@/assets/images/sairil-headshot.jpeg')"
              max-width="420"
              aspect-ratio="1"
              cover
              class="hero-image"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-divider></v-divider>

    <!-- ======= TECH STACK ======= -->
    <section class="section-alt py-12">
      <v-container class="page-container">
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-subtitle">Tools and technologies I work with regularly</p>

        <div v-for="group in stackGroups" :key="group.label" class="stack-group">
          <h3 class="stack-label">{{ group.label }}</h3>
          <div class="stack-icons">
            <div
              v-for="(item, i) in group.items"
              :key="i"
              class="stack-icon-item"
              :title="item.title"
            >
              <i v-if="item.icon" :class="[item.icon, 'stack-icon']"></i>
              <span v-else class="stack-text-icon">{{ item.title }}</span>
              <span class="stack-icon-label">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <v-divider></v-divider>

    <!-- ======= EXPERIENCE TIMELINE ======= -->
    <section class="py-12">
      <v-container class="page-container">
        <h2 class="section-title">Experience</h2>
        <p class="section-subtitle">My career journey and professional growth</p>

        <v-timeline
          :side="mdAndUp ? 'end' : 'end'"
          align="start"
          truncate-line="both"
          line-color="#e3e3e3"
          line-thickness="2"
        >
          <v-timeline-item
            v-for="(job, i) in experience"
            :key="i"
            :dot-color="job.current ? 'primary' : '#aaaaaa'"
            size="small"
            fill-dot
          >
            <template #opposite>
              <span class="timeline-date" :class="{ 'timeline-date--current': job.current }">
                {{ job.period }}
              </span>
            </template>

            <v-card class="timeline-card" elevation="0">
              <v-card-text class="pa-4">
                <div class="d-flex align-center flex-wrap gap-2 mb-1">
                  <h3 class="timeline-title">{{ job.title }}</h3>
                  <v-chip v-if="job.current" size="x-small" color="primary" variant="flat" class="ml-1">
                    Current
                  </v-chip>
                </div>
                <p class="timeline-company">{{ job.company }}</p>
                <p class="timeline-desc">{{ job.description }}</p>
                <v-chip-group v-if="job.tags" class="mt-2">
                  <v-chip
                    v-for="(tag, t) in job.tags"
                    :key="t"
                    size="x-small"
                    variant="outlined"
                    color="primary"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </section>

    <v-divider></v-divider>

    <!-- ======= FEATURED PROJECTS ======= -->
    <section class="py-12">
      <v-container class="page-container">
        <div class="d-flex align-center justify-space-between mb-8">
          <h2 class="section-title mb-0">Featured Projects</h2>
          <router-link to="/projects" class="view-all-link">View all projects →</router-link>
        </div>

        <v-row>
          <v-col
            v-for="(project, index) in featuredProjects"
            :key="index"
            :cols="mdAndUp ? 4 : 12"
          >
            <v-card class="project-card h-100" elevation="0">
              <v-card-text class="pa-5">
                <h3 class="project-card-title">{{ project.title }}</h3>
                <p class="project-card-desc">{{ project.description }}</p>
                <v-chip-group class="mt-3">
                  <v-chip
                    v-for="(tech, i) in project.techstack.slice(0, 3)"
                    :key="i"
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="pa-4">
                <v-btn
                  variant="text"
                  color="primary"
                  size="small"
                  to="/projects"
                  class="view-details-btn"
                >
                  View Details →
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { mdAndUp } = useDisplay()

    const stackGroups = [
      {
        label: 'Languages',
        items: [
          { title: 'PHP',        icon: 'devicon-php-plain' },
          { title: 'JavaScript', icon: 'devicon-javascript-plain' },
          { title: 'Python',     icon: 'devicon-python-plain-wordmark' },
          { title: 'VB.NET',     icon: '' },
        ]
      },
      {
        label: 'Frameworks',
        items: [
          { title: 'Laravel',   icon: 'devicon-laravel-plain-wordmark' },
          { title: 'Vue JS',    icon: 'devicon-vuejs-plain-wordmark' },
          { title: 'Bootstrap', icon: 'devicon-bootstrap-plain-wordmark' },
          { title: 'Tailwind',  icon: 'devicon-tailwindcss-original-wordmark' },
          { title: 'Flask',     icon: 'devicon-flask-original' },
          { title: 'jQuery',    icon: 'devicon-jquery-plain-wordmark' },
          { title: 'Vuetify',   icon: 'devicon-vuetify-line' },
        ]
      },
      {
        label: 'Tools & DevOps',
        items: [
          { title: 'Docker',   icon: 'devicon-docker-plain' },
          { title: 'Jenkins',  icon: 'devicon-jenkins-line' },
          { title: 'JIRA',     icon: 'devicon-jira-plain' },
          { title: 'VSCode',   icon: 'devicon-vscode-plain' },
          { title: 'GitHub',   icon: 'devicon-github-original' },
          { title: 'GitLab',   icon: 'devicon-gitlab-plain' },
          { title: 'Bitbucket', icon: 'devicon-bitbucket-original' },
        ]
      },
      {
        label: 'QA & Testing',
        items: [
          { title: 'Selenium',   icon: 'devicon-selenium-original' },
          { title: 'Cypress',    icon: 'devicon-cypressio-plain' },
          { title: 'Playwright', icon: '' },
          { title: 'K6',         icon: '' },
          { title: 'Gherkin',    icon: '' },
        ]
      },
    ]

    const projects = ref([
      {
        title: 'AICS Financial System',
        description: 'A windows application that handles the record of people that the government has given a financial aide in times of crisis. It is connected to the Governors Office, Provincial Social Welfare and Development Office and Provincial Treasurer Office.',
        techstack: ['VB.NET', 'Windows .NET Framework 4.5', 'MSSQL']
      },
      {
        title: 'COVID-19 Inventory Tracker',
        description: 'A windows application that keeps track of the donation and distribution of equipments and goods during the COVID-19 pandemic.',
        techstack: ['VB.NET', 'Windows .NET Framework 4.5', 'MSSQL']
      },
      {
        title: 'GFAS (Guimaras Faceshield and Social Distancing System)',
        description: 'A windows application that keeps track of people caught violating the Faceshield and Social Distancing Ordinance of the Province of Guimaras.',
        techstack: ['VB.NET', 'Windows .NET Framework 4.5', 'MSSQL']
      },
      {
        title: 'Hospital Inventory and Sales System',
        description: 'A windows application that keeps track of the inventory and sales of the Hospital Pharmacy for the Dr. Catalino Gallego Nava Hospital.',
        techstack: ['VB.NET', 'Windows .NET Framework 4.7', 'MySQL']
      },
      {
        title: 'Panilab Crawling System',
        description: 'A web based application that crawls data from different websites and stores it in a database to be processed.',
        techstack: ['PHP', 'Laravel', 'jQuery', 'MySQL', 'Bootstrap']
      },
      {
        title: 'Document Tracking System',
        description: 'A web based application that tracks and stores the documents being uploaded. It is also used to receive documents per office.',
        techstack: ['Laravel', 'jQuery', 'MySQL', 'Bootstrap']
      },
      {
        title: 'MoNF Project Management System',
        description: 'A web based application that manages the Projects that is being handled by the Company',
        techstack: ['Laravel', 'VueJS', 'Vuetify', 'MySQL', 'Materio UI']
      },
      {
        title: 'Crossmatching Script',
        description: 'A script that can crossmatch data from main consolidated data to data that was provided by constituents.',
        techstack: ['Python', 'Vue 3', 'MySQL', 'Vuetify', 'Flask', 'Pandas']
      },
      {
        title: 'eHakus V2',
        description: 'An advanced HR system with self-service features for employees to file leaves, view payslips, and update records. It streamlines approvals, automates workflows, and improves efficiency and transparency across HR processes.',
        techstack: ['Laravel', 'MySQL', 'Vue 3', 'Vuetify']
      },
    ])

    const featuredProjects = computed(() => projects.value.slice(0, 3))

    const experience = [
      {
        period: '2024 – Present',
        title: 'Computer Programmer III',
        company: 'DSWD Field Office 6 · Full-time',
        description: 'Lead QA efforts across internal systems, developing cross-matching and automation tools using Python, React, and Flask. Serve as SCRUM Master to improve team collaboration, sprint velocity, and standardize testing practices across the department.',
        tags: ['Python', 'React', 'Flask', 'Selenium', 'Playwright', 'SCRUM'],
        current: true,
      },
      {
        period: '2019 – 2024',
        title: 'Computer Programmer II',
        company: 'Province of Guimaras · Full-time',
        description: 'Built mission-critical government systems from scratch — including the AICS Financial Assistance System (connecting three departments), a Document Tracking System integrating NAS and local storage, and a Budget & Accounting System for multi-department reporting. Also managed the provincial network infrastructure and maintained the official website.',
        tags: ['VB.NET', 'Laravel', 'MySQL', 'Vue JS', 'WordPress', 'Network Admin'],
        current: false,
      },
      {
        period: '2021 – 2022',
        title: 'Freelance Developer',
        company: 'WSoft · Contract (South Korea)',
        description: 'Developed a web crawling system that scraped and aggregated data from multiple websites into a structured database. Delivered the full solution remotely using Laravel and Blade Templates.',
        tags: ['Laravel', 'PHP', 'jQuery', 'MySQL', 'Bootstrap'],
        current: false,
      },
      {
        period: '2022 – Present',
        title: 'Open Source Contributor',
        company: 'Project Neo Dev · Community',
        description: 'Active contributor in a developer community helping aspiring engineers gain real-world project experience. Collaborate on building web applications using React and Tailwind CSS as practical portfolio projects.',
        tags: ['React', 'Tailwind CSS', 'Mentoring'],
        current: false,
      },
    ]

    return {
      mdAndUp,
      stackGroups,
      projects,
      featuredProjects,
      experience,
    }
  },
}
</script>

<style scoped>
/* Hero */
.hero-section {
  padding: 80px 0 60px;
  background-color: #ffffff;
}
.hero-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #1677be;
  margin-bottom: 8px;
}
.hero-name {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 600;
  color: #1E1E1E;
  line-height: 1.2;
  margin-bottom: 12px;
}
.hero-role {
  font-size: 16px;
  font-weight: 500;
  color: #555555;
  margin-bottom: 16px;
}
.hero-bio {
  font-size: 15px;
  color: #555555;
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 0;
}
.hero-image {
  border-radius: 8px;
  border: 1px solid #e3e3e3;
}
.hero-cta {
  padding: 12px 24px !important;
  font-weight: 500;
}

/* Section headings */
.section-title {
  font-size: 22px;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 6px;
}
.section-subtitle {
  font-size: 14px;
  color: #777777;
  margin-bottom: 32px;
}

/* Tech Stack */
.stack-group {
  margin-bottom: 32px;
}
.stack-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #777777;
  margin-bottom: 16px;
}
.stack-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.stack-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 64px;
  text-align: center;
}
.stack-icon {
  font-size: 36px;
  color: #333333;
}
.stack-text-icon {
  font-size: 11px;
  font-weight: 600;
  color: #333333;
  background: #eeeeee;
  padding: 8px 4px;
  border-radius: 4px;
  width: 48px;
  text-align: center;
  line-height: 1.2;
}
.stack-icon-label {
  font-size: 11px;
  color: #777777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 64px;
  text-align: center;
}

/* Project cards */
.project-card {
  border: 1px solid #e3e3e3 !important;
  border-radius: 6px;
  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;
}
.project-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
  transform: translateY(-2px);
}
.project-card-title {
  font-size: 15px;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 8px;
}
.project-card-desc {
  font-size: 13px;
  color: #555555;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0;
}
.view-all-link {
  font-size: 14px;
  font-weight: 500;
  color: #1677be;
  text-decoration: none;
}
.view-all-link:hover {
  text-decoration: underline;
}
.view-details-btn {
  font-size: 13px;
  font-weight: 500;
  padding-left: 0 !important;
}

/* Timeline */
.timeline-date {
  font-size: 13px;
  font-weight: 600;
  color: #999999;
  white-space: nowrap;
}
.timeline-date--current {
  color: #1677be;
}
.timeline-card {
  border: 1px solid #e3e3e3 !important;
  border-radius: 6px;
  margin-bottom: 16px;
}
.timeline-title {
  font-size: 15px;
  font-weight: 600;
  color: #1E1E1E;
}
.timeline-company {
  font-size: 13px;
  font-weight: 500;
  color: #1677be;
  margin-bottom: 6px;
}
.timeline-desc {
  font-size: 13px;
  color: #555555;
  line-height: 1.6;
  margin-bottom: 0;
}
</style>
