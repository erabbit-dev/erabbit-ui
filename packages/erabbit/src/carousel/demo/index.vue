<script setup lang="ts">
import '../index.scss'
import '@erabbit/icons/src/index.scss'
import { Carousel as ErCarousel, CarouselItem as ErCarouselItem } from 'erabbit'
</script>
<template>
  <er-carousel>
    <er-carousel-item>
      <img
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg"
      />
    </er-carousel-item>
    <er-carousel-item>
      <img
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg"
      />
    </er-carousel-item>
    <er-carousel-item>
      <img
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg"
      />
    </er-carousel-item>
    <er-carousel-item>
      <img
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"
      />
    </er-carousel-item>
  </er-carousel>
</template>

<style>
.er-carousel {
  width: 600px;
  height: 260px;
}
img {
  width: 600px;
  height: 260px;
  display: block;
}
</style>
