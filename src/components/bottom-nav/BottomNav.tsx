'use client'
import {usePathname} from 'next/navigation';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function BottomNav() {
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname);

    useEffect(() => {
        setCurrentRoute(pathname);
    }, [pathname]);

    return (
        <>
            <div className="w-[375px] h-[58px] bg-white flex justify-between">
                <div className="w-[375px] h-[58px] left-0 top-0 absolute">
                </div>
                <div
                    className="w-[56px] h-[46px] flex flex-col justify-center items-center gap-1 left-[17px] top-[9px] absolute">
                    <Image src={currentRoute === '/home' ? "/icons/tab/home-on.svg" : "/icons/tab/home-off.svg"}
                           width={24} height={24} alt={"home"}/>
                    <div
                        className="text-center text-black text-xs font-normal font-['Noto Sans KR'] leading-[18px] whitespace-nowrap">홈
                    </div>
                </div>
                <div
                    className="w-[56px] h-[46px] flex flex-col justify-center items-center gap-1 left-[88px] top-[9px] absolute">
                    <Image src={currentRoute === '/art' ? "/icons/tab/art-on.svg" : "/icons/tab/art-off.svg"} width={24}
                           height={24} alt={"art"}/>
                    <div
                        className="text-center text-black text-xs font-normal font-['Noto Sans KR'] leading-[18px] whitespace-nowrap">작품정보
                    </div>
                </div>
                <div
                    className="w-[56px] h-[46px] flex flex-col justify-center items-center gap-1 left-[159px] top-[9px] absolute">
                    <Image src={currentRoute === '/map' ? "/icons/tab/map-on.svg" : "/icons/tab/map-off.svg"} width={24}
                           height={24} alt={"map"}/>
                    <div
                        className="text-center text-black text-xs font-normal font-['Noto Sans KR'] leading-[18px] whitespace-nowrap">내주변전시
                    </div>
                </div>
                <div
                    className="w-[56px] h-[46px] flex flex-col justify-center items-center gap-1 left-[230px] top-[9px] absolute">

                    <Image
                        src={currentRoute === '/curator' ? "/icons/tab/curator-on.svg" : "/icons/tab/curator-off.svg"}
                        width={24} height={24} alt={"curator"}/>
                    <div
                        className="text-center text-black text-xs font-normal font-['Noto Sans KR'] leading-[18px] whitespace-nowrap">큐레이터픽
                    </div>
                </div>
                <div
                    className="w-[56px] h-[46px] flex flex-col justify-center items-center gap-1 left-[301px] top-[9px] absolute">
                    <Image src={currentRoute === '/mypage' ? "/icons/tab/mypage-on.svg" : "/icons/tab/mypage-off.svg"}
                           width={24} height={24} alt={"mypage"}/>
                    <div
                        className="text-center text-black text-xs font-normal font-['Noto Sans KR'] leading-[18px] whitespace-nowrap">마이페이지
                    </div>
                </div>
            </div>
        </>
    );
}