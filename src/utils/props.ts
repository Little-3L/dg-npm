/* eslint-disable @typescript-eslint/no-explicit-any */
import assign from 'lodash/assign';
import assignWith from 'lodash/assignWith';
import isUndefined from 'lodash/isUndefined';
import type { CSSProperties, ReactElement } from 'react';
import React from 'react';

/**
 * 合并默认 props 和传入的 props
 */
export function mergeProps<A, B>(a: A, b: B): B & A;
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
export function mergeProps(...items: any[]) {
  function customizer(objValue: any, srcValue: any) {
    return isUndefined(srcValue) ? objValue : srcValue;
  }

  let ret = assign({}, items[0]);
  for (let i = 1; i < items.length; i++) {
    ret = assignWith(ret, items[i], customizer);
  }
  return ret;
}

/**
 * 为组件 Props 添加 className 和 style
 */
export interface NativeProps<S extends string = never> {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
}

/**
 * 克隆一个 ReactElement 并且添加 className 和 style
 */
export function withNativeProps<P extends NativeProps>(props: P, element: ReactElement) {
  const p = {
    ...element.props,
  };
  if (props.className) {
    p.className = `${element.props.className && element.props.className} ${props.className}`;
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }
  for (const key in props) {
    // eslint-disable-next-line no-prototype-builtins
    if (!props.hasOwnProperty(key)) continue;
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }
  return React.cloneElement(element, p);
}
