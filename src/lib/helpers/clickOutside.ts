/* eslint-disable @typescript-eslint/no-explicit-any */
/** Dispatch event on click outside of node */
export const clickOutside = (node: any, excludeDOMNode?: any[]) => {
  
  const clickOnExcluded = (eventTarget: any) => {
    let status = false

    if (excludeDOMNode) {
      for (let i = 0; i < excludeDOMNode.length; i++) {
        if ( excludeDOMNode[i] && excludeDOMNode[i].contains(eventTarget) ) {
          status = true
          break
        }
      }
    }
    
    return status

  }

  const handleClick = (event: any) => {
    if (
      node && !node.contains(event.target) && 
      !event.defaultPrevented &&
      !clickOnExcluded(event.target)
      
      ) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node)
      )
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}