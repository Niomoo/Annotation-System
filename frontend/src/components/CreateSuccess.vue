<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="bg-white p-10 rounded-lg justify-center">
        <h1 class="font-sans font-bold text-6xl text-black-100">Success</h1>
        <div class="flex items-center justify-center">
            <div class="w-1/2">
                <span class="text-sm">
                    We have successfully created your new account. 
                    But before you start, you will have to activate it. 
                    We have sent an activation mail to the email you previded during registration. 
                    It should arrive in a couple of minutes.
                </span>
            </div>
        </div>

        <div class="flex items-center justify-center pt-10">
            <div
                x-data="scrollProgress"
                class="inline-flex items-center justify-center overflow-hidden rounded-full"
            >
            <!-- Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ -->
                <svg class="w-20 h-20">
                    <circle
                        class="text-gray-300"
                        stroke-width="5"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                    />
                    <circle
                        class="text-blue-600"
                        stroke-width="5"
                        :stroke-dasharray="circumference"
                        :stroke-dashoffset="circumference - percent / 100 * circumference"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                    />
                </svg>
                <span class="absolute text-xl text-blue-700" x-text="`${percent}%`"></span>
            </div>
        </div>
        <div class="flex items-center justify-center pt-10">
            <button class="bg-blue-400 h-10 w-20 text-black flex rounded-lg justify-center items-center" @click="goback()">close</button>
        </div>
      </div>
    </div>
</template>

<style>
.progress-ring {
  position: relative;
  width: 100px;
  height: 100px;
}

.progress-ring__circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ccc;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}

.progress-ring__text {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
</style>

<script>
import router from '../router'
import axios from 'axios'
export default
{
  data () {
    return {
      progress: 30, // 初始設定
    }
  },
  methods: {
    goback () {
        router.push( '/' )
    }
  }
}
</script>