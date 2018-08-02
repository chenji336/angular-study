import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations'

// void代表这个元素没有被渲染到界面上
export const voidAnimation =
    trigger('flyInOut', [
        // state中样式才会被保留
        state('in', style({
            transform: 'translateX(0)'
        })),
        // 进场 别名':enter'
        transition('void => *', [
            style({
                transform: 'translateX(-100%)'
            }),
            animate(1000)
        ]),
        // 离场 别名':leave'
        transition('* => void', [
            animate(1000, style({
                transform: 'translateX(100%)'
            }))
        ]),
    ])

// 自动属性值（当不知道元素里面 内容的 高宽时候可以使用*代替。如果知道本身高度可以自己定义）
export const autoCaclAnimation =
    trigger('shrinkOut', [
        state('in', style({
            height: '*'
        })),
        transition('* => void', [
            animate(1000, style({
                height: 0
            }))
        ])
    ])

// 关键帧动画(frames)
// offset代表百分比（0-1）
export const framesAnimation =
    trigger('framesFlyInOut', [
        state('in', style({
            transform: 'translateX(0)'
        })),
        transition('* => void', animate(1000, keyframes([
            style({
                opacity: 0,
                transform: 'translateX(0)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(-15px)',
                offset: 0.7
            }),
            style({
                opacity: 1,
                transform: 'translateX(100%)',
                offset: 1
            }),
        ]))),
        transition('void => *', animate(1000, keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(15px)',
                offset: 0.3
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            }),
        ]))),
    ])

// 并行组动画(group) 用处：定义不同时间线的缓存动画
export const groupAnimation =
    trigger('groupFlyInOut', [
        state('in', style({
            width: 120,
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({
                width: 10,
                transform: 'translateX(50px)',
                opacity: 0
            }),
            group([
                animate('3s 1s ease', style({
                    transform: 'translateX(0)',
                    width: 120
                })),
                animate('3s ease', style({
                    opacity: 1
                }))
            ])
        ]),
        transition('* => void', [
            group([
                animate('3s ease', style({
                    transform: 'translateX(50px)',
                    width: 10
                })),
                // 这样就可以在延迟0.2s后再消失
                animate('3s 2s ease', style({
                    opacity: 0
                }))
            ])
        ])
    ])