import React, { useState, useEffect } from 'react';
import db from '../database/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './styles/DocumentDetail.css';
import Memory from './Memory';
import Quiz from './QuizComponent';

const DocumentDetail = ({ documentId, onClose }) => {
  const [documentData, setDocumentData] = useState(null);
  const [showHello, setShowHello] = useState(false);
  const [showHelloThere, setShowHelloThere] = useState(false);

  useEffect(() => {
    const fetchDocument = async () => {
      const docRef = doc(db, "budget-basics", documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocumentData({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchDocument();
  }, [documentId]);

  const handleButtonClick1 = () => {
    setShowHello(true);
    setShowHelloThere(false);
  };

  const handleButtonClick2 = () => {
    setShowHello(false);
    setShowHelloThere(true);
  };

  if (showHello) {
    return <Memory/>;
  }

  if (showHelloThere) {
    return <Quiz/>;
  }

  if (!documentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="document-detail">
      <div className="document-detail-content">
        <h2>{documentData.title}</h2>
        {documentData.image && (
          <img
            src={documentData.image}
            alt={documentData.title}
            className="document-image"
          />
        )}
        <p><strong>Example:</strong> {documentData.example}</p>
        <p><strong>Overview:</strong> {documentData.overview}</p>
        <p>{documentData.text1}</p>
        <p>{documentData.text2}</p>
        <p><strong>ID:</strong> {documentData.id}</p>
        <button className="close-button" onClick={onClose}>Close</button>

        {/* New buttons added below */}
        <button className="action-button" onClick={handleButtonClick1}>
          Memory Testing
        </button>
        <button className="action-button" onClick={handleButtonClick2}>
          Quiz Showdown
        </button>
      </div>
    </div>
  );
};

export default DocumentDetail;
