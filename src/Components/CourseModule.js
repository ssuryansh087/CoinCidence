import React, { useState, useEffect } from 'react';
import { db } from '../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './styles/CourseModule.css';
import DocumentDetail from './DocumentDetail';

const CourseModule = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "budget-basics"));
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  const handleClick = (doc) => {
    setSelectedDoc(selectedDoc?.id === doc.id ? null : doc);
  };

  const handleShowDetail = () => {
    if (selectedDoc) {
      setShowDetail(true);
    }
  };

  return (
    <div className="container">
      <ul className="document-list">
        {documents.map((doc) => (
          <li key={doc.id} className="document-item">
            <div
              className="document-header"
              onClick={() => handleClick(doc)}
            >
              <h3 className="document-title">{doc.title}</h3>
              {selectedDoc?.id === doc.id && (
                <div className="document-overview">
                  <p>{doc.overview}</p>
                  <button 
                    className="detail-button" 
                    onClick={handleShowDetail}
                  >
                    View Full Document
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      {showDetail && selectedDoc && (
        <DocumentDetail 
          documentId={selectedDoc.id} 
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
};

export default CourseModule;