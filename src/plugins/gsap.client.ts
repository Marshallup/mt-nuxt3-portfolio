import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'

export default defineNuxtPlugin(() => {
  // ScrollMagicPluginIndicator(ScrollMagic);
  // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
  // ScrollMagicPluginGsap(ScrollMagic, gsap)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(CustomEase)

  // console.log(ScrollTrigger.)

  return {
    provide: {
      gsap,
      ScrollTrigger,
      CustomEase,
    }
  }
})