import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BlogManagement = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' },
  ])

  const handleAddPost = () => {
    // Logic for adding a new post
    const newPost = { id: posts.length + 1, title: `New Blog Post ${posts.length + 1}` }
    setPosts([...posts, newPost])
  }

  const handleEditPost = (id: number) => {
    // Logic for editing a post
    const editedPosts = posts.map((post) => (post.id === id ? { ...post, title: `${post.title} (Edited)` } : post))
    setPosts(editedPosts)
  }

  const handleDeletePost = (id: number) => {
    // Logic for deleting a post
    const filteredPosts = posts.filter((post) => post.id !== id)
    setPosts(filteredPosts)
  }

  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Blog Management</h2>
      <button onClick={handleAddPost} className="mb-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add New Post
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2 flex items-center justify-between rounded border p-2">
            <span>{post.title}</span>
            <div>
              <button
                onClick={() => handleEditPost(post.id)}
                className="mr-2 rounded bg-yellow-500 px-2 py-1 text-white hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="rounded bg-red-600 px-2 py-1 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChangePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Logic for changing the password
    if (newPassword === confirmPassword) {
      alert('Password changed successfully!')
    } else {
      alert('Passwords do not match!')
    }
  }

  return (
    <div className="mt-8 rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="mb-2 block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="w-full rounded-lg border px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="mb-2 block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full rounded-lg border px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full rounded-lg border px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
        >
          Change Password
        </button>
      </form>
    </div>
  )
}

export const ResidentPanel = () => {
  return (
    <section className="container mt-16 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <BlogManagement />
        <ChangePassword />
      </div>
    </section>
  )
}
