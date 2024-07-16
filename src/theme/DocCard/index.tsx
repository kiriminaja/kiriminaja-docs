import React from 'react';
import DocCard from '@theme-original/DocCard';
import type DocCardType from '@theme/DocCard';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocCardType>;

export default function DocCardWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocCard {...props} />
    </>
  );
}
