import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogManagement = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'First Blog Post' },
        { id: 2, title: 'Second Blog Post' },
    ]);

    const handleAddPost = () => {
        // Logic for adding a new post
        const newPost = { id: posts.length + 1, title: `New Blog Post ${posts.length + 1}` };
        setPosts([...posts, newPost]);
    };

    const handleEditPost = (id: number) => {
        // Logic for editing a post
        const editedPosts = posts.map(post => post.id === id ? { ...post, title: `${post.title} (Edited)` } : post);
        setPosts(editedPosts);
    };

    const handleDeletePost = (id: number) => {
        // Logic for deleting a post
        const filteredPosts = posts.filter(post => post.id !== id);
        setPosts(filteredPosts);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Blog Management</h2>
            <button onClick={handleAddPost} className="px-4 py-2 mb-4 text-white bg-blue-600 rounded hover:bg-blue-700">
                Add New Post
            </button>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="flex items-center justify-between p-2 mb-2 border rounded">
                        <span>{post.title}</span>
                        <div>
                            <button onClick={() => handleEditPost(post.id)} className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                                Edit
                            </button>
                            <button onClick={() => handleDeletePost(post.id)} className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Logic for changing the password
        if (newPassword === confirmPassword) {
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div className="p-4 mt-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <div className="mb-4">
                    <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-700">Current Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
                >
                    Change Password
                </button>
            </form>
        </div>
    );
};

export const ResidentPanel = () => {
    return (
        <section className="container py-16 mt-16">
            <div className="grid gap-8 md:grid-cols-2">
                <BlogManagement />
                <ChangePassword />
            </div>
        </section>
    );
};
