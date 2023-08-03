import './styles.css'

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
    <div className="stats stats-vertical sm:grid-cols-2 lg:grid-cols-none lg:stats-horizontal sm:gap-y-8 w-full">
      {staticStat.map((stat, index) => (
        <div key={`${stat.value}-${index}`} className="stat py-6 pt-2 lg:py-4 custom-medium-stats first:before:hidden before:bg-neutral dark:before:bg-base-300 border-transparent lg:before:hidden lg:border-neutral dark:lg:border-[#252525] sm:before:hidden lg:after:hidden odd:after:hidden after:hidden sm:after:block">
          <div className="stat-value text-[3.4375rem] lg:text-[3.25rem] xl:text-[4rem] leading-[155.4%] text-primary font-semibold text-center">{stat.value}</div>
          <div className="stat-desc text-xl lg:text-[1.125rem] xl:text-[1.32rem] leading-none text-primary-content capitalize text-center">{stat.desc.toLowerCase()}</div>
        </div>
      ))}
    </div>
  )
}