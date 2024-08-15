'use client';

import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { OverlayRenderProps } from 'react-photo-view/dist/types';
function ToolBar(props: OverlayRenderProps) {
  const { images, index } = props;

  const currentImage = images[index];

  return <div className="flex justify-between items-center p-4">{(currentImage?.originRef?.current as any)?.alt}</div>;
}
type PhotoViewer = {} & React.ImgHTMLAttributes<HTMLImageElement>;
function PhotoViewer({ ...props }: PhotoViewer) {
  return (
    <PhotoProvider
      maskOpacity={0.6}
      maskClassName="backdrop-filter backdrop-blur-sm"
      //   bannerVisible={false}
      toolbarRender={ToolBar}
    >
      <PhotoView src={props.src} key={props.src} triggers={['onClick']}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={props.alt} {...props} />
      </PhotoView>
    </PhotoProvider>
  );
}
export default PhotoViewer;
