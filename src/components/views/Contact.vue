<template>
    <v-container>
        <v-row class="d-flex align-center" style="height: 100vh;">
            <v-col md="6">
                <v-card class="pa-8">
                    <v-card-title>Contact Me</v-card-title>
                    <v-card-text>
                        <v-form>
                            <div class="d-flex">
                                <v-text-field label="First Name" class="mr-2" variant="solo-filled" density="compact"></v-text-field>
                                <v-text-field label="Last Name" class="mr-2" variant="solo-filled" density="compact"></v-text-field>
                            </div>
                            <div>
                                <v-text-field label="Email" variant="solo-filled" density="compact" type="email"></v-text-field>
                            </div>
                            <div>
                                <v-textarea label="Message" variant="solo-filled" density="compact"></v-textarea>
                            </div>
                            <div>
                                <v-btn color="primary">Submit</v-btn>
                            </div>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card class="pa-8">
                    <v-card-title>You can contact me through the following:</v-card-title>
                    <v-card-text>
                        <v-icon>
                                <svg-icon type="mdi" :path="icons.email"></svg-icon>
                        </v-icon>
                        <span class="ml-2">cyrilseberiaga@gmail.com</span>
                        <div class="mt-2">
                            <v-icon>
                                <i class="devicon-linkedin-plain"></i>
                            </v-icon>
                            <span class="ml-2">https://www.linkedin.com/in/sairilseberiaga/</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>  
        </v-row>
    </v-container>
</template>


<script>

import SvgIcon from '@jamescoyle/vue-icon';
import { mdilAccount, mdilEmail } from '@mdi/light-js';
export default {
    components: {
        SvgIcon
    },
    setup() {
        

        return {

            // icons
            icons: {
                email: mdilEmail
            }
        }
    },
}
</script>