import { IProvideSmoothScrollBar } from "@/types/smoothScrollBar";
import gsap from 'gsap'

type TOnMountedSmothScrollBar = (
  $gsap: typeof gsap,
  $gsapService: {
    updateGsapMarkersPosition: IProvideSmoothScrollBar['updateGsapMarkersPosition']
  }
) => void

export function onMountedSmothScrollBar(cb: TOnMountedSmothScrollBar) {
  const { onMountedScrollBar, updateGsapMarkersPosition } =
  inject<IProvideSmoothScrollBar>("smoothScrollBar");

  const { $gsap } = useNuxtApp();

  onMounted(() => {
    if (process.client) {
      onMountedScrollBar(
        cb.bind(null,
          $gsap,
          {
            updateGsapMarkersPosition,
          },
        )
      )
    }
  })
}