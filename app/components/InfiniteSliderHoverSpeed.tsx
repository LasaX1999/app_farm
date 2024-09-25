import { InfiniteSlider } from '@/app/components/framerMotion/Infinite';
import Image from 'next/image';

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <Image
        src='https://images.unsplash.com/photo-1702157896487-6dd66ce3c2c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D'
        alt='Dean blunt - Black Metal 2'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1649779117064-107e63b88758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHByb2R1Y3R8ZW58MHwwfDB8fHwy'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxmYXJtJTIwcHJvZHVjdHxlbnwwfDB8MHx8fDI%3D'
        alt='Yung Lean - Stardust'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZhcm0lMjBtZWF0fGVufDB8MHwwfHx8Mg%3D%3D'
        alt='Lana Del Rey - Ultraviolence'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1456295198429-05d2315cfebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm0lMjBmcnVpdHxlbnwwfDB8MHx8fDI%3D'
        alt='A$AP Rocky - Tailor Swif'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
    </InfiniteSlider>
  );
}
