<template>
  <div>
    <!-- Page header -->
    <section class="about-header">
      <v-container class="page-container">
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">
          Developer, QA engineer, and lifelong learner based in the Philippines.
        </p>
      </v-container>
    </section>

    <v-divider></v-divider>

    <section class="py-12">
      <v-container class="page-container">
        <v-row>
          <!-- Portrait column -->
          <v-col :cols="mdAndUp ? 4 : 12" class="d-flex justify-center">
            <div class="about-portrait-wrap">
              <v-img
                :src="require('@/assets/images/Sairil.png')"
                width="340"
                height="420"
                cover
                class="about-portrait"
              ></v-img>
            </div>
          </v-col>

          <!-- Bio column -->
          <v-col :cols="mdAndUp ? 8 : 12">
            <div class="about-bio">
              <p>
                I am a results-driven Software Developer and QA Engineer with over 5 years of experience
                building and testing scalable, real-world systems for government agencies and startups.
                I specialize in full-stack development, test automation, and agile project management.
              </p>

              <p>
                I currently serve as Computer Programmer III at DSWD Field Office 6, where I lead QA
                efforts, develop cross-matching and automation systems using Python, React, and Flask, and
                help standardize testing practices. I also serve as SCRUM Master, improving team
                collaboration and sprint delivery.
              </p>

              <p>
                Previously, I worked as Computer Programmer II for the Province of Guimaras. I built
                several mission-critical systems from scratch, including a Financial Assistance System
                (AICS) connecting three departments, a Document Storage System integrating NAS and local
                storage, and a Budget and Accounting System enabling multi-department reporting.
              </p>

              <p>
                I also worked as a Freelance Developer for WSoft, a startup company in Korea, where I
                created a system to crawl websites and save gathered data using Laravel and Blade Template.
                Additionally, I contribute to Project Neo Dev, a community that helps developers gain
                real-world experience by building applications with React and Tailwind CSS.
              </p>

              <p>
                I have experience managing networks using Point-to-Point and NanoStation devices,
                supporting live A/V events for social media and Zoom, and assisting departments with
                hardware specification and troubleshooting.
              </p>

              <p>
                In my free time, I enjoy learning new technologies including Linux, Docker, and automation
                scripting with Python. I have created scripts for email parsing, data visualization with
                Streamlit, and automated testing with tools like Selenium, Gherkin, Cypress, Playwright,
                and JMeter.
              </p>

              <p>
                I am a self-taught problem solver with a passion for continuous learning. I am proud to
                have passed the Civil Service Exam (Professional), earned a Superior rating in the PTE
                English Exam, and received the "Most Improved Participant" award from DICT's Python
                Training of Trainers program.
              </p>

              <!-- Quick stats -->
              <div class="about-highlights mt-6">
                <div class="highlight-item">
                  <span class="highlight-number">5+</span>
                  <span class="highlight-label">Years of Experience</span>
                </div>
                <div class="highlight-item">
                  <span class="highlight-number">8+</span>
                  <span class="highlight-label">Projects Shipped</span>
                </div>
                <div class="highlight-item">
                  <span class="highlight-number">3+</span>
                  <span class="highlight-label">Government Systems</span>
                </div>
              </div>

              <div class="mt-8 d-flex ga-3 flex-wrap">
                <v-btn
                  color="primary"
                  href="https://drive.google.com/file/d/194kn4Auj_YjceLhFEZACS_Ki53v8H2S7/view?usp=sharing"
                  target="_blank"
                >
                  Download CV
                </v-btn>
                <v-btn variant="outlined" color="primary" to="/contact">
                  Get in Touch
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { mdAndUp } = useDisplay()
    return { mdAndUp }
  },
}
</script>

<style scoped>
.about-header {
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
  margin-bottom: 0;
}
.about-portrait-wrap {
  position: sticky;
  top: 80px;
}
.about-portrait {
  border-radius: 8px;
  border: 1px solid #e3e3e3;
}
.about-bio p {
  font-size: 15px;
  color: #444444;
  line-height: 1.75;
  margin-bottom: 16px;
}
.about-highlights {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding: 24px;
  background: #f9fafb;
  border-radius: 6px;
  border: 1px solid #e3e3e3;
}
.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.highlight-number {
  font-size: 28px;
  font-weight: 700;
  color: #1677be;
}
.highlight-label {
  font-size: 12px;
  color: #777777;
  font-weight: 500;
  text-align: center;
}
</style>
