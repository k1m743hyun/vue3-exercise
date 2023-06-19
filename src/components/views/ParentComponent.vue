<template>
    <h1>Parent</h1>
    <div>
        <child-component :title=parentTitle ref="child_component"></child-component>
    </div>
</template>

<script>
import ChildComponent from '@/components/views/ChildComponent'

export default {
    components: {
        ChildComponent,
    },
    data() {
        return {
            parentTitle: "부모 컴포넌트의 타이틀",
        }
    },
    beforeCreate() {
        console.log("beforeCreate Parent");
    },
    created() {
        console.log("created Parent");
    },
    beforeMount() {
        console.log("beforeMount Parent");
    },
    mounted() {
        console.log("mounted Parent");
        this.$refs.child_component.$refs.btnChild.click();
    },
    beforeUnmount() {
        console.log("beforeUnmount Parent");
    },
    unmounted() {
        console.log("unmounted Parent");
    }
}
</script>

<style>
</style>