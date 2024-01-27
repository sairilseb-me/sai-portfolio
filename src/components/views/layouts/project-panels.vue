<template>
    <v-expansion-panels variant="accordion">
        <v-expansion-panel>
            <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
            <v-expansion-panel-text>   
                <p class="mb-3">{{ project.description }}</p>
                <v-divider></v-divider>
                <p class="text-subtitle-1 mt-3">TechStack:</p>
                <v-chip-group column class="mb-3">
                    <v-chip  v-for="(tech, index) in project.techstack" :key="index">{{ tech }}</v-chip>
                </v-chip-group> 
                <v-divider></v-divider>
                <v-btn class="bg-purple text-white mt-3" @click="routeToProject">Project Details</v-btn>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    props: {
        project: {
            type: Object,
            default: {}
        }
    },
    setup() {
        const router = useRouter()
        const routeToProject = () => {
            router.push({path: '/projects'})
        }

        return {
            routeToProject
        }
    },
}
</script>