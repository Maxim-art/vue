import { CSSClassesList } from '@variantjs/core';
import { ComputedRef, computed } from 'vue';
import useInjectsConfiguration from './useInjectsConfiguration';

export default function useInjectsClassesList(): ComputedRef<CSSClassesList> {
  const configuration = useInjectsConfiguration();

  return computed<CSSClassesList>((): CSSClassesList => configuration.classesList || {});
}
