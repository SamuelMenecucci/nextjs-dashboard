// Next.js automatically optimizes fonts in the application when you use the next/font module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.
import {Inter, Lusitana} from 'next/font/google'

//Subsetting is the practice of creating a “subset” of a font—a file that contains a custom (and usually limited) collection of glyphs.
//Doc https://fonts.google.com/knowledge/glossary/subsetting
export const inter = Inter({subsets: [ 'latin']})
export const lusitana = Lusitana({subsets: ['latin'], weight: ['400', '700']})