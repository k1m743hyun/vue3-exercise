<template>
    <div>
        Child
        <h2>{{ childTitle }}</h2>
        <button @click="childBtnClicked" ref="btnChild">click</button>
    </div>
</template>

<script>
export default {
    props: {
        parentTitle: {
            type: String,
            required: true,
            default: "자식 컴포넌트의 타이틀",
        }
    },
    data() {
        return {
            childTitle: this.parentTitle + '!!!',

        }
    },
    beforeCreate() {
        console.log("beforeCreate Child");
    },
    created() {
        console.log("created Child");
    },
    beforeMount () {
        console.log("beforeMount Child");
    },
    mounted() {
        console.log("mounted Child");
    },
    beforeUnmount() {
        console.log("beforeUnmount Child");
    },
    unmounted() {
        console.log("unmounted Child");
    },
    methods: {
        childBtnClicked() {
            console.log("Clicked!!");
        }
    }
}
</script>

<style>
</style>