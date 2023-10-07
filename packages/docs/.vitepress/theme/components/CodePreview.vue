<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CodePreview',
  props: {
    code: { type: String, required: true },
    lang: { type: String, required: true },
    meta: { type: String, required: true },
  },
  setup(props) {
    const codeEl = ref();
    const height = ref(0);
    const copied = ref(false);
    const toggleCode = () => {
      const targetHeight = codeEl.value ? codeEl.value.offsetHeight : 0;
      height.value = height.value === 0 ? targetHeight : 0;
    };
    const copyCode = () => {
      if (!copied.value) {
        try {
          navigator.clipboard.writeText(props.code);
        } catch (err) {
          console.log(err);
        }
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 1000);
      }
    };

    const utoa = (data: string) => {
      return btoa(unescape(encodeURIComponent(data)))
    }
    const onPlayground = () => {
      const files = {
        'App.vue': decodeURIComponent(props.code)
      }
      const url = 'https://erabbit-ui-playground.vercel.app/#'
      window.open(url + utoa(JSON.stringify(files)))
    }
    return {
      codeEl,
      height,
      copied,
      toggleCode,
      copyCode,
      onPlayground
    };
  },
});
</script>
<template>
  <div :class="['mdp-demo', height > 0 && 'is-expanded']">
    <div class="mdp-demo__preview">
      <slot />
    </div>
    <div class="mdp-demo__toolbar">
      <div class="mdp-demo__btn mdp-demo__btn-play" @click="onPlayground">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
          data-v-5d9e4641=""
        >
          <path
            fill="currentColor"
            d="M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276A1.5 1.5 0 0 1 18.656 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.282-9.276A7.994 7.994 0 0 0 9 7.243V4H8V2h8zm-2.612 8.001h-2.776c-.104.363-.23.721-.374 1.071l-.158.361L6.125 20h11.749l-3.954-8.567a9.978 9.978 0 0 1-.532-1.432zM11 7.243c0 .253-.01.506-.029.758h2.058a8.777 8.777 0 0 1-.021-.364L13 7.243V4h-2v3.243z"
          ></path>
        </svg>
      </div>
      <div class="mdp-demo__btn mdp-demo__btn-copy" @click="copyCode">
        <svg
          v-if="copied"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="20"
          width="20"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="20"
          width="20"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"
          />
        </svg>
      </div>
      <div class="mdp-demo__btn mdp-demo__btn-code" @click="toggleCode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="46"
            d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
          />
        </svg>
      </div>
    </div>
    <div
      class="mdp-demo__code"
      :style="{
        height: height + 'px',
        visibility: height > 0 ? 'visible' : 'hidden',
      }"
    >
      <div ref="codeEl">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>
<style>
:root {
  --mdp-border-color: var(--vp-c-divider-light-2, rgba(60, 60, 60, 0.12));
  --mdp-btn-bg-hover: var(--vp-c-gray-light-5, #f2f2f2);
}
.dark {
  --mdp-border-color: var(--vp-c-divider-dark-2, rgba(84, 84, 84, 0.48));
  --mdp-btn-bg-hover: var(--vp-c-gray-dark-3, #3a3a3a);
}
.mdp-demo {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--mdp-border-color);
}
.mdp-demo__preview {
  padding: 1rem;
}
.mdp-demo__toolbar {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid var(--mdp-border-color);
}
.mdp-demo__btn {
  width: 38px;
  height: 100%;
  align-items: center;
  text-align: center;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.mdp-demo__btn:hover {
  background-color: var(--mdp-btn-bg-hover);
}

.mdp-demo__toolbar svg {
  width: 1rem;
  height: 1rem;
}

.mdp-demo.is-expanded .mdp-demo__code {
  border-top: 1px solid var(--mdp-border-color);
}
.mdp-demo__code div[class*='language-'] {
  margin: 0;
  border-radius: 0;
}
.mdp-demo__code pre {
  margin: 0;
}
.mdp-demo__code .shiki {
  padding: 1rem;
}
</style>
