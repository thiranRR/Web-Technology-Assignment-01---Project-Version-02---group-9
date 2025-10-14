import { useState } from 'react';
import { Search, User, Mail, Phone } from 'lucide-react';

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState('info');
  const [searchInput, setSearchInput] = useState('');
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const publications = [
    { title: "Deep Learning for NLP" },
    { title: "Quantum Computing Advances" },
    { title: "AI in Healthcare" },
    { title: "Data Privacy & Security" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInput.toLowerCase();
    const results = publications.filter(pub => pub.title.toLowerCase().includes(query));
    alert(results.length ? "Search Results:\n" + results.map(r => r.title).join("\n") : "No publications found.");
    setSearchInput('');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setPasswordForm({ current: '', new: '', confirm: '' });
  };

  const handlePasswordInput = (field, value) => {
    setPasswordForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-amber-100 to-blue-800 flex justify-center items-center gap-16 px-8 py-4 z-1000 shadow-md">
        <a href="#" className="text-white font-bold hover:translate-y-[-4px] transition-transform">Home</a>
        <a href="#" className="text-white font-bold hover:translate-y-[-4px] transition-transform">My Projects</a>
        <a href="#" className="text-white font-bold hover:translate-y-[-4px] transition-transform">Contact</a>
        <a href="#" className="text-white font-bold flex items-center gap-1 hover:translate-y-[-4px] transition-transform">
          <User size={20} />
          My Profile
        </a>
        <div className="flex items-center gap-2" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search publications..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-3 py-1 rounded-full border-none outline-none focus:shadow-lg focus:shadow-cyan-400 w-44"
          />
          <button onClick={handleSearch} className="bg-cyan-400 border-none rounded-full p-2 cursor-pointer flex items-center justify-center hover:bg-cyan-500">
            <Search size={16} />
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mt-16 flex flex-col">
        {/* Super Navbar */}
        <div className="bg-blue-500 text-white flex items-center justify-end px-5 h-12 w-full">
          <div className="flex items-center cursor-pointer gap-2">
            <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
            <span className="font-bold">JOHN DOE ▼</span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-5 pb-20">
          {/* Sidebar */}
          <div className="w-60 bg-blue-700 text-white p-5 min-h-screen">
            <h2 className="text-xl font-bold mb-5 mt-8">Result Repository</h2>
            <a href="#" className="text-xl font-bold text-white no-underline block mb-8">1234567890</a>
            <ul className="list-none p-0 mt-10">
              <li className="my-12"><a href="#" className="text-white font-bold text-lg no-underline hover:text-cyan-300">View Profile</a></li>
              <li className="my-12"><a href="#" className="text-white font-bold text-lg no-underline hover:text-cyan-300">Dashboard</a></li>
              <li className="my-12"><a href="#" className="text-white font-bold text-lg no-underline hover:text-cyan-300">Board</a></li>
              <li className="my-12"><a href="#" className="text-white font-bold text-lg no-underline hover:text-cyan-300">Results</a></li>
              <li className="my-12"><a href="#" className="text-white font-bold text-lg no-underline hover:text-cyan-300">Logout</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 pr-10">
            {/* Profile Box */}
            <div className="bg-white p-10 rounded-lg shadow-md mb-8 flex items-center gap-8 mt-5">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              <div>
                <h1 className="text-3xl font-bold">JOHN DOE</h1>
                <p className="text-gray-600">Welcome to your profile page</p>
                <button className="bg-blue-700 text-white px-4 py-2 rounded border-none cursor-pointer font-bold mt-2 hover:bg-blue-800">Edit Profile</button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b-2 border-gray-300 flex mb-8">
              <div
                onClick={() => setActiveTab('info')}
                className={`p-2.5 px-5 cursor-pointer font-bold transition-colors ${
                  activeTab === 'info'
                    ? 'text-blue-700 border-b-3 border-blue-700'
                    : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                Information
              </div>
              <div
                onClick={() => setActiveTab('settings')}
                className={`p-2.5 px-5 cursor-pointer font-bold transition-colors ${
                  activeTab === 'settings'
                    ? 'text-blue-700 border-b-3 border-blue-700'
                    : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                Settings
              </div>
            </div>

            {/* Main Section */}
            <div className="flex gap-8 flex-wrap">
              {/* Left Column */}
              <div className="flex-1 min-w-80">
                {activeTab === 'info' && (
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-blue-700 font-bold text-lg mb-4">PERSONAL INFORMATION</h3>
                    <p className="my-8"><strong>Surname:</strong> DOE</p>
                    <p className="my-8"><strong>Firstname:</strong> JOHN</p>
                    <p className="my-8"><strong>Lastname:</strong> SMITH</p>
                    <p className="my-8"><strong>Matric No.:</strong> 1234567890</p>
                    <p className="my-8"><strong>Date of Birth:</strong> 1995-01-01</p>
                    <p className="my-8"><strong>Sex:</strong> Male</p>
                    <p className="my-8"><strong>Email:</strong> john@example.com</p>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-blue-700 font-bold text-lg mb-4">Change Password</h3>
                    <div className="flex flex-col">
                      <label className="mt-4 font-bold text-gray-700">Current Password</label>
                      <input 
                        type="password" 
                        value={passwordForm.current}
                        onChange={(e) => handlePasswordInput('current', e.target.value)}
                        className="p-2.5 mt-1 border border-gray-300 rounded" 
                      />
                      <label className="mt-4 font-bold text-gray-700">New Password</label>
                      <input 
                        type="password" 
                        value={passwordForm.new}
                        onChange={(e) => handlePasswordInput('new', e.target.value)}
                        className="p-2.5 mt-1 border border-gray-300 rounded" 
                      />
                      <label className="mt-4 font-bold text-gray-700">Confirm New Password</label>
                      <input 
                        type="password" 
                        value={passwordForm.confirm}
                        onChange={(e) => handlePasswordInput('confirm', e.target.value)}
                        className="p-2.5 mt-1 border border-gray-300 rounded" 
                      />
                      <button 
                        onClick={handlePasswordChange}
                        className="mt-8 px-5 py-2.5 bg-blue-700 text-white border-none rounded font-bold cursor-pointer hover:bg-blue-800"
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="flex-1 min-w-64 flex flex-col gap-5">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-blue-700 font-bold text-lg">My Results</h3>
                  <p className="text-gray-600">Total number of courses you offered</p>
                  <h1 className="text-5xl font-bold text-blue-700">2</h1>
                  <div className="text-5xl mt-5">📊</div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-blue-700 font-bold text-lg">Research Project</h3>
                  <p className="text-gray-600">Upload your research project</p>
                  <div className="text-3xl mt-5">⚡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-100 to-blue-800 text-white py-8 w-full mt-auto">
        <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto px-5 gap-5">
          <div className="flex-1 min-w-64">
            <div className="text-3xl font-bold font-serif mb-2">Scholar Connect</div>
            <p>Your gateway to academic excellence.</p>
          </div>
          <div className="flex-1 flex justify-center min-w-40">
            <button className="bg-white bg-opacity-20 text-white border border-white px-8 py-2 rounded-full cursor-pointer hover:bg-opacity-30 transition-all hover:translate-y-[-2px]">About Us</button>
          </div>
          <div className="flex-1 min-w-64">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                scholarconnect@example.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                +1 (234) 567-8901
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
