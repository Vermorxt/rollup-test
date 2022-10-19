/* eslint-disable @next/next/no-img-element */
import React, { FC, forwardRef } from 'react'
import Ui_Functions from '../../../_utils'
import { DEFAULT_AVATAR } from '../../../_constants/main'
import { convertObjectToArray, getClassNamesFromAttributes, getUsedAttributes } from '../../_utils/css-class-generator'
import { Ui_AvatarProps } from '../type'

const Ui_Avatar: any = forwardRef<HTMLDivElement, Ui_AvatarProps & { Group: FC }>(
  ({ className, src, style, usePlaceHolder, ...rest }, ref) => {
    const convertAttributeToClassName_avatar = [
      ['large', 'medium', 'small', 'mini', 'tiny'], // NOTE: attributes to convert
      ['32', '20', '16', '12', '8'], // NOTE: attributes translated based on attributes above
    ]

    const convertAttributeToClassName_shapes = [
      ['squircle', 'hexagon', 'triangle'], // NOTE: attributes to convert
      [], // NOTE: attributes translated based on attributes above
    ]

    const { roundedXl, rounded2xl, rounded3xl, roundedLg, roundedFull } = rest
    const { online, offline } = rest
    const { large, medium, small, mini, tiny } = rest
    const { squircle, hexagon, triangle } = rest
    const { ring, ringPrimary, ringSecondary, ringOffset, ringOffsetBackground } = rest

    // NOTE: radius styles

    const usedRadius = getUsedAttributes(rest, { roundedXl, rounded2xl, rounded3xl, roundedLg, roundedFull })
    const radiusStyle = usedRadius.map(s => Ui_Functions.Helper.splitCamelCaseMinus(s)).toString()

    // NOTE: size styles

    const usedSizes = getUsedAttributes(rest, { large, medium, small, mini, tiny })
    const usedSizesObj = convertObjectToArray(usedSizes)

    const classAttributes = getClassNamesFromAttributes({
      names: usedSizesObj,
      convert: convertAttributeToClassName_avatar,
      withoutPrefix: [],
      addPrefix: 'w',
      defaultValue: 'w-24',
    })

    // NOTE: shape styles

    const usedShape = getUsedAttributes(rest, { squircle, hexagon, triangle })
    const usedShapeObj = convertObjectToArray(usedShape)

    const shapeAttributes = getClassNamesFromAttributes({
      names: usedShapeObj,
      convert: convertAttributeToClassName_shapes,
      withoutPrefix: [],
      addPrefix: 'mask',
    })

    // NOTE: ring styles

    const usedRing = getUsedAttributes(rest, { ringPrimary, ringSecondary })
    const ringStyle = usedRing.map(s => Ui_Functions.Helper.splitCamelCaseMinus(s)).toString()

    const ringOffsetStyle = ringOffset ? `ring-offset-${ringOffset}` : ''

    return (
      <div
        style={style}
        ref={ref}
        className={`
        avatar
        ${usePlaceHolder ? 'placeholder' : ''} 
        ${online ? 'online' : ''} ${offline ? 'offline' : ''}
        ${className ? className : ''} 
        `}
      >
        <div
          className={`
        ${usePlaceHolder ? 'bg-neutral-focus text-neutral-content' : ''} 
        ${classAttributes} 
        ${radiusStyle || 'rounded'}  
        ${
          ring
            ? 'ring ' +
              `${ringStyle} ${
                ringOffsetStyle ? `${ringOffsetStyle} ring-offset-${ringOffsetBackground || 'base-100'}` : ''
              }`
            : ''
        }  
        ${shapeAttributes ? 'mask ' + shapeAttributes : ''}`}
        >
          {!usePlaceHolder && <img src={src || DEFAULT_AVATAR} alt="" />}
          {usePlaceHolder && <span>{usePlaceHolder}</span>}
        </div>
      </div>
    )
  }
)

export const Group: any = forwardRef<HTMLDivElement, Ui_AvatarProps>(({ children, style, className, ...rest }, ref) => {
  return (
    <div className={`avatar-group -space-x-6 ${className ? className : ''}`} ref={ref} style={style}>
      {children}
    </div>
  )
})

Ui_Avatar.Group = Group

export default Ui_Avatar
