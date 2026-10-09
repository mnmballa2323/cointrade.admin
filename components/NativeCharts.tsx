"use client";

import { useId } from 'react';

export type ChartPoint = { name?: string | number; date?: string; [key: string]: unknown };

/** Original Cointrade SVG renderer. No copied chart-library code or external requests. */
export function AreaPlot({ data, dataKey, color = '#0052ff', height = 300, compact = false }: {
    data: ChartPoint[]; dataKey: string; color?: string; height?: number | string; compact?: boolean;
}) {
    const gradient = useId().replace(/:/g, '');
    const points = data.filter(point => typeof point[dataKey] === 'number' && Number.isFinite(point[dataKey]));
    if (!points.length) return <div role="status" style={{ height }}>No chart data available.</div>;
    const values = points.map(point => point[dataKey] as number);
    const min = values.reduce((a, b) => Math.min(a, b)), max = values.reduce((a, b) => Math.max(a, b));
    const span = max - min || Math.max(Math.abs(max) * .02, 1);
    const low = min - span * .1, high = max + span * .1;
    const left = compact ? 0 : 78, right = compact ? 800 : 784;
    const top = compact ? 8 : 20, bottom = compact ? 280 : 248;
    const xy = values.map((value, index) => [
        points.length === 1 ? (left + right) / 2 : left + index * (right - left) / (points.length - 1),
        bottom - (value - low) / (high - low) * (bottom - top),
    ]);
    const line = xy.map(([x, y], index) => `${index ? 'L' : 'M'}${x},${y}`).join(' ');
    return <div style={{ width: '100%', height }}>
        <svg viewBox="0 0 800 290" width="100%" height="100%" role="img" aria-label={`${dataKey} history, ${points.length} observations`}>
            <defs><linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor={color} stopOpacity=".22" /><stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient></defs>
            {!compact && Array.from({ length: 5 }, (_, index) => {
                const y = top + index * (bottom - top) / 4;
                return <g key={index}><path d={`M${left},${y}H${right}`} stroke="currentColor" opacity=".12" />
                    <text x={left - 8} y={y + 4} textAnchor="end" fontSize="12" fill="currentColor" opacity=".65">{(high - index * (high - low) / 4).toLocaleString(undefined, { maximumFractionDigits: 2 })}</text></g>;
            })}
            <path d={`${line} L${xy[xy.length - 1][0]},${bottom} L${xy[0][0]},${bottom} Z`} fill={`url(#${gradient})`} />
            <path d={line} stroke={color} strokeWidth="2" fill="none" />
            {xy.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="4" fill={color} opacity={points.length === 1 ? 1 : .15} tabIndex={0}>
                <title>{String(points[index].name ?? points[index].date ?? index + 1)}: {values[index].toLocaleString()}</title>
            </circle>)}
            {!compact && <>
                <text x={left} y="278" fontSize="12" fill="currentColor">{String(points[0].name ?? points[0].date ?? '')}</text>
                <text x={right} y="278" textAnchor="end" fontSize="12" fill="currentColor">{String(points[points.length - 1].name ?? points[points.length - 1].date ?? '')}</text>
            </>}
        </svg>
    </div>;
}

export function RatioPlot({ data, colors, unit = 'trades', showLabels = true }: { data: { name: string; value: number }[]; colors: string[]; unit?: string; showLabels?: boolean }) {
    const values = data.map(point => Number.isFinite(point.value) ? Math.max(0, point.value) : 0);
    const total = values.reduce((sum, value) => sum + value, 0);
    let offset = 0;
    return <div className="flex h-full flex-col items-center justify-center gap-6">
        <svg viewBox="0 0 240 240" width="220" height="220" role="img" aria-label={total ? data.map((point, index) => `${point.name}: ${values[index]}`).join(', ') : 'No trades yet'}>
            <circle cx="120" cy="120" r="85" fill="none" stroke="currentColor" opacity=".1" strokeWidth="30" />
            {total > 0 && values.map((value, index) => {
                const fraction = value / total, start = offset; offset += fraction;
                return <circle key={index} cx="120" cy="120" r="85" fill="none" stroke={colors[index % colors.length]} strokeWidth="30" pathLength="1" strokeDasharray={`${fraction} ${1 - fraction}`} strokeDashoffset={-start} transform="rotate(-90 120 120)"><title>{data[index].name}: {value}</title></circle>;
            })}
            {showLabels && <text x="120" y="125" textAnchor="middle" fill="currentColor" fontSize="18">{total ? `${total} ${unit}` : `No ${unit || 'data'}`}</text>}
        </svg>
        {showLabels && <div className="flex gap-5">{data.map((point, index) => <span key={point.name} style={{ color: colors[index % colors.length] }}>{point.name}: {values[index]}</span>)}</div>}
    </div>;
}

export function BarPlot({ data, series, height = '100%' }: {
    data: ChartPoint[]; series: { key: string; color: string }[]; height?: string | number;
}) {
    if (!data.length) return <div role="status" style={{ height }}>No chart data available.</div>;
    const value = (point: ChartPoint, key: string) => typeof point[key] === 'number' && Number.isFinite(point[key]) ? point[key] as number : 0;
    const max = data.reduce((acc, point) => series.reduce((n, s) => Math.max(n, Math.abs(value(point, s.key))), acc), 1);
    const group = 720 / data.length, bar = Math.min(56, group / (series.length + 1));
    return <svg viewBox="0 0 800 290" width="100%" height={height} role="img" aria-label={`Bar chart: ${series.map(s => s.key).join(', ')}`}>
        <path d="M60,130H780" stroke="currentColor" opacity=".15" />
        {data.map((point, index) => <g key={index}>
            {series.map((s, n) => {
                const amount = value(point, s.key), extent = Math.abs(amount) / max * 110;
                return <rect key={s.key} x={60 + index * group + group / 2 + (n - series.length / 2) * bar} y={amount >= 0 ? 130 - extent : 130} width={bar - Math.min(bar * .1, 4)} height={extent} rx="2" fill={s.color} tabIndex={0}><title>{String(point.name ?? point.date ?? point.month ?? index + 1)} · {s.key}: {amount.toLocaleString()}</title></rect>;
            })}
            <text x={60 + (index + .5) * group} y="265" textAnchor="middle" fontSize="12" fill="currentColor">{String(point.name ?? point.date ?? point.month ?? index + 1)}</text>
        </g>)}
        <text x="60" y="285" fontSize="12" fill="currentColor">{series.map(s => s.key).join(' / ')} · scale ±{max.toLocaleString()}</text>
    </svg>;
}
