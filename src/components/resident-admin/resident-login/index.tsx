import { useNavigate } from "react-router-dom";

export const ResidentLogin = () => {

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate('/panel'); // Navigate to the /panel page
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-50 bg-[url('/images/canada-resident-poster3.jpg')] bg-cover bg-center">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-semibold text-white transition duration-200 ease-in bg-customblue rounded-lg shadow-md hover:bg-custombluehover focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
};
