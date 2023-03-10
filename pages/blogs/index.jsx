import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ blogs }) {

  function deleteBlog(id) {
    fetch(`/api/blogs/articles/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        alert("Deleting " + id)
      })

  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Blogs</h1>
      <table><tbody>
        {
          blogs.map(blog => {
            return (
              <tr key={blog._id}>
                <td>
                  <Link href={`/blogs/${blog._id}`}>
                    {blog.title}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`/api/blogs/articles/`)
  const blogs = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { blogs } }
}