import Image from 'next/image'

export default function PanelScrew({ screwType }) {
    screwType = screwType || 'brass'

    return <Image
        src={screwType === 'steel'
            ? '/images/screw.png'
            : '/images/brass-screw.png'}
        alt='panel screw'
        width={14}
        height={14}
    />
}
