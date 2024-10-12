import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'; // 三方依赖
import 'element-plus/theme-chalk/index.css';
import * as ElIcon from '@element-plus/icons-vue'
import { VueDraggableNext } from "vue-draggable-next";
import DraggableWarp from "@/components/VFG/form/DraggableWarp.vue";
import OptionInput from "@/components/VFG/form/OptionInput.vue";
import UploadWarp from "@/components/VFG/form/elementWarp/UploadWarp.vue";

import zhCn from 'element-plus/es/locale/lang/zh-cn';
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件

import { VFG, SvgIcon } from "vfg"

const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
});

app.use(VFG)
app.component("svg-icon", SvgIcon);
app.component("draggable", VueDraggableNext);
app.component("draggable-warp", DraggableWarp);
app.component("option-input", OptionInput);
Object.keys(ElIcon).forEach((key) => {
    app.component(key, ElIcon[key])
})
app.component("upload-warp", UploadWarp);

app.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    setTimeout(() => {
        blocks.forEach((block) => {
            hljs.highlightBlock(block)
        })
    }, 200)
})
app.mount('#app')
