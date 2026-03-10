import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { schools } from '../data/schools';
import { MapPin, Search, Milestone, Users, Zap, Award } from 'lucide-react';

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

      {filterRegion === '闵行区' && (
        <div style={{
          backgroundColor: '#fffcf5',
          border: '1px solid #ecc94b',
          borderRadius: '12px',
          padding: '1.5rem',
          margin: '0 auto 2rem auto',
          maxWidth: '1200px',
          boxShadow: '0 4px 6px rgba(236, 201, 75, 0.1)',
          lineHeight: '1.7'
        }}>
          <h2 style={{ color: '#975a16', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={20} />
            闵行公办小学“卷王”如何诞生？(第一性原理剖析)
          </h2>
          <div style={{ fontSize: '0.95rem', color: '#4a5568', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <strong style={{ color: '#744210', display: 'flex', alignItems: 'center', gap: '6px' }}><Milestone size={16} /> 宏观推手：高知人口筛选器</strong>
              <p style={{ margin: '4px 0 0 0' }}>紫竹等板块的“卷”，本质不是资源极度匮乏，而是高质人口集聚。交大、华师大及大厂带来同质化极高的高知家长群，生源本身构成了难以逾越的壁垒。</p>
            </div>
            <div>
              <strong style={{ color: '#744210', display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={16} /> 微观生态：“既要又要”的降维打击</strong>
              <p style={{ margin: '4px 0 0 0' }}>对下死磕统考成绩底线，对上追求全能素质教育。家长驱动学校在校内配置如编程、航模、武术等昂贵课程，“双减”后课后服务演变为高强度的提优补弱与作业清零。</p>
            </div>
            <div>
              <strong style={{ color: '#744210', display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={16} /> 供给响应：企业化的高KPI运营</strong>
              <p style={{ margin: '4px 0 0 0' }}>“卷王”校长采用现代企业级的高效运营，极其抓细节、控数据（如强调体能消耗的Health+策略），最大化超配周边大学与园区的产学研资源，形成三方合力推演的现象级闭环。</p>
            </div>
          </div>
        </div>
      )}

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
