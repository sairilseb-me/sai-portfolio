<template>
  <div>
    <!-- Page header -->
    <section class="contact-header">
      <v-container class="page-container">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Have a project in mind or just want to say hello? Reach out through any of the channels below.
        </p>
      </v-container>
    </section>

    <v-divider></v-divider>

    <section class="py-12">
      <v-container class="page-container">
        <v-row justify="center">
          <v-col :cols="mdAndUp ? 6 : 12">
            <div class="contact-info-block">
              <div class="contact-info-item">
                <v-icon class="contact-icon">
                  <svg-icon type="mdi" :path="icons.email"></svg-icon>
                </v-icon>
                <div>
                  <p class="contact-info-label">Email</p>
                  <a href="mailto:cyrilseberiaga@gmail.com" class="contact-info-value">
                    cyrilseberiaga@gmail.com
                  </a>
                </div>
              </div>

              <v-divider class="my-5"></v-divider>

              <div class="contact-info-item">
                <v-icon class="contact-icon">
                  <i class="devicon-linkedin-plain"></i>
                </v-icon>
                <div>
                  <p class="contact-info-label">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/sairilseberiaga/"
                    target="_blank"
                    class="contact-info-value"
                  >
                    linkedin.com/in/sairilseberiaga
                  </a>
                </div>
              </div>

              <v-divider class="my-5"></v-divider>

              <div class="contact-info-item">
                <v-icon class="contact-icon">
                  <i class="devicon-github-original"></i>
                </v-icon>
                <div>
                  <p class="contact-info-label">GitHub</p>
                  <a
                    href="https://github.com/sairilseb-me"
                    target="_blank"
                    class="contact-info-value"
                  >
                    github.com/sairilseb-me
                  </a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdilEmail } from '@mdi/light-js'
import { useDisplay } from 'vuetify'

export default {
  components: { SvgIcon },
  setup() {
    const { mdAndUp } = useDisplay()
    return {
      mdAndUp,
      icons: { email: mdilEmail }
    }
  },
}
</script>

<style scoped>
.contact-header {
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
  max-width: 480px;
  margin-bottom: 0;
}
.contact-info-block {
  padding: 32px;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  background-color: #f9fafb;
}
.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.contact-icon {
  color: #1677be;
  font-size: 22px;
  margin-top: 2px;
  flex-shrink: 0;
}
.contact-info-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 4px;
}
.contact-info-value {
  font-size: 15px;
  color: #333333;
  word-break: break-all;
  text-decoration: none;
}
.contact-info-value:hover {
  color: #1677be;
  text-decoration: underline;
}
</style>
