type DisplayStatusProps = {
    status: string;
};

export default function DisplayStatus({status}: DisplayStatusProps) {
    if (status === '전시중-line') {
        return (
            <div className="h-[26px] px-2 bg-point rounded-[13px] justify-center items-center inline-flex">
                <div className="text-white text-xs font-bold font-['Noto Sans KR'] leading-[18px]">전시중</div>
            </div>
        )
    }
    if (status === '전시중-solid') {
        return (
            <div
                className="h-[26px] px-2 rounded-[13px] border border-point justify-center items-center inline-flex">
                <div className="text-point text-xs font-bold font-['Noto Sans KR'] leading-[18px]">전시중</div>
            </div>
        )
    }
    if (status === '업커밍-line') {
        return (
            <div className="h-[26px] px-2 bg-black rounded-[13px] justify-center items-center inline-flex">
                <div className="text-white text-xs font-bold font-['Noto Sans KR'] leading-[18px]">업커밍</div>
            </div>
        )
    }
    if (status === '업커밍-solid') {
        return (
            <div className="h-[26px] px-2 rounded-[13px] border border-black justify-center items-center inline-flex">
                <div className="text-black text-xs font-bold font-['Noto Sans KR'] leading-[18px]">업커밍</div>
            </div>
        )
    }
    if (status === '전시종료-line') {
        return (
            <div className="h-[26px] px-2 bg-grayscale_gray3 rounded-[13px] justify-center items-center inline-flex">
                <div className="text-white text-xs font-bold font-['Noto Sans KR'] leading-[18px]">전시종료</div>
            </div>
        )
    }
    if (status === '전시종료-solid') {
        return (
            <div
                className="h-[26px] px-2 rounded-[13px] border border-grayscale_gray3 justify-center items-center inline-flex">
                <div className="text-grayscale_gray3 text-xs font-bold font-['Noto Sans KR'] leading-[18px]">전시종료</div>
            </div>
        )
    }


}