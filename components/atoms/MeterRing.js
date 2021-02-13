import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    svg: {
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontWeight: 500
    }
}))

const polarToCartesian = ({ centerX, centerY, radius, angleInDegrees }) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    }
}

const describeArc = ({ x, y, radius, startAngle, endAngle }) => {
    const start = polarToCartesian({
        centerX: x,
        centerY: y,
        radius,
        angleInDegrees: endAngle
    })
    const end = polarToCartesian({
        centerX: x,
        centerY: y,
        radius,
        angleInDegrees: startAngle
    })

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

    const d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ')

    return d
}

const tickMarks = ({ centerX, centerY, radius, startAngle, endAngle, side, min, max, division, subDivision }) => {
    let d = []
    let divCounter = 0
    for (let angleInDegrees = startAngle;
        angleInDegrees <= endAngle + 0.001;
        angleInDegrees += (endAngle - startAngle) / (division * subDivision)
    ) {
        const isDivision = (divCounter++) % subDivision === 0
        const start = polarToCartesian({
            centerX,
            centerY,
            radius,
            angleInDegrees
        })
        const stop = polarToCartesian({
            centerX,
            centerY,
            radius: radius + (isDivision ? 10 : 5) * (side === 'inner' ? -1 : 1),
            angleInDegrees
        })
        d = d.concat(['M', start.x, start.y, 'L', stop.x, stop.y])
    }
    return d.join(' ')
}

const labels = ({ centerX, centerY, radius, startAngle, endAngle, side, division, max, min }) => {
    const indicatorIncrement = (max - min) / division
    const minSize = min.toString().length
    const maxSize = max.toString().length
    const indicatorSize = minSize > maxSize ? minSize : maxSize
    let indicatorCounter = min
    let radiusAdjust, radiusOffset, verticalOffset
    if (max <= 99) {
        radiusAdjust = side === 'inner' ? -32 : 26
        radiusOffset = side === 'inner' ? 0 : -20
        verticalOffset = side === 'inner' ? 0 : 13
    } else if (max <= 999) {
        radiusAdjust = side === 'inner' ? -33 : 32
        radiusOffset = side === 'inner' ? 0 : -34
        verticalOffset = side === 'inner' ? -2 : 15
    } else if (max <= 9999) {
        radiusAdjust = side === 'inner' ? -38 : 38
        radiusOffset = side === 'inner' ? -2 : -38
        verticalOffset = side === 'inner' ? -5 : 20
    } else if (max <= 99999) {
        radiusAdjust = side === 'inner' ? -43 : 42
        radiusOffset = side === 'inner' ? -6 : -46
        verticalOffset = side === 'inner' ? -5 : 25
    }
    const result = []
    for (let angleInDegrees = startAngle; angleInDegrees < endAngle + 0.001; angleInDegrees += (endAngle - startAngle) / division) {
        const indicator = indicatorCounter.toString()
        const padder = (indicator.length - indicatorSize) * 4
        const start = polarToCartesian({
            centerX: centerX + radiusAdjust / 2 + radiusOffset - padder,
            centerY: centerY - radiusAdjust / 4 + verticalOffset,
            radius: radius + radiusAdjust,
            angleInDegrees
        })
        result.push({ start: start, value: indicator })
        indicatorCounter += indicatorIncrement
    }
    return result
}

export default function MeterRing({ width, height, radius, color = 'black', side, min, max, division, subDivision, startAngle = -135, endAngle = 135 }) {
    const classes = useStyles()
    const xmlns = 'http://www.w3.org/2000/svg'
    const strokeWidth = 1
    const fill = 'none'

    return <svg className={classes.svg} width={`${width}px`} height={`${height}px`} xmlns={xmlns}>
        <path d={
            describeArc({
                x: width / 2,
                y: height / 2,
                radius,
                startAngle,
                endAngle
            })
        } fill={fill} stroke={color} strokeWidth={strokeWidth} />
        <path d={
            tickMarks({
                centerX: width / 2,
                centerY: height / 2,
                radius,
                startAngle,
                endAngle,
                side,
                division,
                subDivision
            })
        } fill={fill} stroke={color} strokeWidth={strokeWidth}/>
        {labels({
            centerX: width / 2,
            centerY: height / 2,
            radius: radius,
            startAngle,
            endAngle,
            side,
            division,
            max,
            min
        }).map((item, index) => {
            return <text
                className={classes.text}
                key={index}
                x={item.start.x}
                y={item.start.y}
                fontSize={24}
                fill={color}
            >{item.value}</text>
        })}
    </svg>
}
