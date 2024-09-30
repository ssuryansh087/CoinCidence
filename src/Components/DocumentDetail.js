import React, { useState, useEffect } from 'react';
import { db } from '../database/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './styles/DocumentDetail.css';

const DocumentDetail = ({ documentId, onClose }) => {
  const [documentData, setDocumentData] = useState(null);

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
        <p><strong>Text 1:</strong> {documentData.text1}</p>
        <p><strong>Text 2:</strong> {documentData.text2}</p>
        <p><strong>ID:</strong> {documentData.id}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DocumentDetail;