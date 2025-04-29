import { useEffect, useState } from "react"

const useDimension = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const currentRef = containerRef.current

    const getDimensions = () => {
      return {
        height: currentRef?.offsetHeight || 0,
        width: currentRef?.offsetWidth || 0,
      }
    }

    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries[0]
      if (entry) {
        setDimension(getDimensions())
      }
    })
    if (currentRef) {
      resizeObserver.observe(currentRef)
      setDimension(getDimensions())
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef)
      }
      resizeObserver.disconnect()
    }
  }, [containerRef])

  return dimension
}

export default useDimension
