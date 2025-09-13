import React, { useState, useRef, useEffect } from 'react';
import { 
  Leaf, 
  MessageCircle, 
  Calendar, 
  Bell, 
  BookOpen, 
  BarChart3,
  Mic,
  Send,
  ChevronRight,
  Cloud,
  CloudRain,
  Sun,
  Droplets,
  Sprout,
  Bug,
  TrendingUp,
  Clock,
  MapPin,
  Volume2,
  Plus,
  Check,
  Star,
  Users,
  Smartphone,
  Globe
} from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isListening, setIsListening] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I am your Krishi Sakhi. How can I help you today?', icon: '🌱' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [profileData, setProfileData] = useState({
    location: '',
    crop: '',
    soilType: '',
    irrigation: '',
    landSize: ''
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setChatMessages(prev => [...prev, 
        { type: 'user', message: currentMessage },
        { type: 'bot', message: 'I understand your concern. Based on your farm profile, I recommend checking soil moisture levels and applying organic fertilizer this week.', icon: '💡' }
      ]);
      setCurrentMessage('');
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setCurrentMessage('എന്റെ നെല്ലിൻ വയലിൽ കീടബാധ ഉണ്ട്');
        setIsListening(false);
      }, 2000);
    }
  };

  const sections = {
    home: 'Home',
    profile: 'Farm Profile',
    chat: 'AI Assistant',
    diary: 'Farm Diary',
    advisory: 'Advisory',
    alerts: 'Alerts',
    knowledge: 'Knowledge Hub',
    dashboard: 'Dashboard'
  };

  const renderNavigation = () => (
    <nav className="bg-white shadow-lg border-b-2 border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-green-800">Krishi Sakhi</h1>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <select 
              value={currentSection} 
              onChange={(e) => setCurrentSection(e.target.value)}
              className="bg-green-50 border border-green-200 rounded-lg px-3 py-1 text-sm font-medium text-green-700"
            >
              {Object.entries(sections).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentSection === key 
                    ? 'bg-green-500 text-white' 
                    : 'text-green-700 hover:bg-green-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-100 via-green-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 shadow-xl">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
              Krishi Sakhi
            </h1>
            <p className="text-2xl text-green-600 mb-2">Your Digital Farming Companion</p>
            <p className="text-lg text-gray-600">AI-powered assistance for Kerala's smart farmers</p>
          </div>

          <button 
            onClick={() => setCurrentSection('profile')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <Sprout className="h-6 w-6" />
            <span>Get Started</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">AI Chat Assistant</h3>
            </div>
            <p className="text-gray-600">Get instant farming advice in Malayalam and English</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Cloud className="h-8 w-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Weather Insights</h3>
            </div>
            <p className="text-gray-600">Real-time weather data for better crop planning</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Market Prices</h3>
            </div>
            <p className="text-gray-600">Live market rates and price predictions</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-500 rounded-full mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">Farm Profile Setup</h2>
          <p className="text-gray-600">Tell us about your farm to get personalized assistance</p>
          
          {/* Language Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setSelectedLanguage('english')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLanguage === 'english' 
                    ? 'bg-green-500 text-white' 
                    : 'text-green-600 hover:bg-green-50'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLanguage('malayalam')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLanguage === 'malayalam' 
                    ? 'bg-green-500 text-white' 
                    : 'text-green-600 hover:bg-green-50'
                }`}
              >
                മലയാളം
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: MapPin, label: 'Farm Location', field: 'location', placeholder: 'Enter your village/district' },
            { icon: Sprout, label: 'Primary Crop', field: 'crop', placeholder: 'Rice, Coconut, Pepper, etc.' },
            { icon: Globe, label: 'Soil Type', field: 'soilType', placeholder: 'Clay, Sandy, Loam, etc.' },
            { icon: Droplets, label: 'Irrigation Method', field: 'irrigation', placeholder: 'Drip, Flood, Rain-fed, etc.' }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <item.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
              </div>
              <input
                type="text"
                placeholder={item.placeholder}
                value={profileData[item.field as keyof typeof profileData]}
                onChange={(e) => setProfileData(prev => ({...prev, [item.field]: e.target.value}))}
                className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
          ))}

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Land Size</h3>
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter land size"
                value={profileData.landSize}
                onChange={(e) => setProfileData(prev => ({...prev, landSize: e.target.value}))}
                className="flex-1 p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <select className="p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent">
                <option>Acres</option>
                <option>Hectares</option>
                <option>Cents</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setCurrentSection('dashboard')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <Check className="h-6 w-6" />
            <span>Complete Setup</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
        {/* Chat Header */}
        <div className="bg-white rounded-t-xl p-4 shadow-lg border-b border-green-100">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-800">Krishi Sakhi Assistant</h3>
              <p className="text-sm text-green-600">Always here to help</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-white p-4 overflow-y-auto space-y-4">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-md ${
                msg.type === 'user' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {msg.type === 'bot' && msg.icon && (
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">{msg.icon}</span>
                    <span className="text-xs font-semibold text-green-600">Krishi Sakhi</span>
                  </div>
                )}
                <p className="text-sm">{msg.message}</p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="bg-white rounded-b-xl p-4 border-t border-green-100 shadow-lg">
          <div className="flex space-x-3">
            <button
              onClick={toggleListening}
              className={`p-3 rounded-full transition-colors ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Mic className="h-5 w-5" />
            </button>
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your farming question..."
              className="flex-1 p-3 border border-green-200 rounded-full focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          {isListening && (
            <div className="mt-2 text-center">
              <span className="text-sm text-red-600 font-medium">🎤 Listening... Speak now</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderDiary = () => (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">Farm Diary</h2>
          <p className="text-gray-600">Track your daily farming activities</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Sprout, label: 'Sowing', color: 'green' },
            { icon: Droplets, label: 'Irrigation', color: 'blue' },
            { icon: Leaf, label: 'Fertilizer', color: 'yellow' },
            { icon: Bug, label: 'Pest Control', color: 'red' }
          ].map((action, index) => (
            <button key={index} className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-l-4 border-${action.color}-400`}>
              <action.icon className={`h-8 w-8 text-${action.color}-500 mx-auto mb-2`} />
              <p className="text-sm font-semibold text-gray-800">{action.label}</p>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Activities</h3>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Entry</span>
            </button>
          </div>

          <div className="space-y-6">
            {[
              { date: 'Today, 9:00 AM', activity: 'Applied organic fertilizer to tomato plants', type: 'fertilizer', color: 'yellow' },
              { date: 'Yesterday, 6:30 AM', activity: 'Irrigation system activated for 2 hours', type: 'irrigation', color: 'blue' },
              { date: '2 days ago', activity: 'Spotted pest infestation on brinjal crop', type: 'pest', color: 'red' },
              { date: '3 days ago', activity: 'Sowed new batch of rice seeds', type: 'sowing', color: 'green' }
            ].map((entry, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`bg-${entry.color}-100 p-2 rounded-full mt-1`}>
                  {entry.type === 'fertilizer' && <Leaf className={`h-4 w-4 text-${entry.color}-600`} />}
                  {entry.type === 'irrigation' && <Droplets className={`h-4 w-4 text-${entry.color}-600`} />}
                  {entry.type === 'pest' && <Bug className={`h-4 w-4 text-${entry.color}-600`} />}
                  {entry.type === 'sowing' && <Sprout className={`h-4 w-4 text-${entry.color}-600`} />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{entry.activity}</p>
                  <p className="text-sm text-gray-500">{entry.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdvisory = () => (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">AI Advisory</h2>
          <p className="text-gray-600">Personalized recommendations for your farm</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: 'weather',
              priority: 'high',
              title: 'Rain Expected Tomorrow',
              message: 'Heavy rainfall predicted for your area. Avoid spraying pesticides and ensure proper drainage.',
              icon: CloudRain,
              color: 'orange',
              time: '2 hours ago'
            },
            {
              type: 'pest',
              priority: 'urgent',
              title: 'Pest Alert: Brinjal Crop',
              message: 'High risk of aphid infestation detected. Consider organic neem-based treatment immediately.',
              icon: Bug,
              color: 'red',
              time: '4 hours ago'
            },
            {
              type: 'market',
              priority: 'medium',
              title: 'Price Increase: Coconut',
              message: 'Coconut prices expected to rise by 15% next week. Good time to harvest if ready.',
              icon: TrendingUp,
              color: 'green',
              time: '6 hours ago'
            },
            {
              type: 'crop',
              priority: 'low',
              title: 'Fertilizer Reminder',
              message: 'Your rice crop is in flowering stage. Apply potassium-rich fertilizer for better yield.',
              icon: Sprout,
              color: 'blue',
              time: '1 day ago'
            }
          ].map((advisory, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-${advisory.color}-400 hover:shadow-xl transition-shadow`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`bg-${advisory.color}-100 p-2 rounded-full`}>
                    <advisory.icon className={`h-6 w-6 text-${advisory.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{advisory.title}</h3>
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      advisory.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                      advisory.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      advisory.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {advisory.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{advisory.time}</span>
              </div>
              <p className="text-gray-700 mb-4">{advisory.message}</p>
              <button className={`bg-${advisory.color}-500 hover:bg-${advisory.color}-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}>
                Take Action
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4">
            <Bell className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">Reminders & Alerts</h2>
          <p className="text-gray-600">Stay on top of your farming schedule</p>
        </div>

        {/* Alert Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Crop Tasks', count: 4, color: 'green', icon: Sprout },
            { label: 'Weather Alerts', count: 2, color: 'blue', icon: Cloud },
            { label: 'Market Updates', count: 3, color: 'yellow', icon: TrendingUp }
          ].map((category, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-t-4 border-${category.color}-400 text-center hover:shadow-xl transition-shadow`}>
              <category.icon className={`h-12 w-12 text-${category.color}-500 mx-auto mb-3`} />
              <h3 className="text-xl font-bold text-gray-800 mb-1">{category.count}</h3>
              <p className="text-gray-600 font-medium">{category.label}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Reminders */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Reminders</h3>
          
          <div className="space-y-4">
            {[
              { time: 'Today, 6:00 PM', task: 'Water the tomato plants', type: 'irrigation', urgent: false },
              { time: 'Tomorrow, 7:00 AM', task: 'Apply fertilizer to rice field', type: 'fertilizer', urgent: true },
              { time: 'Day after tomorrow', task: 'Check for pest infestation', type: 'inspection', urgent: false },
              { time: 'This weekend', task: 'Government subsidy application deadline', type: 'deadline', urgent: true }
            ].map((reminder, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border-l-4 ${
                reminder.urgent ? 'border-red-400 bg-red-50' : 'border-green-400 bg-green-50'
              }`}>
                <div className={`p-2 rounded-full ${reminder.urgent ? 'bg-red-100' : 'bg-green-100'}`}>
                  <Clock className={`h-5 w-5 ${reminder.urgent ? 'text-red-600' : 'text-green-600'}`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{reminder.task}</p>
                  <p className="text-sm text-gray-600">{reminder.time}</p>
                </div>
                {reminder.urgent && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">URGENT</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderKnowledge = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">Knowledge Hub</h2>
          <p className="text-gray-600">Learn about sustainable farming practices</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for farming topics, crops, diseases..."
                className="w-full p-4 pr-12 border border-purple-200 rounded-full focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full">
                <BookOpen className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Knowledge Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Rice Cultivation',
              description: 'Complete guide to paddy farming in Kerala climate',
              icon: '🌾',
              articles: 12,
              color: 'green'
            },
            {
              title: 'Coconut Farming',
              description: 'Traditional and modern coconut cultivation techniques',
              icon: '🥥',
              articles: 8,
              color: 'yellow'
            },
            {
              title: 'Pest Management',
              description: 'Organic and integrated pest control methods',
              icon: '🐛',
              articles: 15,
              color: 'red'
            },
            {
              title: 'Soil Health',
              description: 'Maintain and improve soil fertility naturally',
              icon: '🌱',
              articles: 10,
              color: 'brown'
            },
            {
              title: 'Weather Patterns',
              description: 'Understanding monsoon and climate impacts',
              icon: '🌦️',
              articles: 7,
              color: 'blue'
            },
            {
              title: 'Market Insights',
              description: 'Price trends and marketing strategies',
              icon: '📈',
              articles: 9,
              color: 'purple'
            }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.articles} articles</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Monsoon Preparation Guide 2024',
                excerpt: 'Essential steps to prepare your crops for the upcoming monsoon season in Kerala.',
                readTime: '5 min read',
                category: 'Weather'
              },
              {
                title: 'Organic Fertilizer Making at Home',
                excerpt: 'Learn to create nutrient-rich compost using kitchen waste and farm residues.',
                readTime: '8 min read',
                category: 'Soil Health'
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h4>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center space-x-1">
                  <span>Read More</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">My Farm Dashboard</h2>
          <p className="text-gray-600">Walking with you through every season</p>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {/* Weather Widget */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Today's Weather</h3>
              <Sun className="h-8 w-8" />
            </div>
            <p className="text-2xl font-bold mb-1">28°C</p>
            <p className="text-blue-100">Partly Cloudy</p>
            <div className="mt-4 text-sm text-blue-100">
              <p>Humidity: 65%</p>
              <p>Wind: 12 km/h</p>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Today's Tasks</h3>
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-sm text-gray-700">Water tomato plants</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-sm text-gray-700">Check pest traps</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-sm text-gray-700">Apply fertilizer</p>
              </div>
            </div>
          </div>

          {/* Crop Health */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Crop Health</h3>
              <Sprout className="h-6 w-6 text-green-500" />
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">Rice</span>
                  <span className="text-xs text-green-600 font-semibold">Excellent</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">Coconut</span>
                  <span className="text-xs text-yellow-600 font-semibold">Good</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Prices */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Market Prices</h3>
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Rice (kg)</span>
                <span className="font-semibold">₹45 ↗</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Coconut (pc)</span>
                <span className="font-semibold">₹15 ↗</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pepper (kg)</span>
                <span className="font-semibold">₹850 ↘</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tips Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full mr-3">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">AI-Powered Insights</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-green-800 font-medium">💡 Based on weather data, consider applying potassium fertilizer to your rice crop this week for better grain development.</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-blue-800 font-medium">🌧️ Rain expected in 3 days. Perfect timing for transplanting your coconut seedlings.</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-yellow-800 font-medium">📈 Pepper prices are rising. Good time to harvest if your crop is ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { icon: MessageCircle, label: 'Ask AI Assistant', color: 'blue' },
                { icon: Plus, label: 'Add Farm Entry', color: 'green' },
                { icon: Bell, label: 'Set Reminder', color: 'yellow' },
                { icon: BookOpen, label: 'Browse Knowledge', color: 'purple' }
              ].map((action, index) => (
                <button key={index} className={`w-full flex items-center space-x-3 p-3 bg-${action.color}-50 hover:bg-${action.color}-100 rounded-lg transition-colors`}>
                  <action.icon className={`h-5 w-5 text-${action.color}-600`} />
                  <span className="text-gray-800 font-medium">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Farm Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3">Farm Statistics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Land</span>
                  <span className="font-semibold">2.5 acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Crops</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tasks Completed</span>
                  <span className="font-semibold">24 this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home': return renderHome();
      case 'profile': return renderProfile();
      case 'chat': return renderChat();
      case 'diary': return renderDiary();
      case 'advisory': return renderAdvisory();
      case 'alerts': return renderAlerts();
      case 'knowledge': return renderKnowledge();
      case 'dashboard': return renderDashboard();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNavigation()}
      {renderCurrentSection()}
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setCurrentSection('chat')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default App;