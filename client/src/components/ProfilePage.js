import React from 'react';
import { Col } from 'reactstrap';
import NavigationBar from './Nav';
import Footer from './Footer';
import ProfileTabs from './ProfileTabs';
import ProfileCard from './ProfileCard';

const Profile = (props) => {
    return (
      <div>
        <NavigationBar />
        <Col md={{size: 4, offset: 4 }} xs={{ size: 10, offset: 1}} className="profile-page">
          <ProfileCard />
          <ProfileTabs />
        </Col>
        <Footer />
      </div>
    );

}

export default Profile;
