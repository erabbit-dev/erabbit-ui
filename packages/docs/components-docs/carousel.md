  # Carousel

carousel component.


## Basic Usage

Combine `el-carousel` with `el-carousel-item`, and you'll get a carousel. The prev next button can be displayed when the mouse enters, Click to switch。The indicator is displayed by default, allowing click toggle。

```vue preview
<template>
  <er-carousel height="260px">
    <er-carousel-item>
      <img
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg"
      />
    </er-carousel-item>
    <er-carousel-item>
      <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg" />
    </er-carousel-item>
    <er-carousel-item>
      <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg" />
    </er-carousel-item>
    <er-carousel-item>
      <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg" />
    </er-carousel-item>
  </er-carousel>
</template>

<style scoped></style>
```

## Content Custom

Content of each slide is completely customizable, and you just need to place it inside `el-carousel-item` tag. 

```vue preview
<template>
  <er-carousel height="200px" :auto-play="false">
    <er-carousel-item>
      <div class="product-list">
        <div class="product-item" v-for="i in 4"></div>
      </div>  
    </er-carousel-item>
    <er-carousel-item>
      <div class="product-list">
        <div class="product-item" v-for="i in 4" style="background: #08a;"></div>
      </div> 
    </er-carousel-item>
    <er-carousel-item>
      <div class="product-list">
        <div class="product-item" v-for="i in 4" style="background: #a80;"></div>
      </div> 
    </er-carousel-item>
  </er-carousel>
</template>

<style scoped>
.product-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-item {
  width: 150px;
  height: 200px;
  background: #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #ddd;
}
</style>
```

## Carousel API

### Carousel Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| auto-play | by default auto play | `boolean` | true |
| duration | timer duration | `number` | 3000 |
| height | carousel height | `string` | `300px`|


### Carousel Events

| Name | Description | Parameters |
| ---- | ----------- | ---- |
| change | triggers when the active slide switches | index of the new active slide |

### Carousel Methods

| Name | Description | Parameters |
| ---- | ----------- | ---- |
| setActiveItem | manually switch slide | index of the slide to be switched to, starting from 0 |
| prev | switch to the previous slide | - |
| next | switch to the next slide | - |


