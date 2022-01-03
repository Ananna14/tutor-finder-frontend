import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddTutorAds from './Pages/Teacher/AddTutorAds/AddTutorAds';
import TeacherHome from './Pages/Teacher/TeacherHome/TeacherHome';
import NewTeacherStatus from './Pages/Teacher/NewTeacherStatus/NewTeacherStatus';

import Nav from './Pages/Student/Nav/Nav';
// import Home from './Pages/Banner/Home/Home';
import Home from './Pages/Student/Home/Home';
import About from './Pages/Student/About/About';
import Contact from './Pages/Student/Contact/Contact';
import Footer from './Pages/Student/Footer/Footer';
import Courses from './Pages/Student/Courses/Courses';
import Teach from './Pages/Student/Teach/Teach';
import NotFound from './Pages/Student/NotFound/NotFound';

import AddTutor from './Pages/Admin/AddTutor/AddTutor';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageTutor from './Pages/Admin/ManageTutor/ManageTutor';
import ManageTutorAds from './Pages/Admin/ManageTutorAds/ManageTutorAds';
import ManageTutorBooks from './Pages/Admin/ManageTutorBooks/ManageTutorBooks';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            {/* student */}

            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/courses/:id" element={<PrivateRoute><Courses /></PrivateRoute>}></Route>
            <Route path="/teach" element={<Teach />}></Route>
            <Route path="/contact" element={<Contact />}></Route>


            {/* Teacher */}
            <Route path="/add-techer-ads" element={<AddTutorAds />}>
            </Route>
            <Route path="/teacher-dashboard" element={<TeacherHome />}>
            </Route>
            <Route path="/post-pending" element={<NewTeacherStatus />}>
            </Route>
            {/* Admin*/}
            <Route path="/admin" element={<AdminDashboard />}>
              <Route exact path="/admin" element={<MakeAdmin />}>
              </Route>
              <Route path={`admin/make-admin`} element={<MakeAdmin />}>
              </Route>
              <Route path={`admin/add-tutor`} element={<AddTutor />}>
              </Route>
              <Route path={`admin/manage-tutor`} element={<ManageTutor />}>
              </Route>
              <Route path={`admin/manage-tutor-ads`} element={<ManageTutorAds />}>
              </Route>
              <Route path={`admin/manage-tutor-books`} element={<ManageTutorBooks />}>
              </Route>
            </Route>
            {/* autentication */}
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
