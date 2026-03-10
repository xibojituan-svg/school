import { useParams, useNavigate } from 'react-router-dom';
import { teachers } from '../data/teachers';
import { schools } from '../data/schools';
import { ArrowLeft, User, Award, CheckCircle } from 'lucide-react';

function TeacherDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = teachers.find(t => t.id === id);
  if (!teacher) return <div>未找到该教师。</div>;

  const school = schools.find(s => s.id === teacher.schoolId);

  return (
    <div className="teacher-detail">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> 返回列表
      </button>

      <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
        <div className="teacher-profile">
          <img src={teacher.photo} alt={teacher.name} className="teacher-profile-photo" />
          
          <div className="teacher-profile-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h1>{teacher.name}</h1>
              <span style={{ 
                background: '#e3fcef', color: '#006644', 
                padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500,
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem'
              }}>
                <CheckCircle size={14} /> {teacher.status}
              </span>
            </div>
            
            <div className="subtitle" style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '2rem' }}>
              {teacher.title} ｜ {school?.name}
            </div>

            <div className="tag-container" style={{ marginBottom: '2rem' }}>
              {teacher.tags.map(tag => (
                <span key={tag} className="tag" style={{ background: '#f0f7ff', color: '#0052cc', fontSize: '0.875rem' }}>{tag}</span>
              ))}
            </div>

            <div className="quote-box">
              "{teacher.philosophy}"
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                <Award size={20} color="var(--primary-color)" /> 主要教学成绩与履历
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                {teacher.achievements}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
