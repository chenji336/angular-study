import { trigger, state, style, transition, animate } from '@angular/animations'

export const baseAnimation =
    trigger('baseState', [
        // state中样式才会被保留
        state('inactive', style({
            backgroundColor: '#eee',
            transform: 'scale(1)'
        })),
        state('active', style({
            backgroundColor: '#cfd8dc',
            transform: 'scale(1.1)'
        })),
        // 如果有相同的时间线(animate)可以使用transition('inactive<=>active')
        transition('inactive => active', animate('1000ms 200ms ease-in')), // 延迟（delay)200ms执行
        transition('active => inactive', animate('1000ms ease-out'))
    ])

// 样式不被保留，只在动画的时候显示出来
export const tempAnimation =
    trigger('tempState', [
        transition('inactive => active', [
            style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            }),
            animate('1000ms ease-in', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            }))
        ]),
        transition('active => inactive', [
            style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            }),
            animate('1000ms ease-in', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            }))
        ])
    ])