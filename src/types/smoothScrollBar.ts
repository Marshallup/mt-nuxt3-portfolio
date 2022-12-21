import { Ref } from 'vue'
import SmoothScrollBar from "smooth-scrollbar";

export type TSmoothScrollBar = SmoothScrollBar | null;

export type onMountedScrollBarCb = (smoothScrollBar: SmoothScrollBar) => void;

export interface IProvideSmoothScrollBar {
  smoothContainer: Ref<HTMLDivElement>;
  smoothScrollBar: Ref<TSmoothScrollBar>;
  initScrolling: () => void;
  onMountedScrollBar: (el: onMountedScrollBarCb) => void;
  updateGsapMarkersPosition: () => void;
}