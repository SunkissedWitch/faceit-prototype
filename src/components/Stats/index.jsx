const staticStat = [
  {
    value: '9+',
    desc: 'YEARS OF EXPERIENCE'
  },
  {
    value: '80+',
    desc: 'EMPLOYEES'
  },
  {
    value: '1064+',
    desc: 'CLOSED PROJECTS'
  },
  {
    value: '168+',
    desc: 'CURRENT JOBS'
  },
]

export const Stats = () => {
  return (
    <div className="stats w-full">
      {staticStat.map((stat, index) => (
        <div key={`${stat.value}-${index}`} className="stat">
          <div className="stat-value text-[4rem] leading-none text-primary font-semibold text-center">{stat.value}</div>
          <div className="stat-desc text-[1.32rem] leading-tight text-primary-content capitalize text-center">{stat.desc.toLowerCase()}</div>
        </div>
      ))}
    </div>
  )
}