import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function() {
    // show 滑鼠點擊時的xy
    let point = reactive({
        x: 0,
        y: 0,
    });

    // show 滑鼠點擊的相關函式
    function setPoint(e) {
        point.x = e.pageX;
        point.y = e.pageY;
        console.log(e.pageX, e.pageY)
    }

    // show 滑鼠點擊時的生命週期hook
    onMounted(() => {
        window.addEventListener("click", setPoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("click", setPoint);
    });

    return point
}