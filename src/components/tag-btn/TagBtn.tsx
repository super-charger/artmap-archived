'use client'
import Image from 'next/image';
import {ReactNode, useEffect, useState} from "react";

type OnDefaultTagProps = {
    children: ReactNode;
    hasXIcon?: boolean;
    isSelected?: boolean;
}

export default function TagBtn({children, hasXIcon = false, isSelected = false}: OnDefaultTagProps) {
    const [xIcon, setXIcon] = useState(hasXIcon);
    const [select, setSelect] = useState(isSelected);

    useEffect(() => {
        setXIcon(hasXIcon);
    }, [hasXIcon]);

    useEffect(() => {
        setSelect(isSelected);
    }, [isSelected]);

    return (
        <>
            {/*폰트 부분은 수정해야 합니다. 태그 상태 3개의 폰트가 모두 다릅니다*/}
            <div
                className={`h-[30px] px-2.5 gap-2.5 border-grayscale_gray2 ${select ? 'bg-primary text-grayscale_white' : 'bg-grayscale_white text-[#808080]'} rounded-[15px] border justify-center items-center inline-flex`}>
                <div
                    className="text-center text-xs font-normal font-['Noto Sans KR'] leading-[18px]">{children}
                </div>
                {xIcon && (
                    <Image src="/icons/system/xicon-s-gray4.svg" height={10}
                           width={10}
                           alt="xicon-s-gray4"/>
                )}
            </div>
        </>
    )
}