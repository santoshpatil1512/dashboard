import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', rating: 5 },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', rating: 5 },
    { name: 'Devon Lane', feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and the blue cheese dressing is thick and loaded with blue cheese.', rating: 4 },
    // Add more feedbacks if needed
  ];

  return (
    <div className="customer-feedback">
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <h3>{feedback.name}</h3>
          <p>{feedback.feedback}</p>
          <div className="rating">
            {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
