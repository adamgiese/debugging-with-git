export const getSlideClass = (currentSlide, position) => {
  /* eslint-disable indent */
  return currentSlide === position ? 'active'
    : currentSlide - 1 === position ? 'past'
    : currentSlide + 1 === position ? 'future'
    : currentSlide - 1 > position ? 'distant-past'
    : currentSlide + 1 < position ? 'distant-future'
    : null;
  /* eslint-enable indent */
};

/* eslint-disable */
export function getQueryParam(name, url) {
  if (!url) url = window.location.href;
  const parsedName = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${parsedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/*
 * Function to count nested children of a certain type. For example, to look for the total number of <Fragment /> components within a <Slide />
 *
 * @param {array} children - array of all children of React component
 * @param {string} name - name of the component being counted
 * @return {int} - total count of nested components in children
 */

export const deepCountComponents = (children, name) => { // TODO rewrite to use Array.reduce()
  let newCount = 0;

  const nestedChildren = children.props.children;

  if (children.type.name === name) {
    return 1;
  }

  if (typeof nestedChildren === 'string') { // end of tree
    return 0;
  }

  if (nestedChildren.type && nestedChildren.type.name === name) {
    return 1;
  }

  if (Array.isArray(nestedChildren)) {
    let childrenCount = 0;
    nestedChildren.forEach((value) => {
      childrenCount += deepCountComponents(value, name);
    });
    newCount += childrenCount;
  }

  return newCount;
};
/* eslint-enable */
