<template>
  <h1>Hello, {{ title }}</h1>

  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
    <div>
        <input type="text" v-model="valueModel" />
    </div>
    <div>
        <input type="number" v-model.number="numberModel">
    </div>
    <div>
        <textarea v-model="message"></textarea>
    </div>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
        </select>
    </div>
    <div>
        <label>
            <input type="checkbox" value="서울" v-model="checked">서울
        </label>
        <br>
        <span>
            체크한 지역: {{ checked }}
        </span>
    </div>
    <div>
        <label>
            <input type="radio" :value="radioValue1" v-model="picked">서울
        </label>
        <br>
        <span>
            선택한 지역: {{ picked }}
        </span>
    </div>
    <div>
        <img :src="imgSrc" />
    </div>
    <div>
        <input type="text" v-model="textValue">
        <button :disabled="textValue==''">Click</button>
    </div>
    <div>
        <button v-for="label in labels" :key="label">{{ label }}</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        const labels = [];
        for (var i=0; i <5; i++) {
        labels.push(i)
        }
        return {
            title: 'World',
            htmlString: '<p>HTML Text</p>',
            valueModel: 'Input Text',
            numberModel: 123,
            message: 'text',
            city: '02',
            checked: [],
            picked: '',
            radioValue1: '서울',
            imgSrc: "https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp",
            textValue: '',
            labels: labels,
        }
    }
}
</script>

<style>
</style>