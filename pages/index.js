import {HomeLanding} from '../comps/HomeComps/Landing/Landing'
import Objectives from '../comps/HomeComps/objectives/'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogComp from '../comps/HomeComps/blogs'
import { sortByDate } from '../utils'
  
export default function Home({posts}) {
  return (
    < >    
      <HomeLanding />
      <Objectives/>
      {/* <BlogComp posts={posts}  /> */}
    </>
  )
}


export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
