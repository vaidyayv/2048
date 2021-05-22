import { useState, useEffect } from "react"

const useResize = (myRef:any) => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(myRef.current.offsetWidth)
        const handleResize = () => {
            setWidth(myRef.current.offsetWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [myRef])

    return { width }
}

export default useResize;