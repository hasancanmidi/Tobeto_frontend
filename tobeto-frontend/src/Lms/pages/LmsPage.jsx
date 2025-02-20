// LmsPage.jsx
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import LmsBar from '../components/LmsBar';
import ContentAccordion from '../components/ContentAccordion';
import AboutComponent from '../components/AboutComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

const LmsPage = ({ educationTitle }) => {


  const [activeTab, setActiveTab] = useState('icerik');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [likeToast, setLikeToast] = useState(false);
  const [bookmarkToast, setBookmarkToast] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

  
    const contentElement = document.getElementById('icerik');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          backgroundColor: 'purple',
          padding: '8px',
          borderRadius: '55%',
          cursor: 'pointer',
        }}
      >
       
        <Link to="/platform">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
        </Link>

      </div>
      <Container
        style={{
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px auto',
        }}
      >
        <Row>
          <Col>  <LmsBar lessonName={selectedLesson} educationTitle={educationTitle} />
            <ToastContainer position="bottom-right" autoClose={2000} /></Col>

        </Row>
        <Row>
          <Col lg={12}>
       
            <div className="mb-3" style={{ display: 'flex' }}>
              <span
                onClick={() => handleTabChange('icerik')}
                style={{
                  marginRight: '15px',
                  padding: '5px',
                  cursor: 'pointer',
                  borderBottom: activeTab === 'icerik' ? '2px solid #007bff' : 'none',
                }}
              >
                İçerik
              </span>
              <span
                onClick={() => handleTabChange('hakkinda')}
                style={{
                  padding: '5px',
                  cursor: 'pointer',
                  borderBottom: activeTab === 'hakkinda' ? '2px solid #007bff' : 'none',
                }}
              >
                Hakkında
              </span>
            </div>

            {/* Content */}
            {activeTab === 'icerik' && (
              <ContentAccordion
                onLessonNameChange={setSelectedLesson}
                setLikeToast={setLikeToast}
                setBookmarkToast={setBookmarkToast}
              />
            )}
            {activeTab === 'hakkinda' && <AboutComponent />}
          </Col>

        </Row>
      </Container>


    </div>

  );
};

const mapStateToProps = (state) => ({
  educationTitle: state.education.educationTitle,
});

export default connect(mapStateToProps)(LmsPage);
