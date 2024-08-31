import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CommunityEventPage() {
    // State to manage events
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
        thumbnail: ''
    });

    // Retrieve events from localStorage on component mount
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('communityEvents'));
        if (storedEvents) {
            setEvents(storedEvents);
        }
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        if (e.target.name === 'thumbnail') {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewEvent({ ...newEvent, thumbnail: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem('communityEvents', JSON.stringify(updatedEvents));
        setNewEvent({
            title: '',
            date: '',
            location: '',
            description: '',
            thumbnail: ''
        });
    };

    return (
        <div className="p-6 bg-gradient-to-r from-green-100 to-green-200 min-h-screen">
            {/* Community Events Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-500 p-6 rounded-lg shadow-lg text-white mb-6">
                <h3 className="font-semibold mb-4 text-3xl">Community Events</h3>
                <p className="text-white mb-4">
                    Stay informed about upcoming events, workshops, and meet-ups in your area.
                </p>
                <Link
                    to="/event-detail"
                    className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                    Explore Events
                </Link>
            </section>

            {/* Event Form */}
            <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="font-semibold text-2xl mb-4">Add a New Event</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Event Title</label>
                        <input
                            type="text"
                            name="title"
                            value={newEvent.title}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter event title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={newEvent.date}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={newEvent.location}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter event location"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={newEvent.description}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter event description"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700">Event Thumbnail</label>
                        <input
                            type="file"
                            name="thumbnail"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                    >
                        Add Event
                    </button>
                </form>
            </section>

            {/* Display Events */}
            <section className="mt-6">
                <h4 className="font-semibold text-2xl mb-4">Upcoming Events</h4>
                {events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
                                {event.thumbnail && (
                                    <img
                                        src={event.thumbnail}
                                        alt={event.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                )}
                                <h5 className="font-semibold text-xl text-green-600 mb-2">{event.title}</h5>
                                <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                                <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
                                <p className="text-gray-700 mb-1"><strong>Description:</strong> {event.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-700">No events added yet.</p>
                )}
            </section>
        </div>
    );
}

export default CommunityEventPage;
