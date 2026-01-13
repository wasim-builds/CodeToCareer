import { useState, useEffect } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide'

interface MediaQueryResult {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    isWide: boolean
    breakpoint: Breakpoint
    isPortrait: boolean
    isLandscape: boolean
}

export function useMediaQuery(): MediaQueryResult {
    const [result, setResult] = useState<MediaQueryResult>({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isWide: false,
        breakpoint: 'desktop',
        isPortrait: false,
        isLandscape: true
    })

    useEffect(() => {
        const updateMediaQuery = () => {
            const width = window.innerWidth
            const isPortrait = window.matchMedia('(orientation: portrait)').matches

            let breakpoint: Breakpoint
            let isMobile = false
            let isTablet = false
            let isDesktop = false
            let isWide = false

            if (width < 768) {
                breakpoint = 'mobile'
                isMobile = true
            } else if (width < 1024) {
                breakpoint = 'tablet'
                isTablet = true
            } else if (width < 1536) {
                breakpoint = 'desktop'
                isDesktop = true
            } else {
                breakpoint = 'wide'
                isWide = true
            }

            setResult({
                isMobile,
                isTablet,
                isDesktop,
                isWide,
                breakpoint,
                isPortrait,
                isLandscape: !isPortrait
            })
        }

        updateMediaQuery()

        window.addEventListener('resize', updateMediaQuery)
        window.addEventListener('orientationchange', updateMediaQuery)

        return () => {
            window.removeEventListener('resize', updateMediaQuery)
            window.removeEventListener('orientationchange', updateMediaQuery)
        }
    }, [])

    return result
}
