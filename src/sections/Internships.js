import React, { useState, useEffect } from "react";
import axios from "axios";

const Internships = ({ showSection }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_BACKEND_INTERNSHIPS
        );
        if (res.data.length === 0) {
          setError("No internships found!!");
        } else {
          setInternships(res.data);
        }
      } catch (error) {
        setError("something went wrong!!!");
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Search is handled by the filter above
  };

  const handleApply = (internshipId) => {
    showSection("internship-form");
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Internship Opportunities</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search internships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            🔍
          </button>
        </div>

        {loading ? (
          <p>Loading internships.....</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div id="internship-listings">
            {filteredInternships.map((internship) => (
              <div key={internship._id} className="opportunity-card">
                <div className="opportunity-header">
                  <div className="opportunity-title">{internship.title}</div>
                  <div className="opportunity-type">
                    {internship.internshipType}
                  </div>
                </div>
                <div className="opportunity-details">
                  <span>
                    <strong>Duration:</strong> {internship.duration}
                  </span>
                  <span>
                    <strong>Stipend:</strong> {internship.stipend}
                  </span>
                  <span>
                    <strong>Location:</strong> {internship.location}
                  </span>
                </div>
                <p>{internship.description}</p>
                <button
                  className="apply-button"
                  onClick={() => handleApply(internship.id)}
                >
                  Apply Now
                </button>
              </div>
            ))}

            {filteredInternships.length === 0 && (
              <div className="opportunity-card">
                <p>No internships found matching your search criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Internships;
