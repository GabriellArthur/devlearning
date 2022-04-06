import Link from "next/link";
import Lottie from 'react-lottie';

import animation from '../../public/lottie/404.json';

export default function Custom404() {
  return (
    <div>
      <Lottie 
         options={{
            animationData:animation,
            autoplay:true,
            loop:true,
            width:500
         }}
         height={400}
         width={400}
      />
      <Link href='/'>Voltar</Link>
    </div>
  );
}
