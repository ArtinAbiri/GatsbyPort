import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
export const SEO = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription} = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,

    }
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="LinkedIn:card" content="summary_large_image" />
            <meta name="LinkedIn:description" content={seo.description} />
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png"/>
            <meta name="keywords" content="JavaScript, Artin, Artin Abiri, Abiri, Management, IT, ReactJS, Chalmers, Developer, Portfolio, IT Portfolio"/>
            <meta name="author" content="Artin Abiri"/>
            <meta name="theme-color" content="#f5f0ec"/>
            <link rel="manifest" href="/manifest.json" />

            {children}
        </>
    )
}
