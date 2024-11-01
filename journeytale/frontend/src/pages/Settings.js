import Layout from "../components/Layout";

const Settings = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center h-screen bg-indigo-200">
                <h1 className="text-4xl font-bold text-blue-500 font-serif">Settings Page</h1>
                <p className="mt-4 text-lg text-gray-700 font-serif">
                    Here you can customize your adventure log, such as changing the colors.
                </p>
            </div>
        </Layout>
    );
};

export default Settings;