import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { schools } from '../data/schools';
import { MapPin, Search } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const [filterRegion, setFilterRegion] = useState('全部');

  const regions = ['全部', '闵行区', '静安区', '浦东新区'];

  const filteredSchools = filterRegion === '全部'
    ? schools
    : schools.filter(s => s.region === filterRegion);

  return (
    <div className="home-page">
      <div className="hero-card glass-panel">
        <h1>区域优质教育资源导览</h1>
        <p className="subtitle">
          聚焦闵行紫竹、静安市北与浦东张江，为您呈现最详实的升学与教育生态数据。
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          {regions.map(r => (
            <button
              key={r}
              onClick={() => setFilterRegion(r)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: `1px solid ${filterRegion === r ? 'transparent' : 'var(--border-color)'}`,
                background: filterRegion === r ? 'var(--primary-color)' : 'white',
                color: filterRegion === r ? 'white' : 'var(--text-muted)',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.2s'
              }}
            >
              {r === '全部' ? <Search size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: '-2px' }}/> : <MapPin size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: '-2px' }}/>}
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>学校名称</th>
              <th>行政区域</th>
              <th>办学体制</th>
              <th>学费标准</th>
              <th>核心特色</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchools.map(school => (
              <tr key={school.id} onClick={() => navigate(`/school/${school.id}`)}>
                <td className="school-name">
                  <div>{school.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400, marginTop: '4px' }}>{school.level}</div>
                </td>
                <td>
                  <div style={{ fontWeight: 500 }}>{school.region}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{school.subRegion}</div>
                </td>
                <td>
                  <span style={{ 
                    color: school.type === '民办' ? '#c05621' : '#0052cc', 
                    background: school.type === '民办' ? '#feebc8' : '#e0e7ff',
                    padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600
                  }}>
                    {school.type}
                  </span>
                </td>
                <td style={{ fontWeight: 600, color: school.tuition.includes('免学费') ? '#38a169' : '#e53e3e' }}>
                  {school.tuition}
                </td>
                <td>
                  <div className="tag-container">
                    {school.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                    {school.tags.length > 2 && <span className="tag" style={{ background: '#f4f5f7', color: '#5e6c84' }}>+{school.tags.length - 2}</span>}
                  </div>
                </td>
              </tr>
            ))}
            {filteredSchools.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  当前筛选条件下暂无数据
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
