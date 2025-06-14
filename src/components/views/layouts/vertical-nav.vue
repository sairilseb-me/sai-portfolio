<template>
    <v-app-bar title="Sai Portfolio">
        <v-menu>
            <template v-slot:activator="{props}">
                <v-btn
                    v-bind="props"
                    class="text-purple"
                >
                    <v-icon>
                        <svg-icon type="mdi" :path="icons.menu"></svg-icon>
                    </v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="link in links"
                    :key="link.title"
                    @click="routeTo(link.link)"
                >
                    <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { useRouter } from 'vue-router'
import { mdilMenu } from '@mdi/light-js';
export default {
    components: {
        SvgIcon
    },
    setup() {

        const openDrawer = ref(false)
        const router = useRouter()
        const routeTo = (path) => {
            router.push(path)
        }

        const links = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'About',
                link: '/about'
            },
            {
                title: 'Projects',
                link: '/projects'
            },
            {
                title: 'Contact',
                link: '/contact'
            },
            {
                title: 'Privacy Policy',
                link: '/privacy-policy'
            }
        ]

        return {
            openDrawer,
            links,
            routeTo,

            icons: {
                menu: mdilMenu,
            }
        }

    },
}
</script>