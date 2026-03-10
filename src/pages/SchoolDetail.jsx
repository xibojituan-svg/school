import { useParams, useNavigate } from 'react-router-dom';
import { schools } from '../data/schools';
import { teachers } from '../data/teachers';
import { ArrowLeft, MapPin, Award, BookOpen, Quote, ShieldCheck } from 'lucide-react';

function SchoolDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const school = schools.find(s => s.id === id);
  const schoolTeachers = teachers.filter(t => t.schoolId === id);

  if (!school) {
    return <div>未找到该学校。</div>;
  }

  return (
    <div className="school-detail">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> 返回上一级
      </button>

      <div className="hero-card glass-panel" style={{ borderTop: '4px solid var(--primary-color)' }}>
        <h1>{school.name}</h1>
        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem', alignItems: 'center' }}>
          <MapPin size={16} />
          <span>{school.address} ({school.region} ｜ {school.subRegion})</span>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          <span>{school.type}</span>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          <span>{school.level}</span>
        </div>

        <div className="tag-container" style={{ marginBottom: '1.5rem' }}>
          {school.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <h2>🏫 校园风貌与空间坐标</h2>
      <div className="photo-gallery">
        {school.photos?.map((photo, idx) => (
          <div key={idx} className="photo-card">
            <img src={photo} alt={`${school.name} 风景 ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="map-container" style={{ marginBottom: '3rem' }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(school.name + " " + school.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          allowFullScreen
        ></iframe>
      </div>

      <h2>📊 教育情报全息扫描</h2>
      <div className="grid-2">
        <div className="info-card">
          <h3><BookOpen size={20} color="var(--primary-color)"/> 教育方法论</h3>
          <p>{school.teachingMethod}</p>
        </div>
        <div className="info-card">
          <h3><Quote size={20} color="var(--primary-color)"/> 家长口碑</h3>
          <p>{school.reputation}</p>
        </div>
        <div className="info-card">
          <h3><Award size={20} color="var(--primary-color)"/> 核心优势</h3>
          <p>{school.advantages}</p>
        </div>
        <div className="info-card" style={{ background: '#f8faff', borderLeft: '4px solid #38a169' }}>
          <h3><span style={{color: '#38a169'}}>¥</span> 政策与学费详情</h3>
          <p style={{ fontWeight: 600, fontSize: '1.2rem', margin: '0.5rem 0', color: school.tuition.includes('免学费') ? '#38a169' : '#e53e3e' }}>
            {school.tuition}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{school.tuitionDetail}</p>
        </div>
        <div className="info-card" style={{ background: 'linear-gradient(to right, #f8faff, #ffffff)', gridColumn: '1 / -1' }}>
          <h3><ShieldCheck size={20} color="var(--primary-color)"/> 历年升学率盘点</h3>
          <div style={{ marginTop: '1rem' }}>
            {school.admissionRate.map((rate, i) => (
              <div key={i} className="rate-item">
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{rate.year}年 ({rate.label})</span>
                <span className="rate-value">{rate.rate}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {schoolTeachers.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2>核心名师矩阵</h2>
          <div className="teacher-grid">
            {schoolTeachers.map(teacher => (
              <div
                key={teacher.id}
                className="teacher-card"
                onClick={() => navigate(`/teacher/${teacher.id}`)}
              >
                <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
                <div className="teacher-name">{teacher.name}</div>
                <div className="teacher-title">{teacher.title}</div>
                <div className="tag-container" style={{ justifyContent: 'center', marginTop: '0.75rem' }}>
                  {teacher.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="tag" style={{ background: '#f4f5f7', color: '#5e6c84', fontSize: '0.7rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SchoolDetail;
