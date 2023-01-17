import HelloVuetify from '@/components/HelloVuetify.vue'
import HelloTailwind from '@/components/HelloTailwind.vue'

const components = {
    HelloVuetify,
    HelloTailwind
}

const gnunezComponents = {
    install(Vue) {
        Object.keys(components).forEach(name => {
            Vue.component(name, components[name])
        })
    }
}

export default gnunezComponents