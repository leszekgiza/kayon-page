import Image from 'next/image';

const KayonTopShapes = () => {
  return (
    <div className='kayon-top-shapes absolute z-10 top-0 left-1/2 -translate-x-1/2 flex pointer-events-none'>
      <Image
        className=""
        src="/ts-shape.svg"
        alt=""
        width={150}
        height={115}
        priority
        draggable={false}
      />
      <Image
        className=""
        src="/te-shape.svg"
        alt=""
        width={150}
        height={115}
        priority
        draggable={false}
      />
    </div>
  )
};

export default KayonTopShapes;