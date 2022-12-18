import HelloVuetify from '@/components/HelloVuetify.vue'
import HelloTailwind from '@/components/HelloTailwind.vue'
import Vue from 'vue'

const Components = {
    HelloVuetify,
    HelloTailwind
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components