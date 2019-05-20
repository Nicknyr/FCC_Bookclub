import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
  return (
    <Container>
      <Row className="review-section">
        <Col md={{ size: 8, offset: 2 }}>
          <h3>Review</h3>
          <p className="review-paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Lobortis feugiat vivamus at augue eget arcu. Tortor aliquam nulla facilisi cras fermentum odio. Sit amet consectetur adipiscing elit. Arcu ac tortor dignissim convallis aenean et tortor at risus."</p>
          <Row className="user-review">
            <span className="user">~Nick K, user</span>
            <span>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                color="white"
                className="bubble"
              />
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}


export default Review;
