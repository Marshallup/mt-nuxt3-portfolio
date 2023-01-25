export const MAIN_PAGE = {
  FIRST: 'promo-section',
  SECOND_WRAPPER: 'carousel-section-wrapper',
  SECOND: 'carousel-section',
  SECOND_TITLE_LAST: 'carousel-section-last-title',
  THIRD: 'projects-section',
}

export function formatToDomID(sectionID: typeof MAIN_PAGE[keyof typeof MAIN_PAGE]) {
  return `#${sectionID}`
}