export const MAIN_PAGE = {
  FIRST: 'promo-section',
  SECOND: 'carousel-section',
  THIRD: 'projects-section',
}

export function formatToDomID(sectionID: typeof MAIN_PAGE[keyof typeof MAIN_PAGE]) {
  return `#${sectionID}`
}