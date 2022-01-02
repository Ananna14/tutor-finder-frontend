import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './TeacherHome.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const TeacherHome = () => {
    AOS.init();
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./tutor.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    console.log(teachers)
    return (
        <>
            <Header />
            <Container>
                <marquee><h1 className="my-5 text-info">WELCOME TEACHER DASHBOARD</h1></marquee>

                <div className="row">
                    {
                        teachers.map(teacher => <div key={teacher?.id} teacher={teacher} className="col col-lg-6 col-md-6 col-sm-12 col-12 "
                        // data-aos="flip-left"
                        // data-aos-easing="ease-out-cubic"
                        // data-aos-duration="2500"
                        >
                            <div className="card mb-3 single-card ">
                                <div className="row g-0 ">
                                    <div className="col-md-4 border text-center">
                                        <img src={teacher?.img} className="img-fluid card-image rounded-pill mt-4" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h3 className="card-title fw-bolder text-primary">{teacher?.name}</h3>
                                            <p className="card-text fw-bolder">Tuition Class : {teacher?.class}</p>
                                            <p className="card-text fw-bolder">Teaching : {teacher?.subject[0]}, {teacher?.subject[1]}</p>
                                            <p className="card-text fw-bolder">Qualification : {teacher?.current_education}</p>
                                            <p className="card-text fw-bolder">Institute : {teacher?.institute}</p>
                                            <p className="card-text fw-bolder">Email : {teacher?.email}</p>
                                            <p className="card-text fw-bolder">Phone : {teacher?.mobile}</p>
                                            <p className="card-text fw-bolder">Salary : Tk {teacher?.salary}</p>
                                            <p className="card-text fw-bolder">Tuition Areas : {teacher?.area}</p>

                                            <p className="card-text border-top">Current Status:<small className="text-primary fw-bold"> Approved</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>


            </Container>
            <Footer />
        </>
    );
};

export default TeacherHome;