import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, NavLink } from 'react-bootstrap';
import Students from '../pages/student/Students';
import BlogForm from '../pages/blog/BlogForm';
import Bloglar from '../pages/blog/Bloglar';
import { ToastContainer } from 'react-toastify';
import BasinForm from '../pages/press/BasinForm';
import BasinBloglar from '../pages/press/BasinBloglar';
import Employees from '../pages/employees/Employees';
import Instructors from '../pages/instructors/Instructors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher, faUserTie, faBlog, faRss, faNewspaper, faClipboardList, faGraduationCap, faBullhorn, faLanguage, faImage, faCalendarAlt,faAddressCard, faBlackboard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import '../../AdminPanel/styles/Sidebar.css'
import ImageList from '../pages/cloudinary/ImageList';
import NotificationAdmin from '../pages/notification/NotificationAdmin';
import AdminContact from '../pages/contact/AdminContact';
import AddEducation from '../pages/education/AddEducation';
import Educations from '../pages/education/Educations';
import Exam from '../pages/exam/Exam';
import AdminGuide from '../pages/userGuide/AdminGuide';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('ogrenci');

    const renderContent = () => {
      switch (activeTab) {
        case "blog":
          return <Card.Body><BlogForm/></Card.Body>;
        case "bloglarımız":
          return <Card.Body><Bloglar/></Card.Body>;
        case "ogrenci":
          return <Card.Body><Students/></Card.Body>;
        case "instructors":
            return <Card.Body><Instructors/></Card.Body>;
        case "employee":
            return <Card.Body><Employees/></Card.Body>;
        case "basindabiz":
            return <Card.Body><BasinForm/></Card.Body>;
        case "basindabizbloglarımız":
            return <Card.Body><BasinBloglar/></Card.Body>;
        case "egitimlerim":
            return <Card.Body>Eğitimlerim içeriği burada gösterilecek</Card.Body>;
        case "duyuruvehaberler":
            return <Card.Body><NotificationAdmin/></Card.Body>;
        case "contactus":
            return <Card.Body><AdminContact/></Card.Body>;
        case "egitim":
            return <Card.Body><AddEducation/></Card.Body>;
        case "egitimler":
            return <Card.Body> <Educations/> </Card.Body>;
            case "sınavlar":
              return <Card.Body><Exam/></Card.Body>
        case "dil":
            return <Card.Body>İngilizce Ve Türkçe Dil seçenekleri</Card.Body>;
        case "image":
            return <Card.Body><ImageList/>
              <ToastContainer position="bottom-right" autoClose={2000} /></Card.Body>;
        case "calendar":
            return <Card.Body>calendar Hayatım içeriği burada gösterilecek.</Card.Body>
        case "guide":
          return <Card.Body><AdminGuide/></Card.Body>
        default:
            return <Card.Body>İçerik bulunamadı.</Card.Body>;
      }
    };
  
    return (
      <>
        <Container className="p-0" >
          <Row>
            {/* Sol Taraf: Dikey Menü */}
            <Col lg={2} className='p-0'>
              <Nav className="flex-column vh-120 p-4" style={{backgroundColor:'#9833FF'}}>
              <Nav.Link className='text-white' onClick={() => setActiveTab("ogrenci")}><FontAwesomeIcon icon={faUserGraduate} /> Öğrencilerimiz</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("instructors")}><FontAwesomeIcon icon={faChalkboardTeacher} /> Eğitmenlerimiz</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("employee")}><FontAwesomeIcon icon={faUserTie} /> Görevliler</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("blog")}><FontAwesomeIcon icon={faBlog} /> Blog Ekle</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("bloglarımız")}><FontAwesomeIcon icon={faRss} /> Bloglar</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("basindabiz")}><FontAwesomeIcon icon={faNewspaper} /> Basın Yazısı Ekle</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("basindabizbloglarımız")}><FontAwesomeIcon icon={faClipboardList} /> Basın Yazı İşlemleri</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("duyuruvehaberler")}><FontAwesomeIcon icon={faBullhorn} /> Duyuru ve Haberler</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("contactus")}><FontAwesomeIcon icon={faAddressCard} /> İletişim Bilgileri</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("image")}><FontAwesomeIcon icon={faImage} /> Görseller</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("egitim")}><FontAwesomeIcon icon={faGraduationCap} /> Eğitim Ekle</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("egitimler")}><FontAwesomeIcon icon={faGraduationCap} /> Eğitimler</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("sınavlar")}><FontAwesomeIcon icon={faBlackboard} /> Sınavlar</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("dil")}><FontAwesomeIcon icon={faLanguage} /> Dil Seçenekleri</Nav.Link>
              <Nav.Link className='text-white' onClick={() => setActiveTab("calendar")}><FontAwesomeIcon icon={faCalendarAlt} /> Takvim</Nav.Link>
              <NavLink className='text-white' onClick={() => setActiveTab("guide")}><FontAwesomeIcon icon={faQuestionCircle}/>Admin Rehberi</NavLink>
              </Nav>
            </Col>
  
            {/* Sağ Taraf: İçerik Alanı */}
            <Col lg={10} className='p-0'>
              {renderContent()}
            </Col>
          </Row>
        </Container>
      </>
    );
  };

export default Sidebar