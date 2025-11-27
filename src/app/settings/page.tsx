export default function Settings() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Settings
                </h1>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Profile Settings</h3>
                            <p className="text-gray-600">Manage your account settings and preferences.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Notifications</h3>
                            <p className="text-gray-600">Configure how you receive notifications.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Privacy</h3>
                            <p className="text-gray-600">Control your privacy and data settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
