import React from 'react';
import { useEffect, useState } from 'react';
import SurveyForm from '../../components/SurveyForm/SurveyForm';

function ServeyPage() {
  const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const id = localStorage.getItem('selectedCourseId');
        if (id) {
            setSelectedId(Number(id));
        }
    }, []);
  return (
    <div className="survey-page">
      <SurveyForm  selectedId={selectedId}/>
    </div>
  );
}

export default ServeyPage;