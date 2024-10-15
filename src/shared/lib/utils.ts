import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import { textStyles } from './tokens/text-styles';

//  각 키의 첫 번째 문자(점)를 제거
const textStyleKeys = Object.keys(textStyles).map((key) => key.slice(1));

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // 이렇게 해야 저희가 설정한 색상과 텍스트 클래스가 병합되지 않습니다.
      'font-size': textStyleKeys,
    },
  },
});

export function cn(...args: ClassValue[]) {
  return customTwMerge(clsx(...args));
}
