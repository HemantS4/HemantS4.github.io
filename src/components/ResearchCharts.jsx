import React from 'react'
import styles from '../styles/ResearchCharts.module.css'

// Simple bar chart component
export const BarChart = ({ data, title, height = 320 }) => {
  if (!data || data.length === 0) {
    return null
  }

  const maxValue = Math.max(...data.map(d => d.value))
  const unit = data[0]?.unit || '%'

  return (
    <div className={styles.chartContainer}>
      {title && <h4 className={styles.chartTitle}>{title}</h4>}
      <div className={styles.barChart} style={{ height: `${height}px` }}>
        {data.map((item, index) => (
          <div key={index} className={styles.barItem}>
            <div
              className={styles.bar}
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                background: item.color
                  ? `linear-gradient(to top, ${item.color}, ${item.color}dd)`
                  : 'linear-gradient(to top, #ff7849, #ffb347)'
              }}
            >
              <span className={styles.barValue}>{item.value}{item.unit || unit}</span>
            </div>
            <span className={styles.barLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Horizontal progress bars for comparisons
export const ProgressBars = ({ data, title }) => {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <div className={`${styles.chartContainer} ${styles.progressBarsContainer}`}>
      {title && <h4 className={styles.chartTitle}>{title}</h4>}
      <div className={styles.progressBars}>
        {data.map((item, index) => (
          <div key={index} className={styles.progressItem}>
            <div className={styles.progressHeader}>
              <span className={styles.progressLabel}>{item.label}</span>
              <span className={styles.progressValue}>{item.value}{item.unit || '%'}</span>
            </div>
            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBarFill}
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color || '#ff7849'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Stats grid for key numbers
export const StatsGrid = ({ stats, columns = 3 }) => {
  if (!stats || stats.length === 0) {
    return null
  }

  return (
    <div className={styles.statsGrid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statValue} style={{ color: stat.color || '#ff7849' }}>
            {stat.value}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
          {stat.description && <div className={styles.statDescription}>{stat.description}</div>}
        </div>
      ))}
    </div>
  )
}

// Pie/Donut chart for distribution
export const DonutChart = ({ data, title, centerLabel }) => {
  if (!data || data.length === 0) {
    return null
  }

  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0

  const segments = data.map(item => {
    const percentage = (item.value / total) * 100
    const angle = (item.value / total) * 360
    const segment = {
      ...item,
      percentage: percentage.toFixed(1),
      startAngle: currentAngle,
      angle: angle
    }
    currentAngle += angle
    return segment
  })

  return (
    <div className={`${styles.chartContainer} ${styles.donutContainer}`}>
      {title && <h4 className={styles.chartTitle}>{title}</h4>}
      <div className={styles.donutChartWrapper}>
        <svg className={styles.donutChart} viewBox="0 0 200 200">
          <g transform="translate(100, 100)">
            {segments.map((segment, index) => {
              const startAngle = (segment.startAngle - 90) * (Math.PI / 180)
              const endAngle = (segment.startAngle + segment.angle - 90) * (Math.PI / 180)
              const largeArc = segment.angle > 180 ? 1 : 0

              const x1 = 80 * Math.cos(startAngle)
              const y1 = 80 * Math.sin(startAngle)
              const x2 = 80 * Math.cos(endAngle)
              const y2 = 80 * Math.sin(endAngle)

              const pathData = [
                `M ${x1} ${y1}`,
                `A 80 80 0 ${largeArc} 1 ${x2} ${y2}`,
                `L ${x2 * 0.5} ${y2 * 0.5}`,
                `A 40 40 0 ${largeArc} 0 ${x1 * 0.5} ${y1 * 0.5}`,
                'Z'
              ].join(' ')

              return (
                <path
                  key={index}
                  d={pathData}
                  fill={segment.color || `hsl(${index * 40}, 70%, 60%)`}
                  className={styles.donutSegment}
                />
              )
            })}
            {centerLabel && (
              <text className={styles.donutCenterText} textAnchor="middle" dy="0.3em">
                {centerLabel}
              </text>
            )}
          </g>
        </svg>
        <div className={styles.donutLegend}>
          {segments.map((segment, index) => (
            <div key={index} className={styles.legendItem}>
              <span
                className={styles.legendColor}
                style={{ backgroundColor: segment.color || `hsl(${index * 40}, 70%, 60%)` }}
              />
              <span className={styles.legendLabel}>{segment.label}</span>
              <span className={styles.legendValue}>{segment.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Timeline visualization
export const Timeline = ({ events, title }) => {
  return (
    <div className={`${styles.chartContainer} ${styles.timelineContainer}`}>
      {title && <h4 className={styles.chartTitle}>{title}</h4>}
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={index} className={styles.timelineEvent}>
            <div className={styles.timelineMarker} style={{ backgroundColor: event.color || '#ff7849' }} />
            <div className={styles.timelineContent}>
              <div className={styles.timelineLabel}>{event.label}</div>
              <div className={styles.timelineDescription}>{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Comparison table
export const ComparisonTable = ({ data, title }) => {
  return (
    <div className={`${styles.chartContainer} ${styles.comparisonTableContainer}`}>
      {title && <h4 className={styles.chartTitle}>{title}</h4>}
      <div className={styles.comparisonTable}>
        <div className={`${styles.comparisonRow} ${styles.comparisonHeader}`}>
          <div className={styles.comparisonCell}></div>
          {data.columns.map((col, index) => (
            <div key={index} className={styles.comparisonCell}>{col}</div>
          ))}
        </div>
        {data.rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.comparisonRow}>
            <div className={`${styles.comparisonCell} ${styles.comparisonRowLabel}`}>{row.label}</div>
            {row.values.map((value, colIndex) => (
              <div key={colIndex} className={styles.comparisonCell}>
                {typeof value === 'boolean' ? (
                  <span className={`${styles.checkMark} ${value ? styles.yes : styles.no}`}>
                    {value ? '✓' : '✗'}
                  </span>
                ) : (
                  value
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default {
  BarChart,
  ProgressBars,
  StatsGrid,
  DonutChart,
  Timeline,
  ComparisonTable
}
